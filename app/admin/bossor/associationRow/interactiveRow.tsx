"use client";
import { BossaGeneral, BossaPrivate } from "@/app/_lib/types";
import Dropdown from "./dropDown";
import { ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
  generalData: BossaGeneral | null;
  privateData: BossaPrivate;
};
export default function InteractiveRow({
  children,
  generalData,
  privateData,
}: Props) {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  return (
    <>
      <div
        className={
          "shadow-sm py-5 rounded-lg flex w-full " +
          (generalData
            ? generalData.banned
              ? "bg-red-300/70 cursor-pointer"
              : "bg-green-300/70 cursor-pointer"
            : "bg-yellow-200/70")
        }
        onClick={() => setShowDropdown((prev) => !prev)}
      >
        {children}
      </div>
      {generalData && showDropdown && (
        <Dropdown privateData={privateData} generalData={generalData} />
      )}
    </>
  );
}
