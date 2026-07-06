import { create } from "zustand";

type CategoryFilterState = {
  selected: string;
  setSelected: (category: string) => void;
};

export const useCategoryFilterStore = create<CategoryFilterState>((set) => ({
  selected: "todas",
  setSelected: (category) => set({ selected: category }),
}));