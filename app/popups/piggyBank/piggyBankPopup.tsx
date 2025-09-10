"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Update from "../../../components/update";
import { useEffect, useRef, useState } from "react";
import { BossaDetailed, BossaUpdate } from "@/app/_lib/types";
import {
  fetchBossaDetailed,
  fetchBossaUpdates,
} from "@/app/_lib/supabase/clientFunctions";
import { AnimatePresence, motion } from "framer-motion";
import DefaultPopup from "@/components/popup/popupTemplate";
import UpdateView from "./updateView";

export default function PiggyBankPopup() {
  const router = useRouter();
  const [showingUpdateView, setShowingUpdateView] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const bossa = searchParams.get("bossa");
  const color = searchParams.get("hex");
  const foreningsNamn = searchParams.get("name");
  const collectedSum = searchParams.get("sum");
  const onCloseFunc = () => {
    router.replace("/", { scroll: false });
  };

  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeDistance = touchEndX - touchStartX;
    const swipeThreshold = 300; // px to count as swipe
    if (swipeDistance > swipeThreshold) {
      setShowingUpdateView(false);
    } else if (-swipeDistance > swipeThreshold) {
      setShowingUpdateView(true);
    }
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
    setShowingUpdateView(false);
  }, [bossa]);

  return (
    <AnimatePresence>
      {bossa && color && foreningsNamn && collectedSum && (
        <DefaultPopup
          title={`${foreningsNamn}s bössa`}
          primaryColor={`[${color}]`}
          secondaryColor={`[${color}]`}
        >
          <div className="flex h-full w-full">
            {/* Left side content */}
            <div
              className="relative h-full flex flex-col items-center gap-10 py-10 
            w-full lg:w-3/4 overflow-y-auto"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div className="flex lg:hidden -mt-8 w-2/5 [&>p]:hover:cursor-pointer">
                <p
                  className="mx-auto "
                  style={{
                    textDecorationLine: showingUpdateView
                      ? "none"
                      : "underline",
                  }}
                  onClick={() => setShowingUpdateView(false)}
                >
                  Profil
                </p>
                <p
                  className="mx-auto"
                  style={{
                    textDecorationLine: showingUpdateView
                      ? "underline"
                      : "none",
                  }}
                  onClick={() => setShowingUpdateView(true)}
                >
                  Updates
                </p>
              </div>
              <AnimatePresence>
                {showingUpdateView && <UpdateView updates={updates} />}
              </AnimatePresence>
              <div
                className="absolute right-0 my-auto bg-black h-5/6 w-1 rounded-4xl opacity-80
              hidden lg:block"
              />
              {/* "Header" */}
              <motion.div
                className="bg-orange-300 h-3/12 rounded-3xl outline-2 border-b-2 flex p-5 gap-5
                w-11/12 sm:w-5/6 items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5, ease: "easeIn" }}
              >
                <div className="h-full aspect-square flex justify-center">
                  <img
                    src={`https://xpdnuxdvwdgxdqwffgoy.supabase.co/storage/v1/object/public/loggor/${bossa}.png`}
                    alt="logo"
                    className="h-full w-auto rounded-2xl object-contain"
                    onError={(e) => {
                      e.currentTarget.onerror = null; // Prevent infinite loop in case fallback fails
                      e.currentTarget.src = "/logo.svg";
                    }}
                  />
                </div>
                <h4
                  className="!font-bold
                  text-3xl sm:text-4xl 2xl:!text-5xl"
                  style={{
                    textShadow: `2px 2px 0 white`,
                  }}
                >
                  {foreningsNamn} har samlat in {collectedSum} kr
                </h4>
              </motion.div>
              <motion.div
                className="bg-orange-300 h-fit rounded-4xl rounded-bl-sm outline-2 border-b-2 border-r-2 p-5
                w-11/12 sm:w-5/6"
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
                className="bg-orange-200 rounded-l-3xl rounded-r-sm outline-2 p-5
                lg:max-h-full lg:flex-1 lg:overflow-y-auto w-11/12 sm:w-5/6 mb-20 sm:mb-0"
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
              className="hidden lg:flex flex-1 flex-col items-center overflow-y-auto pt-10"
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
    </AnimatePresence>
  );
}
