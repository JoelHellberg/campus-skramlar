"use client";
import { Modal } from "@/components/modal";
import { useRouter, useSearchParams } from "next/navigation";
import Update from "./update";
import { useEffect, useState } from "react";
import { BossaDetailed } from "@/app/_lib/types";
import { fetchBossaDetailed } from "@/app/_lib/supabase/clientFunctions";
import { motion } from "framer-motion";

export default function Bossa() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const bossa = searchParams.get("bossa");
  const color = searchParams.get("hex");
  const foreningsNamn = searchParams.get("name");
  const collectedSum = searchParams.get("sum");
  console.log("color is: " + color);
  const onCloseFunc = () => {
    router.replace("/", { scroll: false });
  };
  return (
    <>
      {bossa && color && foreningsNamn && collectedSum && (
        <Modal onClose={onCloseFunc}>
          <div className="relative w-[70vw] h-[80vh] bg-[#FFF0D9] rounded-3xl shadow-2xl outline-4">
            {/* Backdrop */}
            <div
              className={
                "absolute w-full h-full rounded-3xl top-4 right-4 -z-10 shadow-2xl outline-4"
              }
              style={{ backgroundColor: color }}
            />

            <h1
              className="relative not-only:ml-10 -mt-15 text-white z-20"
              style={{
                textShadow: "-5px 5px 0 " + color,
              }}
            >
              {foreningsNamn}s Bössa
            </h1>
            {/* Main Content */}
            <div className="flex p-10 h-full w-full -mt-15">
              {/* Vänstra sidan */}
              <div className="h-full w-2/3">
                <LeftSide
                  foreningsId={bossa}
                  foreningsNamn={foreningsNamn}
                  sumCollected={collectedSum}
                  mainColor={color}
                />
              </div>
              <div
                className="h-5/6 m-auto w-1 mx-10"
                style={{ backgroundColor: color }}
              />
              {/* Högra sidan */}
              <div className="flex flex-col h-full w-1/3">
                <RightSide onClose={onCloseFunc} />
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

type LeftSideProps = {
  foreningsId: string;
  foreningsNamn: string;
  sumCollected: string;
  mainColor: string;
};

function LeftSide({
  foreningsId,
  foreningsNamn,
  sumCollected,
  mainColor,
}: LeftSideProps) {
  const [details, setDetails] = useState<BossaDetailed>();
  useEffect(() => {
    const fetchDetails = async () => {
      const data: BossaDetailed = await fetchBossaDetailed(foreningsId);
      setDetails(data);
    };
    fetchDetails();
  }, []);

  return (
    <div className="flex flex-col h-full">
      {/* Ovanför */}
      <div className="flex">
        <img src="\vectorGraphics\heart.svg" className="w-40" />
        <div className="p-5">
          <h1 className="!text-5xl !font-bold">
            {foreningsNamn} har samlat in &nbsp;{sumCollected}&nbsp;kr
          </h1>
          {details?.swish_sum != 0 && details?.phone_number && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1.0 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
            >
              <span className="underline">
                Swisha {details?.swish_sum} kr till {details?.phone_number}
              </span>{" "}
              för att vara med och tävla i {foreningsNamn}s bössa!
            </motion.p>
          )}
        </div>
      </div>
      <div className="w-full h-1 my-6" style={{ backgroundColor: mainColor }} />
      {/* Nedanför */}
      <div className="flex flex-1 max-h-full overflow-y-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1.0 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
        >
          {details?.description}
        </motion.p>
      </div>
    </div>
  );
}

type RightSideProps = {
  onClose: () => void;
};

function RightSide({ onClose }: RightSideProps) {
  return (
    <div className="flex flex-col h-full w-full">
      {/* Top bar with close button */}
      <div className="flex flex-row-reverse w-full pb-4">
        <h1
          className="!my-0 !py-0 !text-7xl text-[#D02424] leading-none px-4 cursor-pointer
          transform transition-transform duration-300 hover:scale-120"
          onClick={onClose}
        >
          x
        </h1>
      </div>

      {/* Scrollable content area */}
      <div className="flex-1 overflow-y-auto flex flex-col items-center">
        <Update />
        <Update />
        <Update />
        <Update />
        <Update />
        <Update />
        <Update />
      </div>
    </div>
  );
}
