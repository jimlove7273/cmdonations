import { FriendsType } from '@/types/friendsType';

const DonationByFriendHeader = ({ friend }: { friend: FriendsType }) => {
  return (
    <div className="bg-[#e5f7e9] p-5 pb-0">
      <div className="flex justify-between mb-9">
        <div className="font-oswald text-xl">Clay Music Donations</div>
        <div>x</div>
      </div>
      <div className="bg-white flex justify-between gap-4 items-center p-5 shadow-[0px_6px_23px_10px_#00000024]">
        <div className="flex items-start gap-1">
          <div className="text-sm top-0">Donations by</div>
          <div>
            <span className="font-semibold text-normal text-blue-800">
              {friend?.firstName} {friend?.lastName}
            </span>
            <br />
            <span className="text-xs">
              {friend?.address}, {friend?.city} {friend?.state}{' '}
              {friend?.zipCode}
            </span>
            <br />
            <span className="text-xs">{friend?.phone}</span> -&nbsp;
            <span className="text-xs">{friend?.email}</span>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col items-end">
            <div className="font-roboto text-[11px] text-[#bbb]">Friend #</div>
            <div className="text-zinc-900 text-xl font-semibold">
              {friend?.id}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationByFriendHeader;
