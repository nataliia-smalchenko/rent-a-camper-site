import { createSelector } from '@reduxjs/toolkit';

export const selectAdverts = state => state.adverts.items;

export const selectIsLoading = state => state.adverts.isLoading;

export const selectError = state => state.adverts.error;

export const selectModalShowId = state => state.adverts.modalShowId;

export const selectFavorites = state => state.favorites.favoriteCampersIds;

export const selectCamperById = createSelector(
  [selectModalShowId, selectAdverts],
  (id, adverts) => {
    return adverts.find(advert => advert._id === id);
  }
);

export const selectVisibleAdverts = createSelector(
  [selectAdverts, selectFavorites],
  (adverts, favorites) => {
    return adverts.filter(advert => favorites.includes(advert._id));
  }
);
