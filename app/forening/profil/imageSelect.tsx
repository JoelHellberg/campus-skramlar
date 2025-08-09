import { ChangeEvent, Dispatch, SetStateAction, useRef } from "react";

type ImageSelectProps = {
  imageUrl: string | undefined;
  setImageUrl: Dispatch<SetStateAction<string | undefined>>;
  isPending: boolean;
  foreningsId: string;
};
export default function ImageSelect(props: ImageSelectProps) {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const firstFile = e.target.files[0];
      const newImageUrl = URL.createObjectURL(firstFile);
      props.setImageUrl(newImageUrl);
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
        disabled={props.isPending}
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
              props.imageUrl ||
              `https://xpdnuxdvwdgxdqwffgoy.supabase.co/storage/v1/object/public/loggor/${
                props.foreningsId
              }.png?t=${Date.now()}`
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
    </>
  );
}
