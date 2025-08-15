"use client";
import { Modal } from "@/components/popup/modal";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { useLoaderData } from "../loaders/loaderData";
type Props = {
  children: ReactNode;
  color?: string;
  close?: boolean;
};
export default function PhonePopup({
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
      className="relative w-screen h-[80vh] bg-[#FFF0D9] rounded-t-2xl rounded-br-md shadow-2xl outline-4 flex flex-col"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {/* Header */}
      <div
        className={`w-full min-h-1/12 rounded-t-2xl border-b-4 flex items-center justify-center px-6 gap-8 bg-${color}`}
        onClick={onCloseFunc}
      >
        {close && <img src="/vectorGraphics/vIcon.svg" className="h-8/12" />}
      </div>
      {children}
    </motion.div>
  );
}
