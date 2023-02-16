import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ShazamAPI = createApi({
  reducerPath: 'ShazamAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTracksByLocation: builder.query({ query: (location) => `v1/charts/country?country_code=${location}` }),
    getTopHits: builder.query({ query: () => 'v1/charts/world' }),
    getTrackDetails: builder.query({ query: ({ trackid }) => `v1/tracks/details?track_id=${trackid}` }),
    getTrackRelated: builder.query({ query: ({ trackid }) => `v1/tracks/related?track_id=${trackid}` }),
    getTracksByGenre: builder.query({ query: (genre) => `v1/charts/genre-world?genre_code=${genre}` }),
    getMusicianDetails: builder.query({ query: (artistId) => `v2/artists/details?artist_id=${artistId}` }),
    getTracksBySearch: builder.query({ query: (searchTerm) => `v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
  }),
});

export const {
  useGetTracksByLocationQuery,
  useGetTopHitsQuery,
  useGetTracksBySearchQuery,
  useGetTracksByGenreQuery,
  useGetMusicianDetailsQuery,
  useGetTrackDetailsQuery,
  useGetTrackRelatedQuery,
} = ShazamAPI;

