"use client";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import { useRef, ReactNode, useState, SetStateAction, Dispatch } from "react";

type PopUpProps = {
  children: ReactNode;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
};

export function SidePanel({ setIsVisible, children }: PopUpProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const onClose = () => {
    setIsVisible(false);
  };

  return (
    <Dialog
      open={true}
      onClose={onClose}
      initialFocus={overlayRef}
      className="fixed inset-0 z-50 flex flex-row-reverse"
    >
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-gray-800/60"
        aria-hidden="true"
        onClick={onClose}
      />
      <motion.div
        className="relative flex z-20 bg-[#FFF0D9] h-full w-3/7"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </Dialog>
  );
}
