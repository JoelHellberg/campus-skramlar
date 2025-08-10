import { create } from "zustand";

type UpdateData = {
  description: string;
  setDescription: (description_in: string) => void;
};

export const useUpdateData = create<UpdateData>((set) => ({
  description: "",

  setDescription: (description) => {
    set({ description });
  },
}));
