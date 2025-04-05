"use client";

import {signOut, useSession} from "next-auth/react";
import {signIn} from "next-auth/react";
import Link from "next/link";

export default function Header() {
 const {data: session, status}: {data: any; status: string} = useSession();
 return (
  <header className="sticky z-10 top-0 p-5 px-10 flex items-center justify-between bg-slate-800 text-white">
    
   <button className="text-2xl font-bold italic">
    <Link href="/">Sellaris</Link>
   </button>

   <div className="flex items-center justify-center gap-5">
    {status === "authenticated" ? (
     <>
      <h4>{session?.user?.fullname}</h4>
      <button
       className="bg-white rounded-md px-3 text-sm h-7 cursor-pointer text-slate-800"
       onClick={() => signOut()}>
       Keluar
      </button>
     </>
    ) : (
     <button
      className="bg-white rounded-md px-3 text-sm h-7 cursor-pointer text-slate-800"
      onClick={() => signIn()}>
      Masuk
     </button>
    )}
   </div>
  </header>
 );
}
