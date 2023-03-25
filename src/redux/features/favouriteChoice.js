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
        (fav) => fav.id !== action.payload.id,
      );
    },
    setFavourites: (state, action) => {
      state.favourites = action.payload;
    },
  },
});

export const { addToFavourites, removeFromFavourites } = favouriteChoice.actions;

export default favouriteChoice.reducer;
