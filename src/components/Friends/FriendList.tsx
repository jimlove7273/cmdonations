import { FriendsType } from '@/types/friendsType';

const FriendList = ({ friends }: { friends: FriendsType[] }) => {
  return (
    <div className="bg-zinc-100">
      <div className="p-5 mx-5 mb-5 bg-white">
        <table className="w-full">
          <thead>
            <tr>
              <td>Rec</td>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Email</td>
              <td>City</td>
              <td>State</td>
              <td>Zip Code</td>
              <td>Country</td>
            </tr>
          </thead>
          <tbody>
            {friends.map((friend: FriendsType) => (
              <tr key={friend.id}>
                <td>{friend.id}</td>
                <td>{friend.firstName}</td>
                <td>{friend.lastName}</td>
                <td>{friend.email}</td>
                <td>{friend.city}</td>
                <td>{friend.state}</td>
                <td>{friend.zipCode}</td>
                <td>{friend.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FriendList;
