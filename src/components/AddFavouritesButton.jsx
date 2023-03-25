import React, { useState } from 'react';
import axios from 'axios';
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

  const handleAddToFavourites = async () => {
    dispatch(addToFavourites(track));
    setIsAddedToFavourites(true);

    try {
      await axios.post('/api/favourites', { track });
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemoveFromFavourites = async () => {
    dispatch(removeFromFavourites(track));
    setIsAddedToFavourites(false);

    try {
      await axios.delete(`/api/favourites/${track.id}`);
    } catch (error) {
      console.error(error);
    }
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
          className="bg-grape text-white rounded-lg px-2 py-2"
          onClick={handleAddToFavourites}
        >
          Add Favourite
        </button>
      )}
    </div>
  );
}

export default AddToFavouritesButton;
