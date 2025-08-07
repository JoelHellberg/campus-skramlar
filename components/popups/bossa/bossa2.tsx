"use client";
import { Modal } from "@/components/modal";
import { useRouter, useSearchParams } from "next/navigation";
import Update from "./update";
import { useEffect, useState } from "react";
import { BossaDetailed } from "@/app/_lib/types";
import { fetchBossaDetailed } from "@/app/_lib/supabase/clientFunctions";
import { motion } from "framer-motion";

export default function Bossa2() {
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

  const [details, setDetails] = useState<BossaDetailed>();
  useEffect(() => {
    if (bossa) {
      const fetchDetails = async () => {
        const data: BossaDetailed = await fetchBossaDetailed(bossa);
        setDetails(data);
      };
      fetchDetails();
    }
  }, [bossa]);

  return (
    <>
      {bossa && color && foreningsNamn && collectedSum && (
        <Modal onClose={onCloseFunc}>
          <div className="relative">
            <div className="relative w-[70vw] h-[80vh] bg-[#FFF0D9] rounded-2xl shadow-2xl outline-4 flex flex-col">
              {/* Header */}
              <div
                className="w-full h-1/12 rounded-t-2xl border-b-4 flex px-6 gap-8"
                style={{ backgroundColor: color }}
              >
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
                <div className="flex-1 h-full flex flex-row-reverse items-center">
                  <h2>{foreningsNamn}s bössa</h2>
                </div>
              </div>
              {/* Main Content */}
              <div className="flex h-11/12">
                {/* Left side content */}
                <div className="relative h-full w-3/4 flex flex-col items-center gap-10 py-10">
                  <div className="absolute right-0 my-auto bg-black h-5/6 w-1 rounded-4xl opacity-80" />
                  {/* "Header" */}
                  <div className="bg-orange-300 h-3/12 w-5/6 rounded-3xl outline-2 border-b-2 flex p-5 gap-5">
                    <img
                      src={`https://xpdnuxdvwdgxdqwffgoy.supabase.co/storage/v1/object/public/loggor/${bossa}.png`}
                      alt="logo"
                      className="h-full rounded-2xl"
                      onError={(e) => {
                        e.currentTarget.onerror = null; // Prevent infinite loop in case fallback fails
                        e.currentTarget.src = "/logo.svg";
                      }}
                    />
                    <h1 className="!text-5xl !font-bold my-auto">
                      {foreningsNamn} har samlat in &nbsp;{collectedSum}&nbsp;kr
                    </h1>
                  </div>
                  <div className="bg-orange-300 h-fit w-5/6 rounded-4xl rounded-bl-sm outline-2 border-b-2 border-r-2 p-5">
                    <p>
                      <span className="underline font-bold">
                        Swisha {details?.swish_sum} kr till{" "}
                        {details?.phone_number}
                      </span>{" "}
                      för att vara med och tävla i {foreningsNamn}s bössa!
                    </p>
                  </div>
                  <div className="bg-orange-200 flex-1 w-5/6 rounded-3xl outline-2 p-5 overflow-y-auto max-h-full">
                    <p className="break-words whitespace-pre-wrap">
                      {details?.description}
                    </p>
                  </div>
                </div>
                {/* Right side content */}
                <div className="flex flex-1 flex-col items-center overflow-y-auto pt-10">
                  <Update />
                  <Update />
                  <Update />
                  <Update />
                  <Update />
                  <Update />
                  <Update />
                </div>
              </div>
            </div>
            {/* Backdrop */}
            <div className="absolute top-8 right-8 -z-10 w-[70vw] h-[80vh] bg-[#FFF0D9] rounded-2xl shadow-2xl outline-4">
              <div
                className="w-full h-1/12 rounded-t-2xl border-b-4 flex px-6 gap-8"
                style={{ backgroundColor: color }}
              ></div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
