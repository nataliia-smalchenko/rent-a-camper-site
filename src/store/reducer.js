import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { favoritesReducer } from './favoritesSlice';
import { advertsReducer } from './advertsSlice';

const config = {
  key: 'favoriteAdverts',
  storage,
  blackList: [],
};

const persisedReducer = persistReducer(config, favoritesReducer);

export const reducer = combineReducers({
  favorites: persisedReducer,
  adverts: advertsReducer,
});
