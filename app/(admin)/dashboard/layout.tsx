import Sidebar from "@/components/ui/Sidebar";

export default function Layout({
 children,
 products,
 analytics,
 payments,
}: {
 children: React.ReactNode;
 products: React.ReactNode;
 analytics: React.ReactNode;
 payments: React.ReactNode;
}) {
 return (
  <div className="flex">
   <Sidebar />
   <div className="flex flex-col w-full p-5 ml-64">
    <div>{children}</div>
    <div className="flex  mt-5 justify-center items-center ">
     {products}
     {analytics}
    </div>
    {payments}
   </div>
  </div>
 );
}
