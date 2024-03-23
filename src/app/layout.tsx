import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ToggleButton from "@/components/Toggle-Theme/ToggleButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hexleap Assignment",
  description: "Hexleap - NextJS Frontend- Assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F7F7F8] dark:bg-dark`}>
        <ToggleButton />
        {children}
      </body>
    </html>
  );
}
