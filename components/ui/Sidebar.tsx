import Link from "next/link";

const Sidebar = () => {
 return (
  <div className="fixed left-0 top-0 z-40 flex flex-col items-center h-full w-full max-w-[250px] bg-gradient-to-br from-slate-500 to-slate-800 p-5">
   <Link href="/">
    <h1 className="text-2xl font-bold italic text-white">SELLARIS</h1>
   </Link>
  </div>
 );
};

export default Sidebar;
