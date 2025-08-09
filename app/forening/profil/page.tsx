"use client";
import {
  ChangeEvent,
  Suspense,
  useEffect,
  useRef,
  useState,
  useTransition,
} from "react";
import { useBossaData } from "../_lib/data";
import {
  createPiggybank,
  updateBossorDetailed,
  updateBossorGeneral,
} from "../_lib/serverFunctions";
import Link from "next/link";
import ForeningHeader from "../components/foreningHeader";
import Image from "next/image";
import { convertBlobUrlToFile } from "@/app/_lib/utils";
import { uploadImageClient } from "../_lib/clientFunctions";
import LoadingSimple from "@/components/loadingSimple";
import Loading from "@/components/loading";
import SuccessPopup from "../popups/successPopup";
import FailPopup from "../popups/failPopup";
import { usePathname, useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string>();

  const initialize = useBossaData((state) => state.initialize);
  const foreningsId: string = useBossaData((state) => state.foreningsId);
  const foreningsNamn = useBossaData((state) => state.foreningsNamn);
  const moneyCollected = useBossaData((state) => state.moneyCollected);
  const swishSum = useBossaData((state) => state.swishSum);
  const swishNumber = useBossaData((state) => state.swishNumber);
  const description_in = useBossaData((state) => state.description);

  const [name, setName] = useState<string>(foreningsNamn);
  const [sum, setSum] = useState<number>(swishSum);
  const [number, setNumber] = useState<string>(swishNumber);
  const [description, setDescription] = useState<string>(description_in);

  useEffect(() => {
    initialize();
  }, []);

  useEffect(() => {
    if (foreningsNamn) {
      setName(foreningsNamn);
      setSum(swishSum);
      setNumber(swishNumber);
      setDescription(description_in);
    }
  }, [foreningsNamn]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const firstFile = e.target.files[0];
      const newImageUrl = URL.createObjectURL(firstFile);
      setImageUrl(newImageUrl);
    }
  };

  const [isPending, startTransition] = useTransition();

  const uploadImageHandler = async () => {
    if (imageUrl) {
      const imageFile = await convertBlobUrlToFile(imageUrl);
      const { imageUrl: uploadedImageUrl, error } = await uploadImageClient({
        file: imageFile,
        foreningsId: foreningsId,
      });
      if (error) {
        console.error(error);
        return;
      }
      console.log(uploadedImageUrl);
      setImageUrl("");
    }
  };

  const updateProfile = () => {
    startTransition(async () => {
      await uploadImageHandler();
      if (name !== foreningsNamn) {
        await updateBossorGeneral(foreningsId, foreningsNamn, moneyCollected);
      }
      if (
        sum !== swishSum ||
        number !== swishNumber ||
        description !== description_in
      ) {
        await updateBossorDetailed(foreningsId, sum, number, description);
      }
    });
    router.push(`${pathname}?success=true`);
  };

  return (
    <>
      <Loading />
      {isPending && <LoadingSimple />}
      <Suspense fallback={null}>
        <SuccessPopup />
        <FailPopup />
      </Suspense>
      <div className="flex flex-col items-center">
        <ForeningHeader />
        <div className="flex flex-col gap-10 items-center">
          <h1 className="text-[#FFF0D9]">/forening/profil</h1>
          <div className="flex h-52">
            <input
              type="file"
              accept=".png"
              hidden
              multiple
              ref={imageInputRef}
              onChange={handleImageChange}
              disabled={isPending}
            />
            <div
              className="relative bg-[#FFF0D9] p-5 flex flex-col items-center text-center justify-center rounded-2xl outline-4 mr-10 shadow-xl/30 cursor-pointer
            transition-all duration-300 transform hover:scale-105 hover:shadow-xl/25 font-bold"
              style={{ width: "100%", aspectRatio: "1 / 1" }}
              onClick={() => imageInputRef.current?.click()}
            >
              <div className="absolute inset-1 m-auto overflow-hidden">
                <img
                  src={
                    imageUrl ||
                    `https://xpdnuxdvwdgxdqwffgoy.supabase.co/storage/v1/object/public/loggor/${foreningsId}.png?t=${Date.now()}`
                  }
                  className="h-full rounded-2xl"
                />
              </div>
              <h2 className="!text-3xl">
                Byt
                <br />
                Profilbild
              </h2>
            </div>
            <Details
              name={name}
              setNameFunc={setName}
              sum={sum}
              setSumFunc={setSum}
              number={number}
              setNumberFunc={setNumber}
            />
          </div>
          <Description
            description={description}
            setDescriptionFunc={setDescription}
          />
          {foreningsNamn ? (
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
                    foreningsId,
                    name,
                    0,
                    sum,
                    number,
                    description
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
        </div>
      </div>
    </>
  );
}

type DetailsProps = {
  name: string;
  setNameFunc: (value: string) => void;
  sum: number;
  setSumFunc: (value: number) => void;
  number: string;
  setNumberFunc: (value: string) => void;
};

function Details(props: DetailsProps) {
  return (
    <div className="bg-[#FFF0D9] p-5 rounded-2xl outline-4 shadow-xl/25">
      <label htmlFor="name" className="block mb-2 font-bold">
        Namn på föreningen:
      </label>
      <input
        type="text"
        value={props.name}
        onChange={(e) => props.setNameFunc(e.target.value)}
        placeholder="Skriv namnet här"
        className="bg-white p-1 outline-1 rounded-sm w-full"
      />
      <div className="flex my-4">
        <div className="mr-4">
          <label htmlFor="name" className="block mb-2 font-bold">
            Swish summa:
          </label>
          <input
            type="number"
            value={props.sum}
            onChange={(e) => props.setSumFunc(Number(e.target.value))}
            placeholder="Skriv namnet här"
            className="bg-white p-1 outline-1 rounded-sm w-30"
          />
        </div>
        <div>
          <label htmlFor="name" className="block mb-2 font-bold">
            Swish nummer:
          </label>
          <input
            type="tel"
            value={props.number}
            onChange={(e) => {
              const value = e.target.value;
              if (/^[\d+]*$/.test(value)) {
                props.setNumberFunc(value);
              }
            }}
            placeholder="Skriv namnet här"
            className="bg-white p-1 outline-1 rounded-sm"
          />
        </div>
      </div>
    </div>
  );
}

type DescriptionProps = {
  description: string;
  setDescriptionFunc: (value: string) => void;
};
function Description(props: DescriptionProps) {
  return (
    <div className="bg-[#FFF0D9] p-5 rounded-2xl outline-4 w-full shadow-xl/25">
      <label htmlFor="name" className="block mb-2 font-bold">
        Bössans beskrivning
      </label>
      <textarea
        id="description"
        name="description"
        rows={5}
        value={props.description}
        onChange={(e) => props.setDescriptionFunc(e.target.value)}
        placeholder="Skriv din beskrivning här..."
        className="w-full p-3 border rounded-lg resize-y bg-white"
      />
    </div>
  );
}
