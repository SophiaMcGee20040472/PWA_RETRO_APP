import { PauseandPlay, setActiveTrack } from "../redux/features/playerChoices";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import PausePlay from "./PausePlay";
import React from 'react';

const TrackCard = ({ track, currentlyPlaying, activeTrack, data, i }) => {
  const dispatch = useDispatch();

  const handleClickPause = () => {
    dispatch(PauseandPlay(false));
  };

  const handleClickPlay = () => {
    dispatch(setActiveTrack({ track, data, i }));
    dispatch(PauseandPlay(true));
  };

  return (
    <div className="flex flex-col w-[230px] p-2 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-45 group">
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeTrack?.title === track.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
          <PausePlay
            currentlyPlaying={currentlyPlaying}
            activeTrack={activeTrack}
            track={track}
            handlePause={handleClickPause}
            handlePlay={handleClickPlay}
          />
        </div>
        <img alt="track_img" src={track.images?.coverart} className="w-full h-full rounded-lg" />
      </div>
      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/tracks/${track?.key}`}>
            {track.title}
          </Link>
        </p>
         
          <Link
            className="text-orange"
            to={
              track.artists
                ? `/tracks/${track?.artists[0]?.adamid}`
                : "/top-artists"
            }
          >
            {track.subtitle}
          </Link>
        </div>
      </div>
    
  );
};
export default TrackCard;
