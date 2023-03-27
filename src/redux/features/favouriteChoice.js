import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favourites: [],
};

export const favouriteChoice = createSlice({
  name: "Favourites",
  initialState,
  reducers: {
    addFavourites: (state, action) => {
      action.payload.map((favourite) => {
        state.favourites.push(JSON.parse(favourite));
      });
    },
    addToFavourites: (state, action) => {
      state.favourites.push(action.payload);
    },
    removeFromFavourites: (state, action) => {
      state.favourites = state.favourites.filter(
        (track) => track.key !== action.payload
      );
    },
  },
});

export const { addToFavourites, addFavourites, removeFromFavourites } =
  favouriteChoice.actions;

export default favouriteChoice.reducer;
