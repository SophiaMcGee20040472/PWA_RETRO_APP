import { configureStore } from "@reduxjs/toolkit";
import { ShazamAPI } from "./service/ShazamAPI.js";
import playerChoices from "./features/playerChoices.js";

export const store = configureStore({
  reducer: {
    player: playerChoices,
    [ShazamAPI.reducerPath]: ShazamAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ShazamAPI.middleware),
});
