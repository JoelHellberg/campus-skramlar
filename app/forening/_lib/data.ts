import { create } from "zustand";

type BossaData = {
  foreningsNamn: string;
  moneyCollected: number;

  swishSum: number;
  swishNumber: string;
  description: string;

  setBossaGeneral: (
    foreningsNamn_in: string,
    moneyCollected_in: number
  ) => void;

  setBossaDetails: (
    swishSum_in: number,
    swishNumber_in: string,
    description_in: string
  ) => void;
};

export const useBossaData = create<BossaData>((set) => ({
  foreningsNamn: "",
  moneyCollected: 0,

  swishSum: 0,
  swishNumber: "",
  description: "",

  setBossaGeneral: (foreningsNamn_in: string, moneyCollected_in: number) => {
    set({ foreningsNamn: foreningsNamn_in, moneyCollected: moneyCollected_in });
  },

  setBossaDetails(swishSum_in, swishNumber_in, description_in) {
    set({
      swishSum: swishSum_in,
      swishNumber: swishNumber_in,
      description: description_in,
    });
  },
}));
