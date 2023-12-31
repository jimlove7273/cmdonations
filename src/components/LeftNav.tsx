import { FaPerson } from 'react-icons/fa6';
import { FaDonate } from 'react-icons/fa';
import { TbReport } from 'react-icons/tb';

const LeftNav = () => {
  return (
    <div className="flex flex-col pr-4 border-r p-3 border-r-slate-100 shadow-[3px_0px_15px_0px_#00000024]">
      <div className="flex gap-3 mb-2">
        <FaPerson color="#3072db" size={20} /> Friends
      </div>
      <div className="flex gap-3 mb-2">
        <FaDonate color="#1bab33" size={20} /> Donations
      </div>
      <div className="flex gap-3">
        <TbReport color="#6632a8" size={20} /> Receipts
      </div>
    </div>
  );
};

export default LeftNav;
