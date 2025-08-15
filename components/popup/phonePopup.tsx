"use client";
import { Modal } from "@/components/popup/modal";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { useLoaderData } from "../loaders/loaderData";
type Props = {
  title?: string;
  children: ReactNode;
  color?: string;
  close?: boolean;
};
export default function PhonePopup({
  title,
  children,
  close = true,
  color = "red-400",
}: Props) {
  const router = useRouter();
  const onCloseFunc = () => {
    router.back();
  };
  return (
    <motion.div
      className="relative w-screen h-[90vh] bg-[#FFF0D9] rounded-t-2xl rounded-br-md shadow-2xl outline-4 flex flex-col"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {/* Header */}
      <div
        className={`w-full min-h-1/12 rounded-t-2xl border-b-4 flex px-6 gap-8 bg-${color}`}
      >
        {close && (
          <div className="w-fit h-full flex items-center gap-4">
            <div
              className="group h-1/3 aspect-square bg-red-400 outline-4 rounded-full flex items-center justify-center cursor-pointer"
              onClick={onCloseFunc}
            >
              <p className="font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                x
              </p>
            </div>
            <div
              className="group h-1/3 aspect-square bg-yellow-400 outline-4 rounded-full flex items-center justify-center cursor-pointer"
              onClick={onCloseFunc}
            >
              <p className="font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                -
              </p>
            </div>
            <div className="group h-1/3 aspect-square bg-green-400 outline-4 rounded-full flex items-center justify-center" />
          </div>
        )}
        <div className="flex-1 h-full flex flex-row-reverse items-center">
          <h4 className="text-4xl italic">{title}</h4>
        </div>
      </div>
      {children}
    </motion.div>
  );
}
