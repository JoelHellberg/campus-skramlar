import {
  fetchBossaDetailed,
  fetchBossaGeneral,
} from "@/app/_lib/supabase/clientFunctions";
import { BossaDetailed, BossaGeneral } from "@/app/_lib/types";
import { create } from "zustand";

type BossaData = {
  _isInitialized: boolean;
  foreningsId: string;
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

  initialize: () => void;
};

export const useBossaData = create<BossaData>((set, get) => ({
  _isInitialized: false,
  foreningsId: "",
  foreningsNamn: "",
  moneyCollected: 0,
  swishSum: 0,
  swishNumber: "",
  description: "",

  setBossaGeneral: (foreningsNamn, moneyCollected) => {
    set({ foreningsNamn, moneyCollected });
  },

  setBossaDetails: (swishSum, swishNumber, description) => {
    set({ swishSum, swishNumber, description });
  },

  initialize: async () => {
    if (get()._isInitialized) return;
    if (typeof window !== "undefined") {
      const storedId = localStorage.getItem("foreningsId");
      if (storedId) {
        set({
          _isInitialized: true,
          foreningsId: storedId,
        });
        const bossaGeneral: BossaGeneral | null = await fetchBossaGeneral(
          storedId
        );
        if (bossaGeneral) {
          const bossaDetailed: BossaDetailed = await fetchBossaDetailed(
            storedId
          );

          set({
            foreningsNamn: bossaGeneral.forenings_namn,
            moneyCollected: bossaGeneral.pengar_insamlat,
            swishSum: bossaDetailed.swish_sum,
            swishNumber: bossaDetailed.phone_number,
            description: bossaDetailed.description,
          });
        }
      }
    }
  },
}));
