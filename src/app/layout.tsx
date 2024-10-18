import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "./_components/header";
import { Toaster } from "@/components/ui/toaster";
import Footer from "./_components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Libert Paolo SINZOGAN",
  description: "Full stack developer using nestjs, nextjs, Laravel, Python Django",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //bg-gradient-to-r from-[#e6f3d8] to-[#dff0c9]
  return (
    <html lang="en" className="scroll-smooth" >
      <body
        className={`${geistSans.variable} ${geistMono.variable}   bg-[#011222]  antialiased`}
      >
        <div className=" text-white max-w-[58rem] mx-auto  ">
        <Toaster />
          <Header />
          {children}
        </div>
        
      <Footer />
      </body>
    </html>
  );
}
