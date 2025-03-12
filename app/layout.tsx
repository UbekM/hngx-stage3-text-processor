/** @format */

import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Funnel_Sans } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const funnelSans = Funnel_Sans({
  variable: "--font-funnel-sans",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "LingoBot",
  description: "Your Go-to AI App for Translation and Summarization",
  icons: "/lingobot.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/lingobot.ico" />
        <link rel="shortcut icon" href="/lingobot.png" type="image/x-icon" />
      </Head>
      <body
        className={`${funnelSans.variable} ${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
