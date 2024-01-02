import prisma from '../../../prisma/prisma';

export async function DonationAll() {
  return await prisma.donations.findMany();
}
