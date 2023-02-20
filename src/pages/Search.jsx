import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Error, Loader, TrackCard } from '../components';
import { useGetTracksBySearchQuery } from '../redux/service/ShazamAPI';

const Search = () => {
  const { searchTerm } = useParams();
  const { activeTrack, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTracksBySearchQuery(searchTerm);

  const tracks = data?.tracks?.hits.map((track) => track.track);

  if (isFetching) return <Loader title={`Searching for ${searchTerm}...`} />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10"><span className="font-orange">Searching for.... {searchTerm}</span></h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {tracks.map((track, i) => (
          <TrackCard
            key={track.key}
            track={track}
            isPlaying={isPlaying}
            activePlaying={activeTrack}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
