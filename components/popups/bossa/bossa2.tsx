"use client";
import { Modal } from "@/components/modal";
import { useRouter, useSearchParams } from "next/navigation";
import Update from "./update";
import { useEffect, useState } from "react";
import { BossaDetailed, BossaUpdate } from "@/app/_lib/types";
import {
  fetchBossaDetailed,
  fetchBossaUpdates,
} from "@/app/_lib/supabase/clientFunctions";
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
  const [updates, setUpdates] = useState<BossaUpdate[]>();
  useEffect(() => {
    if (bossa) {
      const fetchDetails = async () => {
        const data: BossaDetailed = await fetchBossaDetailed(bossa);
        setDetails(data);
      };
      const fetchUpdates = async () => {
        const data: BossaUpdate[] = await fetchBossaUpdates(bossa);
        setUpdates(data);
      };
      fetchDetails();
      fetchUpdates();
    }
  }, [bossa]);

  return (
    <>
      {bossa && color && foreningsNamn && collectedSum && (
        <Modal onClose={onCloseFunc}>
          <div className="relative">
            <motion.div
              className="relative w-[70vw] h-[80vh] bg-[#FFF0D9] rounded-2xl rounded-br-md shadow-2xl outline-4 flex flex-col"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1.0 }}
              transition={{ duration: 0.4, ease: "backOut" }}
            >
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
                  <motion.div
                    className="bg-orange-300 h-3/12 w-5/6 rounded-3xl outline-2 border-b-2 flex p-5 gap-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5, ease: "easeIn" }}
                  >
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
                  </motion.div>
                  <motion.div
                    className="bg-orange-300 h-fit w-5/6 rounded-4xl rounded-bl-sm outline-2 border-b-2 border-r-2 p-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5, ease: "easeIn" }}
                  >
                    <p>
                      <span className="underline font-bold">
                        Swisha {details?.swish_sum} kr till{" "}
                        {details?.phone_number}
                      </span>{" "}
                      för att vara med och tävla i {foreningsNamn}s bössa!
                    </p>
                  </motion.div>
                  <motion.div
                    className="bg-orange-200 flex-1 w-5/6 rounded-l-3xl rounded-r-sm outline-2 p-5 overflow-y-auto max-h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5, ease: "easeIn" }}
                  >
                    <p className="break-words whitespace-pre-wrap">
                      {details?.description}
                    </p>
                  </motion.div>
                </div>
                {/* Right side content */}
                <motion.div
                  className="flex flex-1 flex-col items-center overflow-y-auto pt-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.5, ease: "easeIn" }}
                >
                  {updates && updates.length > 0 ? (
                    updates?.map((update: BossaUpdate, index: number) => (
                      <Update key={index} update={update} />
                    ))
                  ) : (
                    <Update
                      update={{
                        forening_id: "",
                        created_at: new Date(Date.now()),
                        update:
                          "(Här kommer du kunna se olika uppdateringar som föreningen väljer att göra så håll utkik!)",
                      }}
                    />
                  )}
                </motion.div>
              </div>
            </motion.div>
            {/* Backdrop */}
            <motion.div
              className="absolute top-8 right-8 -z-10 w-[70vw] h-[80vh] bg-[#FFF0D9] rounded-2xl shadow-2xl outline-4"
              initial={{ scale: 0.9 }} // Start below, invisible
              animate={{ scale: 1.0 }} // Move up, fade in
              transition={{ delay: 0.1, duration: 0.4, ease: "backOut" }} // Go over, then in
            >
              <div
                className="w-full h-1/12 rounded-t-2xl border-b-4 flex px-6 gap-8"
                style={{ backgroundColor: color }}
              ></div>
            </motion.div>
          </div>
        </Modal>
      )}
    </>
  );
}
