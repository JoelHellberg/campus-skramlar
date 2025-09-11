import { create } from "zustand";

type ProfileData = {
  foreningsNamn: string;
  swishSum: number;
  swishNumber: string;
  description: string;
  imageUrl: string;

  setForeningsNamn: (foreningsNamn_in: string) => void;
  setSwishSum: (swishSum_in: number) => void;
  setSwishNumber: (swishNumber_in: string) => void;
  setDescription: (description_in: string) => void;
  setImageUrl: (imageUrl_in: string) => void;
};

export const useProfileData = create<ProfileData>((set, get) => ({
  foreningsNamn: "",
  swishSum: 10,
  swishNumber: "",
  description: "",
  imageUrl: "",

  setForeningsNamn: (foreningsNamn) => {
    set({ foreningsNamn });
  },

  setSwishSum: (swishSum) => {
    set({ swishSum });
  },

  setSwishNumber: (swishNumber) => {
    set({ swishNumber });
  },

  setDescription: (description) => {
    set({ description });
  },
  setImageUrl: (imageUrl) => {
    set({ imageUrl });
  },
}));
