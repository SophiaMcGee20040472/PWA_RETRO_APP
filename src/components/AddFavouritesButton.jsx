import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavourites,
  removeFromFavourites,
} from '../redux/features/favouriteChoice';

function AddToFavouritesButton({ track }) {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.favourites);
  const [isAddedToFavourites, setIsAddedToFavourites] = useState(
    favourites.some((fav) => fav.title === track.title),
  );

  const handleAddToFavourites = () => {
    dispatch(addToFavourites(track));
    setIsAddedToFavourites(true);
    console.log(track.title, 'clicked');
  };

  const handleRemoveFromFavourites = () => {
    dispatch(removeFromFavourites(track));
    setIsAddedToFavourites(false);
  };

  return (
    <div>
      {isAddedToFavourites ? (
        <button
          className="bg-red-500 text-white rounded-lg  px-4 py-2"
          onClick={handleRemoveFromFavourites}
        >
          Delete
        </button>
      ) : (
        <button
          className="bg-grape text-white rounded-lg px-4 py-2"
          onClick={handleAddToFavourites}
        >
          Add to Favourites
        </button>
      )}
    </div>
  );
}

export default AddToFavouritesButton;
