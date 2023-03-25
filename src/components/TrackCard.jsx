import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React from 'react';
import Player from '../PlayerOptions/PlayBar';
import AddToFavouritesButton from './AddFavouritesButton';
import { removeFromFavourites } from '../redux/features/favouriteChoice';

const TrackCard = ({ track, activeTrack, showDeleteButton, onDelete }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeFromFavourites(track));
    onDelete(track);
  };

  return (
    <div className="flex flex-col w-[150px] p-2 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-36 group">
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeTrack?.title === track.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
          <Player />
        </div>
        <img alt="track_img" src={track.images?.coverart} className="w-full h-full rounded-lg" />
      </div>
      <div className="mt-2 flex flex-col">
        <p className="font-semibold text-sm text-white truncate">
          <Link to={`/tracks/${track?.key}`}>
            {track.title}
          </Link>
        </p>
        <p className="text-xs truncate text-gray-300 mt-1">
          <Link to={track.artists ? `/artists/${track?.artists[0]?.adamid}` : '/top-artists'}>
            {track.subtitle}
          </Link>
        </p>
        <br />
        <div className="flex items-center justify-between">
          <AddToFavouritesButton track={track} />
          {showDeleteButton && <button className="text-xs text-red-600" onClick={handleDelete}>Delete from Favourites</button>}
        </div>
      </div>
    </div>

  );
};

export default TrackCard;
