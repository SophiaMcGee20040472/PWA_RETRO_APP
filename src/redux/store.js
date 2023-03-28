// Importing configureStore function from the redux toolkit
import { configureStore } from '@reduxjs/toolkit';

// Importing ShazamAPI object that we defined in another file
import { ShazamAPI } from './service/ShazamAPI.js';

// Importing reducers from different files to be combined together
import playerChoices from './features/playerChoices.js';
import favouritesChoice from './features/favouriteChoice.js';
import loginSlice from './features/loginSlice.js';
import userReducer from './features/userSlice.js';

// Creating the Redux store and configuring its reducer and middleware
export const store = configureStore({
  reducer: {
    // Specifying the ShazamAPI's reducerPath as the key and its reducer as the value in the root reducer
    [ShazamAPI.reducerPath]: ShazamAPI.reducer,

    // Adding other reducers to the root reducer
    user: userReducer,
    player: playerChoices,
    favourites: favouritesChoice,
    login: loginSlice,
  },

  // Specifying additional middleware to be applied to the store.
  // In this case, we're appending ShazamAPI's middleware to the default middleware returned by getDefaultMiddleware()
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ShazamAPI.middleware),
});
