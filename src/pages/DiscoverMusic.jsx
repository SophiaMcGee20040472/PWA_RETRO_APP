/* eslint-disable no-shadow */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { musicGenres } from '../assets/genreConstants';
import { TrackCard, Error, Loader } from '../components';
import { selectGenreListId } from '../redux/features/playerChoices';
import { useGetTracksByGenreQuery } from '../redux/service/ShazamAPI';
import '../assets/genre.css';

const DiscoverMusic = () => {
  const dispatch = useDispatch();
  const { genreListId } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTracksByGenreQuery(
    genreListId || 'POP',
  );
  const { activeTrack, isPlaying } = useSelector((state) => state.player);
  const GenreMenuName = musicGenres.find(
    ({ value }) => value === genreListId,
  )?.title;

  if (isFetching) return <Loader title="Currently Loading Tracks" />;
  if (error) return <Error />;
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
  console.log(data, 'discovering pop');
  return (
    <div className={`flex flex-col ${genreToClassName[genreListId]}`}>
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10 ">
        <h2 className="font-bold text-3xl text-orange text-left mt-1 mb-8 py-2 px-3 ">
          Discover {GenreMenuName}
        </h2>
        <select
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          value={genreListId || 'pop'}
          className=" from-purple bg-black bg-gradient-to-br text-white p-3 text-l rounded-sm outline-none mr-7 font-semibold "
          // eslint-disable-next-line react/jsx-no-comment-textnodes
        >
          {musicGenres.map((musicGenres) => (
            <option key={musicGenres.value} value={musicGenres.value}>
              {musicGenres.title}
            </option>
          ))}
        </select>
      </div>
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
