import { create } from "zustand";

type LoaderData = {
  loading: boolean;
  startLoader: () => void;
  stopLoader: () => void;
};

export const useLoaderData = create<LoaderData>((set) => ({
  loading: false,

  startLoader: () => {
    set({ loading: true });
  },

  stopLoader: () => {
    set({ loading: false });
  },
}));
