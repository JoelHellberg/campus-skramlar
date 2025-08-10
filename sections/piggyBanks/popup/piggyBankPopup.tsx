"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Update from "../../../components/popups/update";
import { useEffect, useState } from "react";
import { BossaDetailed, BossaUpdate } from "@/app/_lib/types";
import {
  fetchBossaDetailed,
  fetchBossaUpdates,
} from "@/app/_lib/supabase/clientFunctions";
import { motion } from "framer-motion";
import DefaultPopup from "@/components/popups/defaultPopup";

export default function PiggyBankPopup() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const bossa = searchParams.get("bossa");
  const color = searchParams.get("hex");
  const foreningsNamn = searchParams.get("name");
  const collectedSum = searchParams.get("sum");
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
        <DefaultPopup
          title={`${foreningsNamn}s bössa`}
          primaryColor={`[${color}]`}
        >
          <div className="flex h-full w-full">
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
                  Swisha {details?.swish_sum} kr till {details?.phone_number}
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
        </DefaultPopup>
      )}
    </>
  );
}
