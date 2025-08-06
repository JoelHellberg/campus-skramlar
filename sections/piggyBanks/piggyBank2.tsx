import { BossaDetailed } from "@/app/_lib/types";
import Link from "next/link";
import { useEffect, useState } from "react";

// PiggyBank.tsx
type Props = {
  bossa: { id: string; forenings_namn: string; pengar_insamlat: number };
  position: number;
};

export default function PiggyBank2(props: Props) {
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
          className="absolute top-0 left-0 w-full aspect-video outline-4 -rotate-6 -z-10 shadow-xl/30 rounded-sm
        transform transition-shadow duration-300 group-hover:shadow-2xl/55"
          style={{ backgroundColor: mainColor }}
        />
        {/* Main content */}
        <div
          className={
            "w-full aspect-video bg-[#ecb67d] outline-4 shadow-xl/10 rounded-lg"
          }
        >
          <div className="absolute h-full w-full flex justify-center">
            <div className="w-11/12 h-2/12 border-b-4 border-dashed border-[#dba56b] flex justify-center items-center">
              <div className="h-2/12 aspect-[6/1] bg-[#a19f9f] rounded-sm outline-1 outline-[#c7c7c7]" />
            </div>
            {/* logo */}
            <div className="absolute flex h-full items-center p-2 right-2">
              <img src="/logo.svg" alt="logo" className="h-10/12 opacity-40" />
            </div>
          </div>

          {/* Bössans rubrik */}
          <div
            className="absolute w-full h-full flex flex-col justify-center pl-8 text-white text-shadow-2xl"
            style={{
              textShadow: `0 4px 10px rgba(0,0,0,0.25), -3px 4px 0 ${secondaryColor}`,
            }}
          >
            <h2 className="inline-block !font-bold !text-5xl text-left max-w-9/12 leading-14">
              {props.bossa.forenings_namn}s
              <br/>
              Bössa
            </h2>
          </div>
          {/* Positionering av summan */}
          <div className="absolute -top-6 right-0">
            <h1
              className="!text-5xl text-[#ACCAB2] mr-8"
              style={{
                WebkitTextStroke: "2px black",
                textShadow: "3px 3px 0" + thirdColor,
                color: secondaryColor,
              }}
            >
              {props.bossa.pengar_insamlat} kr
            </h1>
          </div>
        </div>

        <div
          className="absolute w-full h-1/8 bottom-0 rounded-b-sm border-t-4 bg-[radial-gradient(circle,black_2px,transparent_2px)] [background-size:8px_8px]"
          style={{ backgroundColor: mainColor }}
        />
        <div className="absolute w-2/12 h-1/8 bg-[#ecb67d] right-0 bottom-0 border-b-4 border-l-4 rounded-bl-full" />
      </div>
    </Link>
  );
}
