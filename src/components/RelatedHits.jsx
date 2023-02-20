import React from 'react';
import TrackBar from './TrackBar';

const RelatedHits = ({
  data,
  artistId,
  isPlaying,
  activeTrack,
  handleClickPause,
  handleClickPlay,
}) => (
  <div className="flex flex-col">
    <h1 className="font-bold text-3xl text-white ml-2">Related Songs:</h1>
    <div className="mt-6 w-full flex flex-col ml-2">
      {data?.map((track, i) => (
        <TrackBar
          key={`${artistId}-${track.key}-${i}`}
          track={track}
          i={i}
          artistId={artistId}
          isPlaying={isPlaying}
          activeTrack={activeTrack}
          handleClickPause={handleClickPause}
          handleClickPlay={handleClickPlay}
        />
      ))}
    </div>
  </div>
);
export default RelatedHits;
