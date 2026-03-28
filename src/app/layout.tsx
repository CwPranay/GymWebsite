import type { Metadata } from "next";
import { Anton, Bebas_Neue, DM_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Om Sai Fitness House",
  description: "Premium modern-classic gym with cinematic fitness experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${anton.variable} ${bebasNeue.variable} ${dmSans.variable} font-sans min-h-screen bg-[var(--color-bg)] flex flex-col text-white`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

