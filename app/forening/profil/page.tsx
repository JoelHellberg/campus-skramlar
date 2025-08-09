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
import ForeningHeader from "../components/foreningHeader";
import LoadingSimple from "@/components/loadingSimple";
import Loading from "@/components/loading";
import SuccessPopup from "../popups/successPopup";
import FailPopup from "../popups/failPopup";
import Details from "./details";
import Description from "./description";
import Button from "./button";
import ImageSelect from "./imageSelect";

export default function Home() {
  const [imageUrl, setImageUrl] = useState<string>();

  const initialize = useBossaData((state) => state.initialize);
  const foreningsId: string = useBossaData((state) => state.foreningsId);
  const foreningsNamn = useBossaData((state) => state.foreningsNamn);
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
  const [isPending, startTransition] = useTransition();

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
            <ImageSelect
              imageUrl={imageUrl}
              setImageUrl={setImageUrl}
              isPending={isPending}
              foreningsId={foreningsId}
            />
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
          <Button
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            foreningsId={foreningsId}
            name={name}
            foreningsNamn={foreningsNamn}
            sum={sum}
            swishSum={swishSum}
            number={number}
            swishNumber={swishNumber}
            description={description}
            description_in={description_in}
            startTransition={startTransition}
          />
        </div>
      </div>
    </>
  );
}
