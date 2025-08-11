"use client";

import { useEffect, useState, useTransition } from "react";
import { updateBossorGeneral } from "../_lib/serverFunctions";
import { usePathname, useRouter } from "next/navigation";
import { useInsamlatData } from "./data";
import { useLoaderData } from "@/components/loaders/loaderData";

type ButtonProps = {
  foreningsId_in: string;
  foreningsNamn_in: string;
  moneyAmount_in: number;
};

export default function Button(props: ButtonProps) {
  const startLoader = useLoaderData((state) => state.startLoader);
  const router = useRouter();
  const pathname = usePathname();

  const moneyAmount = useInsamlatData((state) => state.moneyAmount);
  const [isUpdated, setIsUpdated] = useState<boolean>(false);
  useEffect(() => {
    if (moneyAmount && moneyAmount !== props.moneyAmount_in) {
      setIsUpdated(true);
    } else {
      setIsUpdated(false);
    }
  }, [moneyAmount]);

  const [isPending, startTransition] = useTransition();
  const updateBossa = () => {
    startLoader();
    startTransition(async () => {
      try {
        await updateBossorGeneral(
          props.foreningsId_in,
          props.foreningsNamn_in,
          moneyAmount
        );
      } catch (error) {
        console.error("Failed to create piggy bank:", error);
      }
    });
    router.push(`${pathname}?success=true`);
  };
  return (
    <button
      className="px-16 py-3 rounded-xl text-black bg-[#8A8635] outline-4 w-fit font-bold shadow-xl/30 text-shadow-sm cursor-pointer 
            transition-all duration-300 transform hover:scale-105 hover:shadow-xl/25
            disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:shadow-none disabled:hover:shadow-none"
      onClick={updateBossa}
      disabled={!isUpdated || isPending}
    >
      Spara
    </button>
  );
}
