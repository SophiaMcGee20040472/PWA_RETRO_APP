import React, { useState, useEffect } from 'react'; // Import React and React Hooks
import axios from 'axios'; // Import Axios for HTTP requests
import { useDispatch, useSelector } from 'react-redux'; // Import React-Redux Hooks
import {
  addToFavourites,
  removeFromFavourites,
} from '../redux/features/favouriteChoice'; // Import Redux actions

function AddToFavouritesButton({ track }) { // Define component
  const dispatch = useDispatch(); // Retrieve Redux store dispatch function
  const favourites = useSelector((state) => state.favourites.favourites); // Retrieve user's favourites from Redux store
  const userId = useSelector((state) => state.user.userId); // Retrieve user ID from Redux store

  // Check if the current track is already added to favourites
  const [isAddedToFavourites, setIsAddedToFavourites] = useState(
    favourites.some((fav) => {
      fav.title === track.title;
    }),
  );

  // Update isAddedToFavourites state when favourites or track props change
  useEffect(() => {
    setIsAddedToFavourites(favourites.some((fav) => fav.title === track.title));
  }, [favourites, track]);

  // Handle adding track to favourites
  const handleAddToFavourites = () => {
    if (!userId) {
      alert('Please login to add the track to your favourites.'); // Alert user if not logged in
      return;
    }
    axios
      .post('http://laptop-bt76t6rn:4000/api/users/add-to-favourites', {
        track,
        userId,
      })
      .then((response) => {
        dispatch(addToFavourites(response.data)); // Dispatch addToFavourites action with response data
        setIsAddedToFavourites(true); // Update isAddedToFavourites state
      })
      .catch((error) => console.log(error)); // Log any errors
  };

  // Handle removing track from favourites
  const handleRemoveFromFavourites = async () => {
    axios
      .post('http://laptop-bt76t6rn:4000/api/users/remove-from-favourites', {
        trackId: track.key,
        userId,
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch(removeFromFavourites(track.key)); // Dispatch removeFromFavourites action with track key
        }
      });
  };

  return (
    <div>
      {isAddedToFavourites ? (
        <button
          className={
            isAddedToFavourites
              ? 'bg-rose-600 text-white rounded-lg px-8 py-1'
              : 'bg-grape text-white rounded-lg px-4 py-1'
          }
          onClick={() => {
            isAddedToFavourites
              ? handleRemoveFromFavourites()
              : handleAddToFavourites();
          }}
        >
          {isAddedToFavourites ? 'Remove Favourite' : 'Add Favourite'}
        </button>
      ) : (
        <button
          className="bg-grape text-white rounded-lg px-4 py-1"
          onClick={() => handleAddToFavourites()}
        >
          Add Favourite
        </button>
      )}
    </div>
  );
}

export default AddToFavouritesButton; // Export component for use in other files
