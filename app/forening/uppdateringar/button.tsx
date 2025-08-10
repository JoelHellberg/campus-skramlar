"use client";

import { useEffect, useState, useTransition } from "react";
import { uploadUpdate } from "../_lib/serverFunctions";
import { useUpdateData } from "./data";

type ButtonProps = { foreningsId_in: string };

export default function Button(props: ButtonProps) {
  const description = useUpdateData((state) => state.description);
  const [isUpdated, setIsUpdated] = useState<boolean>(false);
  useEffect(() => {
    if (description) {
      setIsUpdated(true);
    } else {
      setIsUpdated(false);
    }
  }, [description]);
  const [isPending, startTransition] = useTransition();
  const upload = async () => {
    startTransition(async () => {
      await uploadUpdate(props.foreningsId_in, description);
    });
  };
  return (
    <button
      className="px-16 py-3 rounded-xl text-black bg-[#ACCAB2] outline-4 w-fit font-bold shadow-xl/30 text-shadow-sm cursor-pointer 
            transition-all duration-300 transform hover:scale-105 hover:shadow-xl/25
            disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:shadow-none disabled:hover:shadow-none"
      onClick={() => upload()}
      disabled={!isUpdated || isPending}
    >
      Ladda upp
    </button>
  );
}
