"use client";
import React, {useState} from "react";
import {useSession, signIn, signOut} from "next-auth/react";
import {TiArrowSortedDown} from "react-icons/ti";

interface FlyoutProps {
 onClose: () => void;
 isOpen: boolean;
}

const Flyout: React.FC<FlyoutProps> = ({onClose, isOpen}) => {
 const {data: session, status}: {data: any; status: string} = useSession();
 if (!isOpen) return null;
 return (
  <div className="flex flex-col items-center justify-center shadow-md absolute bg-white right-10 top-14 w-auto h-[200px] rounded text-black p-3">
   {status === "authenticated" ? (
    <>
     <div className="flex flex-col gap-2 w-full">
      <h4>{session?.user?.email}</h4>
      <button>Profil</button>
      <button
       className="text-black cursor-pointer"
       onClick={() => signOut()}>
       Keluar
      </button>
     </div>
    </>
   ) : (
    <button
     className=" font-semibold cursor-pointer text-white"
     onClick={() => signIn()}>
     Masuk
    </button>
   )}
  </div>
 );
};

const Session = () => {
 const [isOpen, setIsOpen] = useState(false);

 const handleOpen = () => {
  setIsOpen(true);
 };

 const {data: session, status}: {data: any; status: string} = useSession();
 return (
  <div className="flex items-center justify-center gap-5">
   {status === "authenticated" ? (
    <div>
     <button
      onClick={handleOpen}
      className="flex items-center gap-2 cursor-pointer">
      <h4>{session?.user?.email}</h4>
      <TiArrowSortedDown />
     </button>
     {isOpen && (
      <Flyout
       isOpen={isOpen}
       onClose={() => setIsOpen(false)}
      />
     )}
    </div>
   ) : (
    <button
     className="cursor-pointer text-white"
     onClick={() => signIn()}>
     Masuk
    </button>
   )}
  </div>
 );
};

export default Session;
