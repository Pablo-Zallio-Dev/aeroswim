import { create } from "zustand";

type CategoryFilterState = {

  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedSeason: string;
  setSelectedSeason: (season: string) => void;
};

export const useCategoryFilterStore = create<CategoryFilterState>((set) => ({
      
  selectedCategory: "todas",
  setSelectedCategory: (category) => set({ selectedCategory: category }),
   selectedSeason: "todas",
  setSelectedSeason: (season) => set({ selectedSeason: season }),
}));