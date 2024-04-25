import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: { favoriteCampersIds: [] },
  reducers: {
    updateFavorites: (state, action) => {
      state.favoriteCampersIds = action.payload;
    },
  },
});

export const favoritesReducer = favoritesSlice.reducer;
export const { updateFavorites } = favoritesSlice.actions;
