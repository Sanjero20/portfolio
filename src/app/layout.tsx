import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const montserrat = Montserrat({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Angelo Noel Santos",
  description: "Web developer based in the Philippines",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className={`${montserrat.className} mx-auto w-full max-w-xl px-6 py-4 sm:px-0`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
