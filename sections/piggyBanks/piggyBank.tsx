import { BossaDetailed } from "@/app/_lib/types";
import Link from "next/link";
import { useEffect, useState } from "react";

// PiggyBank.tsx
type Props = {
  bossa: { id: string; forenings_namn: string; pengar_insamlat: number };
  position: number;
};

export default function PiggyBank(props: Props) {
  const baseColors = ["#D06224", "#ACCAB2", "#8A8635"];

  const row = Math.floor(props.position / 3);
  const colors = row % 2 === 0 ? [...baseColors].reverse() : baseColors;
  const column = props.position % 3;

  // Uträkning av bössans färger som uppfyller vårt önskade mönster
  const mainColor = colors[column];
  const secondaryColor = colors[(column + 1) % 3];
  const thirdColor = colors[(column + 2) % 3];

  return (
    <Link
      href={
        "/?bossa=" +
        props.bossa.id +
        "&hex=%23" +
        mainColor.slice(1) +
        "&name=" +
        props.bossa.forenings_namn +
        "&sum=" +
        props.bossa.pengar_insamlat
      }
      scroll={false}
    >
      <div
        className="relative w-full cursor-pointer 
    transform transition-transform duration-300 hover:scale-105 group"
      >
        {/* Backdrop */}
        <div
          className="absolute top-3 left-3 w-full aspect-video outline-1 outline-[#EAC891] -z-10 shadow-xl/30 rounded-xs
        transform transition-shadow duration-300 group-hover:shadow-2xl/55"
          style={{ backgroundColor: mainColor }}
        />

        {/* Main content */}
        <div
          className={
            "w-full aspect-video bg-[#E9A762] outline-1 shadow-xl/10 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs"
          }
          style={{ outlineColor: mainColor }}
        >
          {/* logo */}
          <div className="absolute w-1/2 h-full flex items-center p-2 ml-2">
            <img src="/logo.svg" alt="logo" className="w-full" />
          </div>
          {/* logo shadow */}
          <div className="absolute w-1/2 h-full bg-gradient-to-r from-[#E9A76266] to-[#E9A762FF] z-0 rounded-tl-xl" />

          {/* Bössans rubrik */}
          <div
            className="absolute w-full h-full flex flex-col justify-center items-end pr-8 text-white text-shadow-2xl"
            style={{
              textShadow: `0 4px 10px rgba(0,0,0,0.25), -3px 4px 0 ${mainColor}`,
            }}
          >
            <h2 className="inline-block mr-4 !font-bold !text-5xl text-left max-w-7/12 [text-indent:-2rem]">
              {props.bossa.forenings_namn}s
            </h2>
            <h2 className="!text-5xl mt-3">Bössa</h2>
          </div>
          {/* Positionering av summan */}
          <div className="absolute -top-6">
            <h1
              className="!text-5xl text-[#ACCAB2] ml-8"
              style={{
                textShadow: "3px 3px 0" + thirdColor,
                color: secondaryColor,
              }}
            >
              {props.bossa.pengar_insamlat} kr
            </h1>
          </div>
        </div>
      </div>
    </Link>
  );
}
