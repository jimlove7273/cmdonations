'use client';
import { useState } from 'react';
import AddFriend from './AddFriend';

const FriendsCreateHeader = ({ children }: { children: React.ReactNode }) => {
  const [addFriendDialog, setAddFriendDialog] = useState(false);
  return (
    <>
      {addFriendDialog && <AddFriend setAddFriendDialog={setAddFriendDialog} />}

      <div className="bg-[#e5f7e9] p-5">
        <div className="flex justify-between mb-9">
          <div className="font-oswald text-xl">Clay Music Donations</div>
          <div>x</div>
        </div>
        <div className="bg-white w-full flex flex-col justify-between gap-4 items-center p-5 shadow-[0px_6px_23px_10px_#00000024]">
          <div className="font-bold mb-10 text-xl">Add Friend</div>
          <div className="w-4/5 mx-auto">
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendsCreateHeader;
