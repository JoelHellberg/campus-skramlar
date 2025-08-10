import { create } from "zustand";

type InsamlatData = {
  moneyAmount: number;
  setMoneyAmount: (moneyAmount_in: number) => void;
};

export const useInsamlatData = create<InsamlatData>((set) => ({
  moneyAmount: 0,

  setMoneyAmount: (moneyAmount) => {
    set({ moneyAmount });
  },
}));
