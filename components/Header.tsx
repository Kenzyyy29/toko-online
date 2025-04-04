import Link from "next/link";

export default function Header() {
 return (
  <header className="sticky z-10 top-0 p-5 px-10 flex items-center justify-between bg-slate-800 text-white">
   <button className="text-2xl font-bold italic">
    <Link href="/">Shopify.io</Link>
   </button>

   <div className="flex items-center justify-center gap-5">
    <button>
     <Link href="/product">Produk</Link>
    </button>
    <button className="">
     <Link href="/sign-in">Masuk</Link>
    </button>
   </div>
  </header>
 );
}
