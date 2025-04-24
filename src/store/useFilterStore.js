import { create } from "zustand";

export const useGenreStore = create((set) => ({
  selectedGenre: "ALL",
  setSelectedGenre: (genreIds) => set({ selectedGenre: genreIds }),
}));


export const useSortStore = create((set) => ({
  sort: "popularity.desc",
  setSort: (sort) => set({ sort }),
}));

