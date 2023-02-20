import React from 'react';
import { useSelector } from 'react-redux';

import { Error, Loader, TrackCard } from '../components';
import { useGetTopHitsQuery } from '../redux/service/ShazamAPI';

const TopHits = () => {
  const { data, isFetching, error } = useGetTopHitsQuery();
  const { activeTrack, isPlaying } = useSelector(
    (state) => state.player,
  );

  if (isFetching) return <Loader title="Loading Top Charts" />;
  // Error handling to make sure the app renders
  if (error) return <Error />;

  return (

    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-orange text-left mt-4 mb-8">
        Discover Top Charts
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data.map((track, i) => (
          <TrackCard
            key={track.key}
            isPlaying={isPlaying}
            activeTrack={activeTrack}
            data={data}
            track={track}
            i={i}
          />
        ))}
      </div>
    </div>

  );
};

export default TopHits;
