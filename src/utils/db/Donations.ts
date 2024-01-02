import prisma from '../../../prisma/prisma';

/**
 * DonationAll: Get ALL Donations
 * @returns
 */
export async function DonationAll() {
  return await prisma.donations.findMany();
}
