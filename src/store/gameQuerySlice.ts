import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface GameQueryState {
  genreId?: number;
  platformId?: number;
  searchInput?: string;
  sortOrder?: string;
}

const initialState: GameQueryState = {};

export const gameQuerySlice = createSlice({
  name: 'gameQuery',
  initialState,
  reducers: {
    setGenreId: (state, action: PayloadAction<number>) => {
      state.genreId = action.payload;
    },
    setPlatformId: (state, action: PayloadAction<number>) => {
      state.platformId = action.payload;
    },
    setSearchInput: (state, action: PayloadAction<string>) => {
      state.searchInput = action.payload;
    },
    setSortOrder: (state, action: PayloadAction<string>) => {
      state.sortOrder = action.payload;
    }
  }
});

export const { setGenreId, setPlatformId, setSearchInput, setSortOrder } =
  gameQuerySlice.actions;

export default gameQuerySlice.reducer;
