import FriendsHeader from './FriendsHeader';
import FriendList from './FriendList';
import { FriendsAll } from '@/utils/db/friendsDB';

export async function FriendsPage() {
  const friends = await FriendsAll();
  return (
    <div className="flex flex-col w-full">
      <FriendsHeader friends={friends} />
      <FriendList friends={friends} />
    </div>
  );
}
