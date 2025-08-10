import { create } from "zustand";

type NeedleData = {
  needlesAmount: number;

  removeNeedle: () => void;
};

export const useNeedleData = create<NeedleData>((set, get) => ({
  needlesAmount: 2,

  removeNeedle: () => {
    const newAmount = get().needlesAmount - 1;
    set({ needlesAmount: newAmount });
  },
}));
