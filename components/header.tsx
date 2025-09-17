"use client";

import { useState } from "react";
import { SidePanel } from "./sidePanel";
import { AnimatePresence } from "framer-motion";

export default function Header() {
  const [showSidePanel, setShowPanel] = useState<boolean>(false);
  return (
    <>
      <AnimatePresence>
        {showSidePanel && (
          <SidePanel setIsVisible={setShowPanel}>
            <div
              className="flex flex-col w-full items-center mt-5
              [&>a]:text-white [&>a]:w-11/12 [&>a]:py-1 [&>a]:px-4 [&>a]:my-1 [&>a]:rounded-lg"
            >
              <a
                href="#about"
                className="bg-[#D06224]"
                onClick={() => setShowPanel(false)}
              >
                <h2>Bidra</h2>
              </a>
              <a
                href="#piggyBanks"
                className="bg-[#ACCAB2]"
                onClick={() => setShowPanel(false)}
              >
                <h2>Bössor</h2>
              </a>
              <a
                href="#members"
                className="bg-[#8A8635]"
                onClick={() => setShowPanel(false)}
              >
                <h2>Kontakt</h2>
              </a>
              <a
                href="#thanks"
                className="bg-[#e6bfba]"
                onClick={() => setShowPanel(false)}
              >
                <h2>Tack</h2>
              </a>
            </div>
          </SidePanel>
        )}
      </AnimatePresence>
      <div className="w-full py-4 lg:px-15 bg-[#FFF0D9] flex justify-center">
        {/* Header för mobil */}
        <div
          className="lg:hidden flex flex-col w-11/12 gap-y-0.5 items-end"
          onClick={() => setShowPanel(true)}
        >
          <div className="bg-[#4A4A48] w-10 rounded aspect-[5/1]" />
          <div className="bg-[#4A4A48] w-10 rounded aspect-[5/1]" />
          <div className="bg-[#4A4A48] w-10 rounded aspect-[5/1]" />
        </div>
        {/* Default header med animationer för texten */}
        <div
          className="hidden lg:flex items-center [&>a]:mx-auto [&>h2]:cursor-pointer
        w-full xl:w-9/12 2xl:w-8/12

        [&>a]:relative
        [&>a::after]:content-['']
        [&>a::after]:absolute
        [&>a::after]:left-0
        [&>a::after]:-bottom-0
        [&>a::after]:w-full
        [&>a::after]:h-[2px]
        [&>a::after]:bg-black
        [&>a::after]:scale-x-0
        [&>a::after]:origin-left
        [&>a::after]:transition-transform
        [&>a:hover::after]:scale-x-100"
        >
          {/* Menyalternativ */}
          <a href="#about">
            <h2>Bidra</h2>
          </a>
          <a href="#piggyBanks">
            <h2>Bössor</h2>
          </a>
          <a href="#members">
            <h2>Kontakt</h2>
          </a>
          <a href="#thanks">
            <h2>Tack</h2>
          </a>
        </div>
      </div>
    </>
  );
}
