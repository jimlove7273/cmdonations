'use client';
import axios from 'axios';

import FriendsHeader from './FriendsHeader';
import FriendList from './FriendList';
// import { FriendsAll } from '@/utils/db/friendsDB';

const getFriends = async () => {
  try {
    const resonse = await axios.get('http://localhost:3001/api/friends');
    return resonse.data;
  } catch (error: any) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
};

export async function FriendsPage() {
  const friends = await getFriends();
  return (
    <div className="flex flex-col w-full">
      <FriendsHeader friends={friends} />
      <FriendList friends={friends} />
    </div>
  );
}
