"use client";
import {useState} from "react";
import {useSession, signIn, signOut} from "next-auth/react";

import Link from "next/link";
import {VscSignOut} from "react-icons/vsc";

//react-icons
import {TiArrowSortedDown} from "react-icons/ti";
import {MdPerson, MdOutlineSpaceDashboard} from "react-icons/md";

interface FlyoutProps {
 onClose: () => void;
 isOpen: boolean;
}

const nav = [
 {name: "Profil", path: "/profile", icon: <MdPerson />},
 {name: "Dashboard", path: "/dashboard", icon: <MdOutlineSpaceDashboard />},
];

const Flyout: React.FC<FlyoutProps> = ({onClose, isOpen}) => {
 const {data: session, status}: {data: any; status: string} = useSession();
 if (!isOpen) return null;
 return (
  <div
   className="fixed top-0 left-0 right-0 bottom-0"
   onClick={onClose}>
   <div className="flex flex-col items-center overflow-hidden justify-center shadow-md absolute bg-white right-10 top-14 rounded text-black">
    {status === "authenticated" ? (
     <div className="flex flex-col">
      <div className="flex flex-col gap-2 p-2">
       <h4>{session?.user?.email}</h4>
      </div>
      <hr />
      <div className="flex flex-col w-full">
       {nav.map((item) => (
        <Link
         href={item.path}
         key={item.name}>
         <button
          className="text-black cursor-pointer flex justify-between items-center p-2 w-full hover:bg-gray-300 bg-white"
          onClick={() => onClose()}>
          {item.name}
          {item.icon}
         </button>
        </Link>
       ))}
       <button
        className="text-black cursor-pointer w-full flex justify-between p-2 bg-white hover:bg-gray-300 items-center"
        onClick={() => signOut()}>
        Keluar
        <VscSignOut />
       </button>
      </div>
     </div>
    ) : (
     <button
      className=" font-semibold cursor-pointer text-white"
      onClick={() => signIn()}>
      Masuk
     </button>
    )}
   </div>
  </div>
 );
};

const Session = () => {
 const [logo, setLogo] = useState(false);
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
      className="flex items-center cursor-pointer">
      <TiArrowSortedDown
       className={`transition-transform duration-500 ${
        isOpen ? "transform rotate-180" : ""
       }`}
      />
      <h4>{session?.user?.fullname}</h4>
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
