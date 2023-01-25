import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentTracks: [],
    currentIndex: 0,
    currentlyActive: false,
    currentlyPlaying: false,
    activeTrack: {},
    genreListId: '',
  };

  const playerChoices = createSlice({
    name:'Music Player',
    initialState,
    reducers:{
        setActiveTrack:(state,action)=>{
         state.ActiveTracks =action.payload.track;

    if (action.payload?.data?.tracks?.hits) {
        state.currentTracks = action.payload.data.tracks.hits;
    } else if (action.payload?.data?.properties){
        state.currentTracks = action.payload?.data?.tracks;
    }else {
        state.currentTracks = action.payload.data;
    }
        state.currentIndex = action.payload.i;
        state.currentlyActive = true;
    },

    PauseandPlay: (state, action) => {
        state.currentlyPlaying = action.payload;
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
          state.activeSong = state.currentTracks[action.payload];
        }
  
        state.currentIndex = action.payload;
        state.currentlyActive = true;
      },
  
    selectGenreListId: (state, action) => {
        state.genreListId = action.payload;
      },
    },
  });

  export const {setActiveTrack, nextTrack,prevTrack,PauseandPlay,selectGenreListId} =playerChoices.actions
  export default playerChoices.reducer