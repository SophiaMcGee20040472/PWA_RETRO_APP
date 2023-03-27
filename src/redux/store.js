import { configureStore } from '@reduxjs/toolkit';
import { ShazamAPI } from './service/ShazamAPI.js';
import playerChoices from './features/playerChoices.js';
import favouritesChoice from './features/favouriteChoice.js';
import loginSlice from './features/loginSlice.js';
import userReducer from './features/userSlice.js';

export const store = configureStore({
  reducer: {
    [ShazamAPI.reducerPath]: ShazamAPI.reducer,
    user: userReducer,
    player: playerChoices,
    favourites: favouritesChoice,
    login: loginSlice,
  },
  /* The middleware property is a function that specifies any additional middleware that should be applied to the store. In this case, the ShazamAPI.middleware is appended to the default middleware returned by getDefaultMiddleware(). */
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ShazamAPI.middleware),
});
