"use client";
import { Modal } from "@/components/modal";
import { useRouter, useSearchParams } from "next/navigation";
import { ReactNode } from "react";

type Props = {
  popupRef_in: string;
  title: string;
  children: ReactNode;
  close?: boolean;
};
export default function ({
  popupRef_in,
  title,
  children,
  close = true,
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const popupRef = searchParams.get(popupRef_in);
  const onCloseFunc = () => {
    router.replace(window.location.pathname, { scroll: false });
  };
  return (
    <>
      {popupRef && (
        <Modal onClose={close ? onCloseFunc : undefined}>
          <div className="relative">
            <div className="relative w-[70vw] h-[80vh] bg-[#FFF0D9] rounded-2xl shadow-2xl outline-4 flex flex-col">
              {/* Header */}
              <div className="w-full h-1/12 rounded-t-2xl border-b-4 flex px-6 gap-8 bg-red-400">
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
                  <div className="group h-1/3 aspect-square bg-green-400 outline-4 rounded-full flex items-center justify-center cursor-pointer"></div>
                </div>
                )}
                <div className="flex-1 h-full flex flex-row-reverse items-center">
                  <h2></h2>
                </div>
              </div>
              {/* Main Content */}
              <div>
                <h1 className=" flex-1">{title}</h1>
                {children}
              </div>
            </div>
            {/* Backdrop */}
            <div className="absolute top-6 right-6 -z-10 w-[70vw] h-[80vh] bg-[#FFF0D9] rounded-2xl shadow-2xl outline-4">
              <div className="w-full h-1/12 rounded-t-2xl border-b-4 flex px-6 gap-8 bg-yellow-400" />
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
