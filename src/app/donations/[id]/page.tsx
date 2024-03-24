import React from 'react';
import DonationByFriendHeader from '@/components/Donations/DonationByFriendHeader';
import DonationList from '@/components/Donations/DonationList';
import prisma from '../../../../prisma/prisma';

type paramProps = {
  id: number;
};

async function getPrismaDonations(friendId: number) {
  let _friendId =
    typeof friendId === 'string' ? parseInt(friendId) : friendId ?? 0;
  return await prisma.donations.findMany({
    where: {
      friendsId: _friendId,
    },
  });
}

async function getPrismaFriend(friendId: number) {
  let _friendId =
    typeof friendId === 'string' ? parseInt(friendId) : friendId ?? 0;
  return await prisma.friends.findFirst({
    where: {
      id: _friendId,
    },
  });
}

const DonationByFriend = async ({ params }: { params: paramProps }) => {
  let friendId = params.id; // params.id is always a string
  // console.log('friendId', friendId, typeof friendId);

  const donations = await getPrismaDonations(friendId);
  console.log('donations', donations);
  const friend = await getPrismaFriend(friendId);
  // console.log('friend', friend);

  return (
    <div className="w-full">
      <DonationByFriendHeader friend={friend} />
      <DonationList friend={friend} donations={donations} />
    </div>
  );
};

export default DonationByFriend;
