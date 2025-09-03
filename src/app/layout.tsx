'use client'
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import TopBar from "@/components/layout/TopBar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"], // choose weights
  variable: "--font-inter", // optional CSS variable
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)

{

  const pathname = usePathname();
  console.log(pathname)

  return (
    <html lang="en" className={inter.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {
          pathname==='/registration' || pathname==='/login' || pathname==='/forget' ?
          <>
          </> : <>
          <div className=" w-full bg-black text-[#FFFFFF] font-[inter]  "><TopBar></TopBar></div>
            <div className=" min-h-28  font-[inter]"><Navbar></Navbar></div>
          </>
        }
        {children}
     
           {
          pathname==='/registration' || pathname==='/login' || pathname==='/forget' ?
          <>  </> : <> <Footer ></Footer></>
        }
      </body>
    
    </html>
  );
}
