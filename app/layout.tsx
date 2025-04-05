"use client";
import {usePathname} from "next/navigation";
import "./globals.css";
import Header from "@/components/Header";
import {SessionProvider} from "next-auth/react";

const disableHeader = ["/sign-in", "/sign-up"];

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 const pathname = usePathname();
 return (
  <html lang="en">
   <head>
    <title>Sellaris</title>
    <meta
     name="viewport"
     content="width=device-width, initial-scale=1"
    />
    <link
     rel="stylesheet"
     href="/favicon.ico"
    />
   </head>
   <body>
    <SessionProvider>
     {!disableHeader.includes(pathname) && <Header />}
     {children}
    </SessionProvider>
   </body>
  </html>
 );
}
