"use client";

import { BossaUpdate } from "@/app/_lib/types";
import Update from "@/components/update";
import { motion } from "framer-motion";

export default function UpdateView({
  updates,
}: {
  updates: BossaUpdate[] | undefined;
}) {
  return (
    <motion.div
      initial={{ left: "100%" }}
      animate={{ left: 0 }}
      exit={{ left: "100%" }}
      transition={{ delay: 0.3, duration: 0.5, ease: "easeIn" }}
      className="absolute lg:hidden w-full h-full max-h-full bg-[#FFF0D9]"
    >
      <div className="flex flex-1 flex-col items-center overflow-y-auto pt-10">
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
      </div>
    </motion.div>
  );
}
