import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: { favoriteCampersIds: [] },
  reducers: {
    toggleFavorites: (state, action) => {
      const id = action.payload;
      if (state.favoriteCampersIds.includes(id)) {
        state.favoriteCampersIds = state.favoriteCampersIds.filter(
          el => el !== action.payload
        );
      } else {
        state.favoriteCampersIds = [
          ...state.favoriteCampersIds,
          action.payload,
        ];
      }
    },
  },
});

export const favoritesReducer = favoritesSlice.reducer;
export const { toggleFavorites } = favoritesSlice.actions;
