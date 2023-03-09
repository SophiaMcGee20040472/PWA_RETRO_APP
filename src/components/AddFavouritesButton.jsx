import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToFavourites } from '../redux/features/favouriteChoice';

function AddToFavouritesButton({ track }) {
  const dispatch = useDispatch();
  const [isDisabled, setIsDisabled] = useState(false);

  const handleAddToFavourites = () => {
    dispatch(addToFavourites(track));
    setIsDisabled(true);
    console.log(track.title, 'clicked');
  };

  return (
    <button
      className={`bg-grape text-white ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={handleAddToFavourites}
      disabled={isDisabled}
    >
      {isDisabled ? 'Added to Favourites' : 'Add to Favourites'}
    </button>
  );
}

export default AddToFavouritesButton;

