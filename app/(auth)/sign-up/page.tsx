"use client";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {useState} from "react";

export default function SignUp() {
 const {push} = useRouter();
 const [error, setError] = useState("");
 const [isLoading, setIsLoading] = useState(false);
 const handleSubmit = async (e: any) => {
  e.preventDefault();
  setError("");
  setIsLoading(true);

  const res = await fetch("/api/auth/register", {
   method: "POST",
   body: JSON.stringify({
    fullname: e.target.fullname.value,
    email: e.target.email.value,
    password: e.target.password.value,
   }),
  });
  if (res.status === 200) {
   e.target.reset();
   setIsLoading(false);
   push("/sign-in");
  } else {
   setError("Email Sudah Terdaftar");
   setIsLoading(false);
  }
 };

 return (
  <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-500 to-slate-800">
   {error !== "" && <div className="text-red-600 font-bold mb-3">{error}</div>}
   <div className="bg-white/20 backdrop-blur-lg w-[400px] min-h-[400px] flex flex-col gap-4 justify-center items-center p-4 rounded-lg shadow-lg">
    <h1 className="text-2xl font-bold text-white">Shopify.io</h1>
    <form
     onSubmit={(e) => handleSubmit(e)}
     className="w-full flex flex-col items-center justify-center gap-4">
     <div className="flex flex-col gap-2 w-full">
      <label
       htmlFor="name"
       className="text-white">
       Your Full Name
      </label>
      <input
       name="fullname"
       type="text"
       id="fullname"
       className="w-full border border-white text-white focus:outline-none p-2 rounded"
       placeholder="Name"
      />
     </div>
     <div className="flex flex-col gap-2 w-full">
      <label
       htmlFor="email"
       className="text-white">
       Your Email
      </label>
      <input
       name="email"
       type="email"
       id="email"
       className="w-full border border-white text-white focus:outline-none p-2 rounded"
       placeholder="Email"
      />
     </div>
     <div className="flex flex-col gap-2 w-full">
      <label
       htmlFor="password"
       className="text-white">
       Password
      </label>
      <input
       name="password"
       type="password"
       id="password"
       className="w-full border border-white text-white focus:outline-none p-2 rounded"
       placeholder="Password"
      />
     </div>
     <button
      disabled={isLoading}
      type="submit"
      className="w-full bg-slate-800 p-2 rounded text-white cursor-pointer hover:bg-slate-700">
      {isLoading? "Loading..." : "Daftar"}
     </button>
     <div className="flex gap-2 text-[14px]">
      <h1 className="text-white">Sudah punya akun?</h1>
      <button className="text-blue-300 hover:underline">
       <Link href="/sign-in">Masuk</Link>
      </button>
     </div>
    </form>
   </div>
  </div>
 );
}
