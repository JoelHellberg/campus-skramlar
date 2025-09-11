"use client";
import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from "react";
import { useProfileData } from "./data";

type ImageSelectProps = {
  foreningsId_in: string;
  imgUrl_in: string;
};
export default function ImageSelect(props: ImageSelectProps) {
  const setImageUrlZustand = useProfileData((state) => state.setImageUrl);
  const [imageUrl, setImageUrl] = useState<string>();
  const imageInputRef = useRef<HTMLInputElement>(null);
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const firstFile = e.target.files[0];
      const newImageUrl = URL.createObjectURL(firstFile);
      setImageUrlZustand(newImageUrl);
      setImageUrl(newImageUrl);
    }
  };
  return (
    <>
      <input
        type="file"
        accept=".png"
        hidden
        multiple
        ref={imageInputRef}
        onChange={handleImageChange}
      />
      <div
        className="relative bg-[#FFF0D9] p-5 flex flex-col items-center text-center justify-center rounded-2xl outline-4 sm:mr-10 shadow-xl/30 cursor-pointer
                  transition-all duration-300 transform hover:scale-105 hover:shadow-xl/25 font-bold
                  w-1/2 sm:w-full aspect-square"
        onClick={() => imageInputRef.current?.click()}
      >
        {imageUrl || props.imgUrl_in ? (
          <div className="absolute inset-1 m-auto overflow-hidden">
            <img
              src={imageUrl || props.imgUrl_in}
              className="h-full rounded-2xl"
            />
          </div>
        ) : (
          <h2 className="!text-3xl">
            Byt
            <br />
            Profilbild
          </h2>
        )}
      </div>
    </>
  );
}
