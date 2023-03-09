import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favourites: [],
};

export const favouriteChoice = createSlice({
  name: 'Favourites',
  initialState,
  reducers: {
    addToFavourites: (state, action) => {
      state.favourites.push(action.payload);
    },
    removeFromFavourites: (state, action) => {
      state.favourites = state.favourites.filter(
        (track) => track.title !== action.payload.title,
      );
    },
  },
});

export const { addToFavourites, removeFromFavourites } = favouriteChoice.actions;

export default favouriteChoice.reducer;
