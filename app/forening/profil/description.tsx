"use client";
import { useState } from "react";
import { useProfileData } from "./data";

type DescriptionProps = {
  description_in: string;
};
export default function Description(props: DescriptionProps) {
  const setDescriptionZustand = useProfileData((state) => state.setDescription);
  const [description, setDescription] = useState(props.description_in);

  const setDescriptionFunc = (newDescription: string) => {
    setDescriptionZustand(newDescription);
    setDescription(newDescription);
  };

  return (
    <div className="bg-[#FFF0D9] p-5 rounded-2xl outline-4 w-full shadow-xl/25">
      <label htmlFor="name" className="block mb-2 font-bold">
        Bössans beskrivning
      </label>
      <textarea
        id="description"
        name="description"
        rows={5}
        value={description}
        onChange={(e) => setDescriptionFunc(e.target.value)}
        placeholder="Skriv din beskrivning här..."
        className="w-full p-3 border rounded-lg resize-y bg-white"
      />
    </div>
  );
}
