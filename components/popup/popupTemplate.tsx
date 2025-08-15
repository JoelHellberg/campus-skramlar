"use client";
import { Modal } from "@/components/popup/modal";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { useLoaderData } from "../loaders/loaderData";
import PhonePopup from "./phonePopup";

type Props = {
  title?: string;
  children: ReactNode;
  primaryColor?: string;
  secondaryColor?: string;
  close?: boolean;
};
export default function PopupTemplate({
  title,
  children,
  close = true,
  primaryColor,
  secondaryColor,
}: Props) {
  const stopLoader = useLoaderData((state) => state.stopLoader);
  useEffect(() => {
    stopLoader();
  }, []);
  if (!primaryColor) {
    primaryColor = "red-400";
  }
  if (!secondaryColor) {
    secondaryColor = "yellow-400";
  }
  console.log("close is: ", close);
  const router = useRouter();
  const onCloseFunc = () => {
    router.back();
  };

  const [isIPadPortrait, setIsIPadPortrait] = useState(
    window.innerWidth <= 1024
  );

  useEffect(() => {
    function handleResize() {
      setIsIPadPortrait(window.innerWidth <= 1024);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Modal onClose={close ? onCloseFunc : undefined}>
      <div className="relative">
        {isIPadPortrait ? (
          <PhonePopup color={primaryColor}>{children}</PhonePopup>
        ) : (
          <>
            <motion.div
              className="relative w-[70vw] h-[80vh] bg-[#FFF0D9] rounded-2xl rounded-br-md shadow-2xl outline-4 flex flex-col"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1.0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: "backOut" }}
            >
              {/* Header */}
              <div
                className={`w-full h-1/12 rounded-t-2xl border-b-4 flex px-6 gap-8 bg-${primaryColor}`}
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
              {/* Main Content */}
              <div className="h-11/12 w-full">{children}</div>
            </motion.div>

            {/* Backdrop */}
            <motion.div
              className="absolute top-8 right-8 -z-10 w-[70vw] h-[80vh] bg-[#FFF0D9] rounded-2xl shadow-2xl outline-4"
              initial={{ scale: 0.9 }} // Start below, invisible
              animate={{ scale: 1.0 }} // Move up, fade in
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.4, ease: "backOut" }} // Go over, then in
            >
              <div
                className={`w-full h-1/12 rounded-t-2xl border-b-4 flex px-6 gap-8 bg-${secondaryColor}`}
              ></div>
            </motion.div>
          </>
        )}
      </div>
    </Modal>
  );
}
