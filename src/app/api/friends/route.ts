import prisma from '../../../../prisma/prisma';
import { NextRequest, NextResponse } from 'next/server';

/**
 * FriendsAll: Get ALL Friends
 * @returns
 */
export async function GET() {
  const friends = await prisma.friends.findMany();
  return NextResponse.json(friends);
}

/**
 * AddNewFriend: Add a New Friend
 */
export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const response = await req.json();
    console.log('POST friend', response);
    // return NextResponse.json({ res });
    const result = await prisma.friends.create({
      data: {
        friendId: 2,
        firstName: response.firstName,
        lastName: response.lastName,
        chineseName: response.chineseName,
        email: response.email,
        address: response.address,
        city: response.city,
        state: response.state,
        zipCode: response.zipCode,
        country: response.country,
        DNS: false,
      },
    });
    return Response.json(result);
  } catch (error: any) {
    // Handle the error, log it, or perform any necessary actions
    console.error('Error adding friend:', error.message);
    throw error; // Rethrow the error to propagate it to the calling code
  } finally {
    // Close the Prisma client connection in the finally block
    await prisma.$disconnect();
  }
}
