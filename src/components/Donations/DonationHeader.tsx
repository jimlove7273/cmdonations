const DonationHeader = () => {
  return (
    <div className="bg-[#e5f7e9] p-5 pb-0">
      <div className="flex justify-between mb-9">
        <div className="font-oswald text-xl">Clay Music Donations</div>
        <div>x</div>
      </div>
      <div className="bg-white flex justify-between gap-4 items-center p-5 shadow-[0px_6px_23px_10px_#00000024]">
        <div className="font-bold">List of Donations</div>
        <div className="flex gap-4">
          <div className="flex flex-col items-end">
            <div className="font-roboto text-[11px] text-[#bbb]">
              Total Amount
            </div>
            <div className="text-[#739e47] text-xl font-semibold">
              $8,400.00
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="font-roboto text-[11px] text-[#bbb]">
              Transactions
            </div>
            <div className="text-zinc-900 text-xl font-semibold">4</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationHeader;
