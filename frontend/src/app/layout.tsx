
import type { Metadata } from "next";
import { Barriecito, DynaPuff } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";

const barriecito = Barriecito({
  variable: "--font-barriecito",
  weight: ["400"],
});

const dynaPuff = DynaPuff({
  variable: "--font-dyna-puff",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emoticon",
  description: "moticon is an exclusive NFT collection capturing the full spectrum of human emotion, joy, rage, love, fear, and everything in between",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barriecito.variable} ${dynaPuff.variable} antialiased bg-[hsla(0,0%,97%,100)] h-full bg-[url('../../public/bg-img.png')]  bg-cover fixed left-0 right-0`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
