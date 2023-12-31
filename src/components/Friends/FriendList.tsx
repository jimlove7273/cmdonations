import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const FriendList = async () => {
  const friends = await prisma.friends.findMany();
  console.log('friends', friends);

  return (
    <div className="bg-zinc-100">
      <div className="p-5 mx-5 mb-5 bg-white">
        <table className="w-full">
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
          {friends.map((friend) => (
            <tr key={friend.friendId}>
              <td>{friend.friendId}</td>
              <td>{friend.firstName}</td>
              <td>{friend.lastName}</td>
              <td>{friend.email}</td>
              <td>{friend.city}</td>
              <td>{friend.state}</td>
              <td>{friend.zipCode}</td>
              <td>{friend.country}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default FriendList;
