import { create } from 'zustand';

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  searchInput?: string;
  sortOrder?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSearchInput: (searchInput: string) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>()((set) => ({
  gameQuery: {},
  setGenreId: (genreId: number) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, genreId } })),
  setPlatformId: (platformId: number) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, platformId } })),
  setSearchInput: (searchInput: string) =>
    set(() => ({ gameQuery: { searchInput } })),
  setSortOrder: (sortOrder: string) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, sortOrder } }))
}));

export default useGameQueryStore;
