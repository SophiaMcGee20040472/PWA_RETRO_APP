import React from 'react';
import { FaPauseCircle , FaPlayCircle } from 'react-icons/fa';

const PausePlay = ({ currentlyPlaying, activeTrack, track, handlePause, handlePlay }) => (currentlyPlaying && activeTrack?.title === track.title ? (  
  <FaPauseCircle
    size={35}
    className="text-gray-300"
    onClick={handlePlay}
  />
) : (
  <FaPlayCircle 
    size={35}
    className="text-gray-300"
    onClick={handlePause}
  />
));

export default PausePlay;