import { convertBlobUrlToFile } from "@/app/_lib/utils";
import {
  createPiggybank,
  updateBossorDetailed,
  updateBossorGeneral,
} from "../_lib/serverFunctions";
import { uploadImageClient } from "../_lib/clientFunctions";
import {
  Dispatch,
  SetStateAction,
  TransitionStartFunction,
  useTransition,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { useBossaData } from "../_lib/data";

type ButtonProps = {
  imageUrl: string | undefined;
  setImageUrl: Dispatch<SetStateAction<string | undefined>>;
  foreningsId: string;
  name: string;
  foreningsNamn: string;
  sum: number;
  swishSum: number;
  number: string;
  swishNumber: string;
  description: string;
  description_in: string;
  startTransition: TransitionStartFunction;
};
export default function Button(props: ButtonProps) {
  const moneyCollected = useBossaData((state) => state.moneyCollected);
  const router = useRouter();
  const pathname = usePathname();
  const updateProfile = () => {
    const uploadImageHandler = async () => {
      if (props.imageUrl) {
        const imageFile = await convertBlobUrlToFile(props.imageUrl);
        const { imageUrl: uploadedImageUrl, error } = await uploadImageClient({
          file: imageFile,
          foreningsId: props.foreningsId,
        });
        if (error) {
          console.error(error);
          return;
        }
        props.setImageUrl("");
      }
    };
    props.startTransition(async () => {
      await uploadImageHandler();
      if (props.name !== props.foreningsNamn) {
        await updateBossorGeneral(
          props.foreningsId,
          props.foreningsNamn,
          moneyCollected
        );
      }
      if (
        props.sum !== props.swishSum ||
        props.number !== props.swishNumber ||
        props.description !== props.description_in
      ) {
        await updateBossorDetailed(
          props.foreningsId,
          props.sum,
          props.number,
          props.description
        );
      }
    });
    router.push(`${pathname}?success=true`);
  };
  return (
    <>
      {props.foreningsNamn ? (
        <button
          className="px-16 py-3 rounded-xl text-black bg-[#D06224] outline-4 w-fit font-bold shadow-xl/30 text-shadow-sm cursor-pointer 
                transition-all duration-300 transform hover:scale-105 hover:shadow-xl/25"
          onClick={() => updateProfile()}
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
                props.foreningsId,
                props.name,
                0,
                props.sum,
                props.number,
                props.description
              );
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
