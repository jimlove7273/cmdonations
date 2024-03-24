import { DonationsType } from '@/types/donationsType';
import { FriendsType } from '@/types/friendsType';
import prisma from '../../../prisma/prisma';

const DonationList = ({
  friend,
  donations,
}: {
  friend?: FriendsType;
  donations?: DonationsType[];
}) => {
  console.log('friend', friend);
  console.log('donations', donations);

  const fetchFriendData = async (friendId: number) => {
    return await prisma.friends.findFirst({
      where: {
        id: friendId,
      },
    });
  };

  return (
    <div className="w-full mx-auto px-5 bg-[#d8e9dc] pb-5">
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left pl-3">Date</th>
            <th className="text-left">Friend</th>
            <th className="text-left">Email</th>
            <th className="text-left">Location</th>
            <th className="text-left">Type</th>
            <th className="text-left">Check</th>
            <th className="text-right pr-3">Amount</th>
          </tr>
        </thead>
        <tbody>
          {donations?.map(async (donation) => {
            const friend = await fetchFriendData(donation.friendsId || 0);
            console.log('friendData', friend, donation.friendsId);
            return (
              <tr key={donation.id}>
                <td>{donation?.donationDate.toLocaleDateString()}</td>
                <td>
                  {friend?.firstName} {friend?.lastName}
                </td>
                <td>{friend?.email}</td>
                <td>{friend?.address}</td>
                <td>{donation.Type}</td>
                <td>{donation.Check}</td>
                <td>${donation.Amount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DonationList;
