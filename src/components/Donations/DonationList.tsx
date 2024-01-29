import { DonationsType } from '@/types/donationsType';

const DonationList = ({ donations }: { donations: DonationsType[] }) => {
  return (
    <div className="bg-zinc-100">
      <div className="p-5 mx-5 mb-5 bg-white">
        <table className="w-full">
          <thead>
            <tr>
              <td>Date</td>
              <td>Friend</td>
              <td>Email</td>
              <td>Location</td>
              <td>Type</td>
              <td>Check #</td>
              <td>Amount</td>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation: DonationsType) => (
              <tr key={donation.id}>
                <td>{donation.donationDate.toLocaleDateString()}</td>
                <td>{donation.Check}</td>
                <td>{donation.Check}</td>
                <td>{donation.Check}</td>
                <td>{donation.Type}</td>
                <td>{donation.Check}</td>
                <td>{donation.Amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonationList;
