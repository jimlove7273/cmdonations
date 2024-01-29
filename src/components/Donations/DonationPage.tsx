import DonationHeader from './DonationHeader';
import DonationList from './DonationList';
import prisma from '../../../prisma/prisma';
import FilterRow from './Filter';

async function getPrismaDonations() {
  return await prisma.donations.findMany();
}

export async function DonationPage() {
  const donations = await getPrismaDonations();
  console.log('donations', donations);
  return (
    <div className="flex flex-col w-full">
      <DonationHeader donations={donations} />
      <FilterRow />
      <DonationList donations={donations} />
    </div>
  );
}
