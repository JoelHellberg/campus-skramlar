"use client";

import { useState } from "react";
import { useUpdateData } from "./data";

export default function Input() {
  const setDescriptionZustand = useUpdateData((state) => state.setDescription);
  const [description, setDescription] = useState<string>();
  const setDescriptionFunc = (description_in: string) => {
    setDescriptionZustand(description_in);
    setDescription(description_in);
  };
  return (
    <textarea
      value={description}
      onChange={(e) => setDescriptionFunc(e.target.value)}
      id="description"
      name="description"
      rows={5}
      placeholder="Skriv din beskrivning här..."
      className="bg-white w-full p-3 my-5 border rounded-lg resize-y"
    />
  );
}
