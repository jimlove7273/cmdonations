import prisma from '../../../prisma/prisma';
import FriendsHeader from './FriendsHeader';
import FriendList from './FriendList';
// import FilterRow from './Filter';

export async function FriendsPage() {
  const friends = await prisma.friends.findMany();
  console.log(typeof friends, friends);
  return (
    <div className="flex flex-col w-full">
      <FriendsHeader friends={friends} />
      <FriendList friends={friends} />
    </div>
  );
}
