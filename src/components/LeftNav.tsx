'use client';
import Link from 'next/link';
import { FaPerson } from 'react-icons/fa6';
import { FaDonate } from 'react-icons/fa';
import { TbReport } from 'react-icons/tb';
import { usePathname } from 'next/navigation';

const LeftNav = () => {
  const pathname = usePathname();

  return (
    <div className="w-[200px] bg-slate-700 text-white flex flex-col pt-20 border-r border-r-slate-100 shadow-[3px_0px_15px_0px_#00000024] h-[calc(100vh-80px)]">
      <Link
        href="/friends"
        className={`flex gap-3 pl-3 p-2 text-sm hover:bg-[#38569c] ${
          pathname.includes('friends') ? 'bg-[#38569c]' : ''
        }`}
      >
        <FaPerson color="#a3c0f0" size={18} /> Friends
      </Link>
      <Link
        href="/donations"
        className="flex gap-3 pl-3 p-2 text-sm hover:bg-[#38569c]"
      >
        <FaDonate color="#b6debd" size={18} /> Donations
      </Link>
      <Link href="/" className="flex gap-3 pl-3 p-2 text-sm hover:bg-[#38569c]">
        <TbReport color="#c4ace3" size={18} /> Receipts
      </Link>
    </div>
  );
};

export default LeftNav;
