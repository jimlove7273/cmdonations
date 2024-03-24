'use client';
import { useState } from 'react';
import { FriendsType } from '@/types/friendsType';
import AddFriend from './AddFriend';

const FriendsHeader = ({ friends }: { friends: FriendsType[] }) => {
  const [addFriendDialog, setAddFriendDialog] = useState(false);
  return (
    <>
      {addFriendDialog && <AddFriend setAddFriendDialog={setAddFriendDialog} />}

      <div className="bg-[#e5f7e9] p-5 pb-0">
        <div className="flex justify-between mb-9">
          <div className="font-oswald text-xl">Clay Music Donations</div>
          <div>x</div>
        </div>
        <div className="bg-white flex justify-between gap-4 items-center p-5 shadow-[0px_6px_23px_10px_#00000024]">
          <div>
            <div className="font-bold">List of Friends</div>
          </div>
          <div>
            <div
              onClick={() => setAddFriendDialog(true)}
              className="text-sm font-semibold inline-block rounded-md px-3 py-1 cursor-pointer hover:bg-slate-300 hover:border-b"
            >
              Add
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col items-end">
              <div className="font-roboto text-[11px] text-[#bbb]">Friends</div>
              <div className="text-zinc-900 text-xl font-semibold">
                {friends.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendsHeader;
