import React from "react";
import { musicGenres } from "../assets/genreConstants";
import { TrackCard, Error, Loader, SearchBar } from "../components";
import { selectGenreListId } from "../redux/features/playerChoices";
import { useGetTopHitsQuery } from "../redux/service/ShazamAPI";
import { useDispatch, useSelector } from 'react-redux';


const DiscoverMusic = () => {
  const dispatch= useDispatch();
  const { genreListId } = useSelector((state) => state.player);
  const { activeTrack, currentlyPlaying } = useSelector((state) => state.player);
  const GenreMenuName = "Pop";
  const { data, isFetching, error } = useGetTopHitsQuery();
  const testArray = [1, 2, 3, 4, 5];

  if (isFetching) return <Loader title="Currently Loading Tracks" />;

  if (error) return <Error />;
  console.log(data, "HELLO");
  return (
    
    <div className="flex flex-col">
          <SearchBar/>
    <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
      <h2 className="font-bold text-3xl text-white text-left">Discover {GenreMenuName}</h2>
      <select
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          value={genreListId || 'pop'}
          className=" from-purple bg-black bg-gradient-to-br text-white p-1 text-l rounded-sm outline-none sm:mt-8 mt-6"
        >
          {musicGenres.map((musicGenres) => <option key={musicGenres.value} value={musicGenres.value}>{musicGenres.title}</option>)}
        </select>
      </div>
        <div className="flex flex-wrap-reverse sm:justify-center justify-center gap-6 mt-9">
          {data?.map((track, i) => (
            <TrackCard 
            key={track.key} 
            i={i}
            currentlyPlaying={currentlyPlaying}
            activeTrack={activeTrack}
            data={data}
            track={track} />
          ))}
        </div>
      </div>
  );
};

export default DiscoverMusic;

