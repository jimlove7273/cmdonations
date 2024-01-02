import { DonationAll } from '@/utils/db/donationsDB';
import DonationHeader from './DonationHeader';
import DonationList from './DonationList';
import FilterRow from './Filter';

export async function DonationPage() {
  const donations = await DonationAll();
  return (
    <div className="flex flex-col w-full">
      <DonationHeader donations={donations} />
      <FilterRow />
      <DonationList donations={donations} />
    </div>
  );
}
