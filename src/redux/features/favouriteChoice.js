// Import createSlice function from the Redux Toolkit library
import { createSlice } from '@reduxjs/toolkit';

// Define the initial state of the store
const initialState = {
  favourites: [], // An array to hold the favourite items
};

// Define a slice of the store for handling favourites
export const favouriteChoice = createSlice({
  name: 'Favourites', // A name for the slice
  initialState, // The initial state of the slice
  reducers: {
    // A reducer to add multiple favourites to the store
    addFavourites: (state, action) => {
      action.payload.map((favourite) => {
        state.favourites.push(JSON.parse(favourite));
      });
    },
    // A reducer to add a single favourite to the store
    addToFavourites: (state, action) => {
      state.favourites.push(action.payload);
    },
    // A reducer to remove a favourite from the store
    removeFromFavourites: (state, action) => {
      state.favourites = state.favourites.filter(
        (track) => track.key !== action.payload,
      );
    },
  },
});

// Export the actions created by the slice
export const { addToFavourites, addFavourites, removeFromFavourites } = favouriteChoice.actions;

// Export the reducer created by the slice
export default favouriteChoice.reducer;
