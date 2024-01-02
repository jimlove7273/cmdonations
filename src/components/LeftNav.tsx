import Link from 'next/link';
import { FaPerson } from 'react-icons/fa6';
import { FaDonate } from 'react-icons/fa';
import { TbReport } from 'react-icons/tb';

const LeftNav = () => {
  return (
    <div className="flex flex-col pt-20 pr-4 border-r p-3 border-r-slate-100 shadow-[3px_0px_15px_0px_#00000024]">
      <Link href="/friends" className="flex gap-3 mb-3 text-sm">
        <FaPerson color="#3072db" size={18} /> Friends
      </Link>
      <Link href="/" className="flex gap-3 mb-3 text-sm">
        <FaDonate color="#1bab33" size={18} /> Donations
      </Link>
      <Link href="/" className="flex gap-3 mb-3 text-sm">
        <TbReport color="#6632a8" size={18} /> Receipts
      </Link>
    </div>
  );
};

export default LeftNav;
