"use client";
import { convertBlobUrlToFile } from "@/app/_lib/utils";
import {
  createPiggybank,
  updateBossorDetailed,
  updateBossorGeneral,
} from "../_lib/serverFunctions";
import { uploadImageClient } from "../_lib/clientFunctions";
import { useEffect, useState, useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useProfileData } from "./data";
import { useLoaderData } from "@/components/loaders/loaderData";

type ButtonProps = {
  foreningsId_in: string;
  foreningsNamn_in: string;
  swishSum_in: number;
  swishNumber_in: string;
  moneyAmount_in: number;
  description_in: string;
};
export default function Button(props: ButtonProps) {
  const startLoader = useLoaderData((state) => state.startLoader);
  const foreningsNamn = useProfileData((state) => state.foreningsNamn);
  const swishSum = useProfileData((state) => state.swishSum);
  const swishNumber = useProfileData((state) => state.swishNumber);
  const description = useProfileData((state) => state.description);
  const imageUrl = useProfileData((state) => state.imageUrl);
  const setImageUrl = useProfileData((state) => state.setImageUrl);
  console.log("props.foreningsNamn_in: ", props.foreningsNamn_in);
  const [isUpdated, setIsUpdated] = useState<boolean>(false);
  useEffect(() => {
    console.log("CLENTLOG: props.foreningsNamn_in: ", props.foreningsNamn_in);
    console.log("CLENTLOG: foreningsNamn: ", foreningsNamn);

    console.log("CLENTLOG: props.swishSum_in: ", props.swishSum_in);
    console.log("CLENTLOG: swishSum: ", swishSum);

    console.log("CLENTLOG: props.swishNumber_in: ", props.swishNumber_in);
    console.log("CLENTLOG: swishNumber: ", swishNumber);

    console.log("CLENTLOG: props.description_in: ", props.description_in);
    console.log("CLENTLOG: description: ", description);
    if (
      (foreningsNamn && foreningsNamn !== props.foreningsNamn_in) ||
      (swishSum && swishSum !== props.swishSum_in) ||
      (swishNumber && swishNumber !== props.swishNumber_in) ||
      (description && description !== props.description_in) ||
      imageUrl
    ) {
      setIsUpdated(true);
    } else {
      setIsUpdated(false);
    }
  }, [foreningsNamn, swishSum, swishNumber, description, imageUrl]);

  const uploadImageHandler = async () => {
    if (imageUrl) {
      const imageFile = await convertBlobUrlToFile(imageUrl);
      const { imageUrl: uploadedImageUrl, error } = await uploadImageClient({
        file: imageFile,
        foreningsId: props.foreningsId_in,
      });
      if (error) {
        console.error(error);
        return;
      }
      setImageUrl("");
    }
  };

  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  console.log("CLENTLOG1: isPending: ", isPending);
  const updateProfile = async () => {
    console.log("CLENTLOG2: isPending: ", isPending);
    startLoader();
    startTransition(async () => {
      await uploadImageHandler();
      console.log(
        "CLENTLOG2: props.foreningsNamn_in: ",
        props.foreningsNamn_in
      );
      console.log("CLENTLOG2: foreningsNamn: ", foreningsNamn);
      if (foreningsNamn !== props.foreningsNamn_in) {
        await updateBossorGeneral(
          props.foreningsId_in,
          foreningsNamn,
          props.moneyAmount_in
        );
      }
      if (
        swishSum !== props.swishSum_in ||
        swishNumber !== props.swishNumber_in ||
        description !== props.description_in
      ) {
        await updateBossorDetailed(
          props.foreningsId_in,
          swishSum ? swishSum : props.swishSum_in,
          swishNumber ? swishNumber : props.swishNumber_in,
          description ? description : props.description_in
        );
      }
      window.location.href = `${pathname}?success=true`;
    });
  };
  return (
    <>
      {props.foreningsNamn_in ? (
        <button
          className="px-16 py-3 rounded-xl text-black bg-[#D06224] outline-4 w-fit font-bold shadow-xl/30 text-shadow-sm cursor-pointer 
                transition-all duration-300 transform hover:scale-105 hover:shadow-xl/25
                 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:shadow-none disabled:hover:shadow-none"
          onClick={() => updateProfile()}
          disabled={!isUpdated || isPending}
        >
          Spara
        </button>
      ) : (
        <button
          className="px-16 py-3 rounded-xl text-black bg-[#D06224] outline-4 w-fit font-bold shadow-xl/30 text-shadow-sm cursor-pointer 
                transition-all duration-300 transform hover:scale-105 hover:shadow-xl/25"
          onClick={async () => {
            try {
              await createPiggybank(
                props.foreningsId_in,
                foreningsNamn,
                0,
                swishSum,
                swishNumber,
                description
              );
              await uploadImageHandler();
              window.location.href = "/forening";
              // e.g. show success message or redirect
            } catch (error) {
              console.error("Failed to create piggy bank:", error);
              // Optionally show a toast or alert
            }
          }}
        >
          Skapa
        </button>
      )}
    </>
  );
}
