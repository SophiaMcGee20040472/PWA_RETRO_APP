// Import required modules
import { Link } from 'react-router-dom';
import React from 'react';
import Playbar from '../PlayerOptions/PlayBar';

// Define TrackBar component with props
const TrackBar = ({
  track,
  i,
  artistId,
  activeTrack,
}) => (
  // Render track bar UI with dynamic class names based on activeTrack prop
  <div
    className={`w-full flex flex-row items-center from-black to bg-purple ${
      activeTrack?.title === track?.title ? 'bg-black' : 'bg-transparent'
    } py-2 p-4 rounded-lg cursor-pointer mb-2`}
  >
    <h3 className="font-bold text-orange mr-6">{i + 1}.</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img
        className="w-20 h-20 rounded-lg"
        src={
          artistId
            ? track?.attributes?.artwork?.url
              .replace('{w}', '500')
              .replace('{h}', '100')
            : track?.images?.coverart
        }
        alt={track?.title}
      />
      <div className="flex-1 flex flex-col text-md justify-center mx-3">
        {!artistId ? (
          <Link to={`/tracks/${track.key}`}>
            <p className="text-l textbold text-md text-orange">{track?.title}</p>
          </Link>
        ) : (
          <p className="text-sm text-bold text-md text-orange">
            {track?.attributes?.name}
          </p>
        )}
        <p className="text-base text-white mt-1">
          {artistId ? track?.attributes?.albumName : track?.subtitle}
        </p>
      </div>
    </div>
    {!artistId ? (
      <Playbar />
    ) : null}
  </div>
);

// Export TrackBar component
export default TrackBar;
