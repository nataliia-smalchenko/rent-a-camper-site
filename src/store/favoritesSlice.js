import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: { favoriteCampersIds: [] },
  reducers: {
    deleteFavorite: (state, action) => {
      state.favoriteCampersIds = state.contacts.filter(
        el => el !== action.payload
      );
    },
    addFavorite: (state, action) => {
      state.favoriteCampersIds = [...state.contacts, action.payload];
    },
  },
});

export const favoritesReducer = favoritesSlice.reducer;
export const { updateFavorites } = favoritesSlice.actions;
