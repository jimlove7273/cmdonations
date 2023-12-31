import DonationHeader from './DonationHeader';
import DonationList from './DonationList';
import FilterRow from './Filter';

export default function DonationPage() {
  return (
    <div className="flex flex-col w-full">
      <DonationHeader />
      <FilterRow />
      <DonationList />
    </div>
  );
}
