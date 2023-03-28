/* eslint-disable no-shadow */ // Disable the "no-shadow" eslint rule for this file
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Importing hooks from react-redux for dispatching actions and selecting parts of the state
import { musicGenres } from '../assets/genreConstants'; // Importing an array of music genres
import { TrackCard, Error, Loader } from '../components'; // Importing custom components
import { selectGenreListId } from '../redux/features/playerChoices'; // Importing a redux action creator
import { useGetTracksByGenreQuery } from '../redux/service/ShazamAPI'; // Importing a custom hook for fetching data from the Shazam API
import '../assets/genre.css'; // Importing a CSS file

const DiscoverMusic = () => {
  const dispatch = useDispatch(); // Initializing the dispatch function
  const { genreListId } = useSelector((state) => state.player); // Selecting the genreListId from the redux state
  const { data, isFetching, error } = useGetTracksByGenreQuery(
    genreListId || 'POP', // Fetching the tracks of the selected genre or 'POP' by default
  );
  const { activeTrack, isPlaying } = useSelector((state) => state.player); // Selecting the activeTrack and isPlaying values from the redux state
  const GenreMenuName = musicGenres.find(
    ({ value }) => value === genreListId, // Finding the genre title by matching its value with the selected genreListId
  )?.title;

  if (isFetching) return <Loader title="Currently Loading Tracks" />; // Render a loader while the tracks are being fetched
  if (error) return <Error />; // Render an error message if there's an error in fetching the tracks

  // Mapping each genre to its corresponding CSS class
  const genreToClassName = {
    POP: 'bg-POP',
    ALTERNATIVE: 'bg-ALTERNATIVE',
    ROCK: 'bg-ROCK',
    LATIN: 'bg-LATIN',
    FILM_TV: 'bg-FILM_TV',
    COUNTRY: 'bg-COUNTRY',
    SOUL_RNB: 'bg-SOUL_RNB',
    WORLDWIDE: 'bg-WORLDWIDE',
    REGGAE_DANCE_HALL: 'bg-REGGAE_DANCE_HALL',
    HIP_HOP_RAP: 'bg-HIP_HOP_RAP',
    DANCE: 'bg-DANCE',
    ELECTRONIC: 'bg-ELECTRONIC',
    HOUSE: 'bg-HOUSE',
    K_POP: 'bg-K_POP',
  };
  // eslint-disable-next-line no-console
  // Return the JSX for rendering the component
  return (
    <div className={`flex flex-col px-4 ${genreToClassName[genreListId]}`}>
      {/* Render the genre title and genre selector */}
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10 ">
        <h2 className="font-bold text-2xl text-orange text-left mt-1">
          Discover {GenreMenuName}
        </h2>
        <select
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          value={genreListId || 'pop'}
          className=" from-purple bg-black bg-gradient-to-br text-white p-2 text-l rounded-lg outline-black mr-5 font-thin "
          // Disable a lint warning for this line
        >
          {/* Render each genre option */}
          {musicGenres.map((musicGenres) => (
            <option key={musicGenres.value} value={musicGenres.value}>
              {musicGenres.title}
            </option>
          ))}
        </select>
      </div>

      {/* Render each TrackCard component based on data */}
      <div className="flex flex-wrap sm:justify-start justify-center gap-5 px-1">
        {data?.map((track, i) => (
          <TrackCard
            key={track.key}
            i={i}
            isPlaying={isPlaying}
            activeTrack={activeTrack}
            data={data}
            track={track}
          />
        ))}
      </div>
    </div>
  );
};

export default DiscoverMusic;
