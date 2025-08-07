import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import {
  Geist,
  Geist_Mono,
  Inter,
  Lily_Script_One,
  Caveat,
  Londrina_Sketch,
  Cabin_Sketch,
  Redacted_Script,
  Marck_Script,
} from "next/font/google";
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

const marcScript = Marck_Script({
  variable: "--font-marc-script",
  weight: ["400"],
  subsets: ["latin"],
});

const londrinaSketch = Londrina_Sketch({
  variable: "--font-londrina-sketch",
  weight: ["400"],
  subsets: ["latin"],
});

const cabinSketch = Cabin_Sketch({
  variable: "--font-cabin-sketch",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const redactedScript = Redacted_Script({
  variable: "--font-redacted-script",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Campus Skramlar - Linköpings Universitet för Musikhjälpen!",
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
        className={`${geistSans.variable} ${geistMono.variable}  ${inter.variable} ${lilyScriptOne.variable} ${caveat.variable} ${londrinaSketch.variable} ${cabinSketch.variable} ${redactedScript.variable} ${marcScript.variable} 
        antialiased overscroll-none`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
