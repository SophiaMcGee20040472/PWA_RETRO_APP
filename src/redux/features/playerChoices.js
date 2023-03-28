// Importing the createSlice function from the Redux Toolkit library
import { createSlice } from '@reduxjs/toolkit';

// Setting the initial state object for the music player slice
const initialState = {
  currentTracks: [],    // An array to hold the tracks that are currently loaded
  currentIndex: 0,      // The index of the currently active track in the 'currentTracks' array
  currentlyActive: false, // A boolean value to indicate if the music player is currently active
  isPlaying: false,     // A boolean value to indicate if the music player is currently playing or paused
  activeTrack: {},      // An object to hold information about the currently active track
  genreListId: '',      // A string value to hold the ID of the genre list that is currently selected
};

// Defining the 'playerChoices' slice using the createSlice function
const playerChoices = createSlice({
  name: 'Player',         // The name of the slice
  initialState,           // The initial state object
  reducers: {
    // A reducer to set the currently active track
    setActiveTrack: (state, action) => {
      // Update the state with the track information provided in the action payload
      state.activeTrack = action.payload.track;

      // Determine if the payload includes data on the tracks and update the 'currentTracks' array accordingly
      if (action.payload?.data?.tracks?.hits) {
        state.currentTracks = action.payload.data.tracks.hits;
      } else if (action.payload?.data?.properties) {
        state.currentTracks = action.payload?.data?.tracks;
      } else {
        state.currentTracks = action.payload.data;
      }

      // Update the state with the index and currently active status of the new track
      state.currentIndex = action.payload.i;
      state.currentlyActive = true;
    },

    // A reducer to switch to the previous track in the 'currentTracks' array
    prevTrack: (state, action) => {
      // Determine if the previous track has a 'track' property and update the 'activeTrack' object accordingly
      if (state.currentTracks[action.payload]?.track) {
        state.activeTrack = state.currentTracks[action.payload]?.track;
      } else {
        state.activeTrack = state.currentTracks[action.payload];
      }

      // Update the state with the index and currently active status of the previous track
      state.currentIndex = action.payload;
      state.currentlyActive = true;
    },

    // A reducer to switch to the next track in the 'currentTracks' array
    nextTrack: (state, action) => {
      // Determine if the next track has a 'track' property and update the 'activeTrack' object accordingly
      if (state.currentTracks[action.payload]?.track) {
        state.activeTrack = state.currentTracks[action.payload]?.track;
      } else {
        state.activeTrack = state.currentTracks[action.payload];
      }

      // Update the state with the index and currently active status of the next track
      state.currentIndex = action.payload;
      state.currentlyActive = true;
    },

    // A reducer to toggle the 'isPlaying' property between true and false
    pausePlay: (state, action) => {
      state.isPlaying = action.payload;
    },

    // A reducer to set the currently selected genre list ID
    selectGenreListId: (state, action) => {
      state.genreListId = action.payload;
    },
  },
});

// Exporting the action creators for the 'playerChoices' slice
export const {
  setActiveTrack,
  nextTrack,
  prevTrack,
  pausePlay,
  selectGenreListId,
} = playerChoices.actions;

export default playerChoices.reducer;
