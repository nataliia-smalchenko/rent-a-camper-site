import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './api';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: { items: [], isLoading: false, error: null },
  reducers: {
    updateAdverts: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchAdverts.rejected, handleRejected),
});

export const advertsReducer = advertsSlice.reducer;
export const { updateAadverts } = advertsSlice.actions;
