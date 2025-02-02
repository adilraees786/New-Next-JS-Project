import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Headertop from "@/Components/Headertop";
import Headermain from "@/Components/Headermain";
import Navbar from "@/Components/Navbar.";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shopping Website",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
         <Headertop/>
         <Headermain/>
         <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
