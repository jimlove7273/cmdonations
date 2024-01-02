import prisma from '../../../prisma/prisma';

/**
 * FriendsAll: Get ALL Friends
 * @returns
 */
export async function FriendsAll() {
  return await prisma.friends.findMany();
}
