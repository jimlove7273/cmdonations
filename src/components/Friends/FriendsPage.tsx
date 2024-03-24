import FriendsHeader from './FriendsHeader';
import FriendList from './FriendList';
import prisma from '../../../prisma/prisma';

export async function getPrismaFriends() {
  return await prisma.friends.findMany();
}

export async function FriendsPage() {
  let friends = await getPrismaFriends();

  return (
    <div className="w-full h-full">
      <FriendsHeader friends={friends} />
      <FriendList friends={friends} />
    </div>
  );
}
