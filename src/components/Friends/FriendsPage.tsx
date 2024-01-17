'use client';
import FriendsHeader from './FriendsHeader';
import FriendList from './FriendList';
import { getFriends } from '@/utils/db/friendsDB';

import { useQuery } from '@tanstack/react-query';

export function FriendsPage() {
  const {
    error,
    isLoading,
    data: friends,
  } = useQuery({
    queryKey: ['friends'],
    queryFn: getFriends,
  });

  isLoading && <>Loading...</>;
  error && <>Error</>;
  console.log('data', friends, error, isLoading);

  return (
    <div className="flex flex-col w-full">
      <FriendsHeader friends={friends?.length ? friends : []} />
      <FriendList friends={friends?.length ? friends : []} />
    </div>
  );
}
