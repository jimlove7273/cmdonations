import { FriendsType } from '@/types/friendsType';
import prisma from '../../../prisma/prisma';
import axios from 'axios';

/**
 *
 * getFriends - this "gets" all friends from the API/Database
 * @returns
 *
 */
export async function getFriends() {
  const res = await axios.get('/api/friends');
  return res.data;
}

/**
 *
 * AddNewFriend: Add a New Friend
 *
 */
export async function AddFriendFunction(friend: FriendsType) {
  try {
    const result = await prisma.friends.create({
      data: {
        friendId: Date.now(),
        firstName: friend?.firstName || '',
        lastName: friend?.lastName || '',
        chineseName: friend?.chineseName,
        email: friend?.email || '',
        address: friend?.address,
        city: friend?.city,
        state: friend?.state,
        zipCode: friend?.zipCode,
        country: friend?.country,
        DNS: false,
      },
    });

    return result;
  } catch (error: any) {
    // Handle the error, log it, or perform any necessary actions
    console.error('Error adding friend:', error.message);
    throw error; // Rethrow the error to propagate it to the calling code
  }
  // finally {
  //   // Close the Prisma client connection in the finally block
  //   await prisma.$disconnect();
  // }
}
