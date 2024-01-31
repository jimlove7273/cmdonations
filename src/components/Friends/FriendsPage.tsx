import FriendsHeader from './FriendsHeader';
import FriendList from './FriendList';
import prisma from '../../../prisma/prisma';

export async function getPrismaFriends() {
  return await prisma.friends.findMany();
}

export async function FriendsPage() {
  let friends = await getPrismaFriends();

  return (
    <div className="flex flex-col w-full">
      <FriendsHeader friends={friends} />
      <FriendList friends={friends} />
    </div>
  );
}
