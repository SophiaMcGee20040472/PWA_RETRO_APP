import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React from 'react';
import PausePlay from './PausePlay';
import Player from '../PlayerOptions/PlayBar';
import { pausePlay, setActiveTrack } from '../redux/features/playerChoices';
import AddToFavouritesButton from './AddFavouritesButton';

const TrackCard = ({ track, isPlaying, activeTrack, data, i }) => {
  const dispatch = useDispatch();

  const handleClickPause = () => {
    dispatch(pausePlay(false));
  };

  const handleClickPlay = () => {
    dispatch(setActiveTrack({ track, data, i }));
    dispatch(pausePlay(true));
  };

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeTrack?.title === track.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
          <Player />
          <PausePlay
            isPlaying={isPlaying}
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
        <p className="text-sm truncate text-gray-300 mt-1">
          <Link to={track.artists ? `/artists/${track?.artists[0]?.adamid}` : '/top-artists'}>
            {track.subtitle}
          </Link>
        </p>
        <br />
        <AddToFavouritesButton track={track} />
      </div>
    </div>
  );
};
export default TrackCard;
