import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ToggleColorButton from "@/components/Toggle-Theme/ToggleColorButton";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hexleap Assignment",
  description: "Hexleap - NextJS Frontend-Assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#F7F7F8] dark:bg-dark`}
      >
        <ToggleColorButton />
        {children}
      </body>
    </html>
  );
}


