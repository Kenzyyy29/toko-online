import Link from "next/link";

export default function SignUp() {
 return (
  <div className="h-screen flex justify-center items-center bg-gradient-to-br from-slate-500 to-slate-800">
   <div className="bg-white/20 backdrop-blur-lg w-[340px] min-h-[400px] flex flex-col gap-4 justify-center items-center p-4 rounded-lg shadow-lg">
    <h1 className="text-2xl font-bold text-white">Shopify.io</h1>
    <form className="w-full flex flex-col items-center justify-center gap-4">
     <div className="flex flex-col gap-2 w-full">
      <label
       htmlFor="name"
       className="text-white">
       Your Name
      </label>
      <input
       name="name"
       type="name"
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
       className="w-full border border-white text-white focus:outline-none p-2 rounded"
       placeholder="Password"
      />
     </div>
     <div className="flex gap-2 items-center w-full">
      <input
       type="checkbox"
       name="checkbox"
       id=""
      />
      <p className="text-[14px] text-white">
       Saya menyetujui untuk mengirimkan data
      </p>
     </div>
     <button
      type="submit"
      className="w-full bg-slate-800 p-2 rounded text-white">
      Masuk
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
