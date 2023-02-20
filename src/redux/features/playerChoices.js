import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentTracks: [],
  currentIndex: 0,
  currentlyActive: false,
  isPlaying: false,
  activeTrack: {},
  genreListId: '',
};

const playerChoices = createSlice({
  name: 'Player',
  initialState,
  reducers: {
    setActiveTrack: (state, action) => {
      state.activeTrack = action.payload.track;

      if (action.payload?.data?.tracks?.hits) {
        state.currentTracks = action.payload.data.tracks.hits;
      } else if (action.payload?.data?.properties) {
        state.currentTracks = action.payload?.data?.tracks;
      } else {
        state.currentTracks = action.payload.data;
      }
      state.currentIndex = action.payload.i;
      state.currentlyActive = true;
    },

    prevTrack: (state, action) => {
      if (state.currentTracks[action.payload]?.track) {
        state.activeTrack = state.currentTracks[action.payload]?.track;
      } else {
        state.activeTrack = state.currentTracks[action.payload];
      }

      state.currentIndex = action.payload;
      state.currentlyActive = true;
    },
    nextTrack: (state, action) => {
      if (state.currentTracks[action.payload]?.track) {
        state.activeTrack = state.currentTracks[action.payload]?.track;
      } else {
        state.activeTrack = state.currentTracks[action.payload];
      }

      state.currentIndex = action.payload;
      state.currentlyActive = true;
    },

    pausePlay: (state, action) => {
      state.isPlaying = action.payload;
    },

    selectGenreListId: (state, action) => {
      state.genreListId = action.payload;
    },
  },
});

export const {
  setActiveTrack,
  nextTrack,
  prevTrack,
  pausePlay,
  selectGenreListId,
} = playerChoices.actions;
export default playerChoices.reducer;
