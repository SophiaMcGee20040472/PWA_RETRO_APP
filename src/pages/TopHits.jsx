import React from 'react';
import { useSelector } from 'react-redux';

import { Error, Loader, TrackCard } from '../components';
import { useGetTopHitsQuery } from '../redux/service/ShazamAPI';

const TopHits = () => {
  // Fetch Top Charts data and loading status from ShazamAPI
  const { data, isFetching, error } = useGetTopHitsQuery();

  // Get current activeTrack and isPlaying status from player feature
  const { activeTrack, isPlaying } = useSelector((state) => state.player);

  // If data is still being fetched, show loading indicator
  if (isFetching) return <Loader title="Loading Top Charts" />;

  // If there is an error, show error message
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-2xl text-orange text-left mt-4 mb-8">
        Discover Top Charts
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {/* Loop through each track in the data array and render a TrackCard */}
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

