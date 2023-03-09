import { configureStore } from '@reduxjs/toolkit';
import { ShazamAPI } from './service/ShazamAPI.js';
import playerChoices from './features/playerChoices.js';
import favouritesChoice from './features/favouriteChoice.js';

export const store = configureStore({
  reducer: {
    [ShazamAPI.reducerPath]: ShazamAPI.reducer,
    player: playerChoices,
    favourites: favouritesChoice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ShazamAPI.middleware),
});
