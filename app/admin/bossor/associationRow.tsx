"use client";
import { BossaPrivate } from "@/app/_lib/types";
import Link from "next/link";
import Dropdown from "./dropDown";

type Props = {
  isActive: boolean;
  privateData: BossaPrivate;
};
export default function AssociationRow(props: Props) {
  function copyInstructions() {
    const instructions = `OBS: Ni kan nu även publicera er bössa på Campus Skramlars hemsida!\n\nFör att göra detta går ni till "https://campus-skramlar.vercel.app/forening"\noch loggar in med lösenordet: "${props.privateData.password}".`;
    navigator.clipboard
      .writeText(instructions)
      .then(() => {
        console.log("Copied to clipboard:", instructions);
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  }
  return (
    <div>
      <div className="w-full flex">
        <Link
          className="w-5 h-5 my-auto mx-5 bg-pink-400 cursor-pointer"
          href={`/admin/?edit=true&id=${props.privateData.id}`}
        />
        <div
          className={
            "mt-4 shadow-sm py-5 rounded-lg flex w-full " +
            (props.isActive
              ? "bg-green-300/70 cursor-pointer"
              : "bg-yellow-200/70")
          }
        >
          <div className="w-1/3 text-center">
            <p>{props.privateData.id}</p>
          </div>
          <div className="w-1/3 text-center">
            <p>{props.privateData.forenings_namn}</p>
          </div>
          <div className="w-1/3 text-center">
            <p>{props.privateData.password}</p>
          </div>
        </div>
        <div
          className="w-5 h-5 my-auto mx-5 bg-yellow-400 cursor-pointer"
          onClick={() => copyInstructions()}
        />
      </div>
      {props.isActive && <Dropdown id={props.privateData.id} />}
    </div>
  );
}
