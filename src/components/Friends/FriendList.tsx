import Link from 'next/link';
import { FriendsType } from '@/types/friendsType';
import { FaRegEdit } from 'react-icons/fa';
import { LiaMoneyBillWaveAltSolid } from 'react-icons/lia';
import { RiDeleteBin5Line } from 'react-icons/ri';

const FriendList = ({ friends }: { friends: FriendsType[] }) => {
  return (
    <div className="bg-zinc-100 h-full">
      <div className="p-5 mx-5 mb-5 bg-white">
        <table className="w-full">
          <thead>
            <tr>
              <td></td>
              <td></td>
              <td>Rec</td>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Email</td>
              <td>City</td>
              <td>State</td>
              <td>Zip Code</td>
              <td>Country</td>
              <td>&nbsp;</td>
            </tr>
          </thead>
          <tbody>
            {friends.map((friend: FriendsType) => (
              <tr key={friend?.id}>
                <td>
                  <FaRegEdit />
                </td>
                <td>
                  <RiDeleteBin5Line />
                </td>
                <td>{friend?.id}</td>
                <td>{friend?.firstName}</td>
                <td>{friend?.lastName}</td>
                <td>{friend?.email}</td>
                <td>{friend?.city}</td>
                <td>{friend?.state}</td>
                <td>{friend?.zipCode}</td>
                <td>{friend?.country}</td>
                <td>
                  <Link href={`/donations/${friend?.id}`}>
                    <LiaMoneyBillWaveAltSolid />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FriendList;
