// Import the necessary functions from the Redux Toolkit query package
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a ShazamAPI client using createApi
export const ShazamAPI = createApi({
  // Define a unique identifier for this API client's slice of state in Redux store
  reducerPath: 'ShazamAPI',
  // Define the base URL for all API requests and set headers with API key
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY);

      return headers;
    },
  }),
  // Define the available endpoints for the ShazamAPI client
  endpoints: (builder) => ({
    // Query to get the top tracks in a specific country by country code
    getTracksByLocation: builder.query({ query: (country) => `v1/charts/country?country_code=${country}` }),
    // Query to get the top tracks globally
    getTopHits: builder.query({ query: () => 'v1/charts/world' }),
    // Query to get details of a recognized track by name and track ID
    getRecognizedTracks: builder.query({ query: ({ name, trackid }) => `v1/tracks/youtube-video/${name}/${trackid}` }),
    // Query to get details of a specific track by ID
    getTrackDetails: builder.query({ query: ({ trackid }) => `v1/tracks/details?track_id=${trackid}` }),
    // Query to get tracks related to a specific track by ID
    getTrackRelated: builder.query({ query: ({ trackid }) => `v1/tracks/related?track_id=${trackid}` }),
    // Query to get top tracks in a specific genre globally by genre code
    getTracksByGenre: builder.query({ query: (genre) => `v1/charts/genre-world?genre_code=${genre}` }),
    // Query to get details of a specific musician by artist ID
    getMusicianDetails: builder.query({ query: (artistId) => `v2/artists/details?artist_id=${artistId}` }),
    // Query to search for tracks and musicians by search term
    getTracksBySearch: builder.query({ query: (searchTerm) => `v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
  }),
});

// Destructure the endpoints from the ShazamAPI client for easy use in other components
export const {
  useGetRecognizedTracksQuery,
  useGetTracksByLocationQuery,
  useGetTopHitsQuery,
  useGetTracksBySearchQuery,
  useGetTracksByGenreQuery,
  useGetMusicianDetailsQuery,
  useGetTrackDetailsQuery,
  useGetTrackRelatedQuery,
} = ShazamAPI;
