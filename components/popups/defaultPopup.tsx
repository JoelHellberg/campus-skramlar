"use client";
import { Modal } from "@/components/modal";
import { useRouter, useSearchParams } from "next/navigation";
import { ReactNode } from "react";

type Props = {
  popupRef: string;
  title: string;
  children: ReactNode;
};
export default function DefaultPopup(props: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const popupRef = searchParams.get(props.popupRef);
  const onCloseFunc = () => {
    router.replace(window.location.pathname, { scroll: false });
  };
  return (
    <>
      {popupRef && (
        <Modal onClose={onCloseFunc}>
          <div className="w-[70vw] h-[80vh] bg-[#FFF0D9] rounded-3xl shadow-2xl outline-8 p-16">
            <div className="flex w-full">
              {/* Header */}
              <h1 className=" flex-1">{props.title}</h1>
              {/* Closing button */}
              <h1
                className="!my-0 !py-0 !text-7xl text-[#D02424] leading-none px-4 cursor-pointer
                    transform transition-transform duration-300 hover:scale-120"
                onClick={onCloseFunc}
              >
                x
              </h1>
            </div>
            <div className="w-5/6 h-1 bg-black mx-auto my-8" />
            {props.children}
          </div>
        </Modal>
      )}
    </>
  );
}
