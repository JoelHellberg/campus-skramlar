import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Lily_Script_One, Caveat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lilyScriptOne = Lily_Script_One({
  variable: "--font-lily-script-one",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Campus Skramlar",
  description: "Hemsidan för studentföreningen Campus Skramlar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  ${inter.variable} ${lilyScriptOne.variable} ${caveat.variable} antialiased
        overscroll-none`}
      >
        {children}
      </body>
    </html>
  );
}
