import Link from "next/link";

// components
import Session from "@/components/layouts/Session";

export default function Header() {
 return (
  <header className="sticky z-10 top-0 p-5 px-10 flex items-center justify-between bg-slate-800 text-white">
   <button className="text-2xl font-bold italic">
    <Link href="/">SELLARIS</Link>
   </button>
   <Session />
  </header>
 );
}
