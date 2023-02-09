import React from "react";
import { musicGenres } from "../assets/genreConstants";
import { TrackCard, Error, Loader, SearchBar } from "../components";
import { selectGenreListId } from "../redux/features/playerChoices";
import { useGetTopHitsQuery } from "../redux/service/ShazamAPI";
import { useGetTracksByGenreQuery } from "../redux/service/ShazamAPI";
import { useDispatch, useSelector } from 'react-redux';
import { RiBearSmileLine } from "react-icons/ri";
import VolumeOptions from "../components/Player/VolumeOptions";
import Song from "../components/Player/Song";
import PlayerTemplate from "../components/Player/PlayerTemplate";
import Navigation from "../components/Player/Navigation";



const DiscoverMusic = () => {
  const dispatch= useDispatch();
  const { genreListId } = useSelector((state) => state.player);
  const { activeTrack, currentlyPlaying } = useSelector((state) => state.player);
  const GenreMenuName = musicGenres.find(({ value }) => value === genreListId)?.title;;
  const { data, isFetching, error } = useGetTracksByGenreQuery(genreListId || 'Pop');
  const testArray = [1, 2, 3, 4, 5];


  if (isFetching) return <Loader title="Currently Loading Tracks" />;
//  if (error) return <Error />;
 
  console.log(data, "discovering pop");
  return (
    
     <div className="flex flex-col">
          <SearchBar/>
    <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
      <h2 className="font-bold text-3xl text-orange text-left mt-1 mb-8 py-2 px-3">Discover {GenreMenuName}</h2>
      <select
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          value={genreListId || 'pop'}
          className=" from-purple bg-black bg-gradient-to-br text-white p-3 text-l rounded-sm outline-none "
        >
          {musicGenres.map((musicGenres) => <option key={musicGenres.value} value={musicGenres.value}>{musicGenres.title}</option>)}
        </select>
      </div>
        <div className="flex flex-wrap sm:justify-start justify-center gap-8 px-1">
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
        <Navigation/>

      </div>
  );
};

export default DiscoverMusic;
