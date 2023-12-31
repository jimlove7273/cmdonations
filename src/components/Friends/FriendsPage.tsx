import FriendsHeader from './FriendsHeader';
import FriendList from './FriendList';
// import FilterRow from './Filter';

export default function FriendsPage() {
  return (
    <div className="flex flex-col w-full">
      <FriendsHeader />
      <FriendList />
    </div>
  );
}
