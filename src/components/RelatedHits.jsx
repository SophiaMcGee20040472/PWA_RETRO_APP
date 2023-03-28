import React from 'react';
import TrackBar from './TrackBar';

const RelatedHits = ({
  data, // related tracks data
  artistId, // artist ID
  isPlaying, // boolean value indicating whether a track is playing or not
  activeTrack, // current active track
  handleClickPause, // function to handle pause button click
  handleClickPlay, // function to handle play button click
}) => (
  <div className="flex flex-col">
    <h1 className="font-bold text-3xl text-white ml-2">Related Songs:</h1>
    <div className="mt-6 w-full flex flex-col ml-2">
      {/* Loop through the related tracks data and render a TrackBar component for each track */}
      {data?.map((track, i) => (
        <TrackBar
          key={`${artistId}-${track.key}-${i}`}
          track={track} // current related track
          i={i} // current index
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
