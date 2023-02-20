import { configureStore } from '@reduxjs/toolkit';
import { ShazamAPI } from './service/ShazamAPI.js';
import playerChoices from './features/playerChoices.js';

export const store = configureStore({
  reducer: {
    [ShazamAPI.reducerPath]: ShazamAPI.reducer,
    player: playerChoices,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ShazamAPI.middleware),
});