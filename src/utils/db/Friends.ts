import prisma from '../../../prisma/prisma';

export async function FriendsAll() {
  return await prisma.friends.findMany();
}
