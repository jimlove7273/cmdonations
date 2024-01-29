'use client';
import Link from 'next/link';
import { FaPerson } from 'react-icons/fa6';
import { FaDonate } from 'react-icons/fa';
import { TbReport } from 'react-icons/tb';
import { usePathname } from 'next/navigation';

const LeftNav = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col pt-20 border-r border-r-slate-100 shadow-[3px_0px_15px_0px_#00000024]">
      <Link
        href="/friends"
        className={`flex gap-3 pl-3 p-2 text-sm hover:bg-[#e5f7e9] ${
          pathname.includes('friends') ? 'bg-[#cfe3d3]' : ''
        }`}
      >
        <FaPerson color="#3072db" size={18} /> Friends
      </Link>
      <Link href="/" className="flex gap-3 pl-3 p-2 text-sm hover:bg-[#e5f7e9]">
        <FaDonate color="#1bab33" size={18} /> Donations
      </Link>
      <Link href="/" className="flex gap-3 pl-3 p-2 text-sm hover:bg-[#e5f7e9]">
        <TbReport color="#6632a8" size={18} /> Receipts
      </Link>
    </div>
  );
};

export default LeftNav;
