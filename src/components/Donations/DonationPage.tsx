import prisma from '../../../prisma/prisma';
import DonationHeader from './DonationHeader';
import DonationList from './DonationList';
import FilterRow from './Filter';

export async function DonationPage() {
  const donations = await prisma.donations.findMany();
  return (
    <div className="flex flex-col w-full">
      <DonationHeader donations={donations} />
      <FilterRow />
      <DonationList donations={donations} />
    </div>
  );
}
