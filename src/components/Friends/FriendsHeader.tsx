const FriendsHeader = () => {
  return (
    <div className="bg-[#e5f7e9] p-5 pb-0">
      <div className="flex justify-between mb-9">
        <div className="font-oswald text-xl">Clay Music Donations</div>
        <div>x</div>
      </div>
      <div className="bg-white flex justify-between gap-4 items-center p-5 shadow-[0px_6px_23px_10px_#00000024]">
        <div>
          <div className="font-bold">List of Friends</div>
          <div className="text-[10px] uppercase inline-block rounded-md px-3 py-1 bg-blue-700 text-gray-200">
            Add
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col items-end">
            <div className="font-roboto text-[11px] text-[#bbb]">Friends</div>
            <div className="text-zinc-900 text-xl font-semibold">4</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsHeader;
