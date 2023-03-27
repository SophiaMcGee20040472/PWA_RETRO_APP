import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavourites,
  removeFromFavourites,
} from "../redux/features/favouriteChoice";

function AddToFavouritesButton({ track }) {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.favourites);
  const userId = useSelector((state) => state.user.userId);

  const [isAddedToFavourites, setIsAddedToFavourites] = useState(
    favourites.some((fav) => {
      fav.title === track.title;
    })
  );

  useEffect(() => {
    setIsAddedToFavourites(favourites.some((fav) => fav.title === track.title));
  }, [favourites, track]);

  const handleAddToFavourites = () => {
    if (!userId) {
      alert("Please login to add the track to your favourites.");
      return;
    }
    axios
      .post("http://laptop-bt76t6rn:4000/api/users/add-to-favourites", {
        track,
        userId,
      })
      .then((response) => {
        dispatch(addToFavourites(response.data)); // dispatch addToFavourites action
        setIsAddedToFavourites(true);
      })
      .catch((error) => console.log(error));
  };

  const handleRemoveFromFavourites = async () => {
    axios
      .post("http://laptop-bt76t6rn:4000/api/users/remove-from-favourites", {
        trackId: track.key,
        userId,
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch(removeFromFavourites(track.key)); // dispatch addToFavourites action
        }
      });
  };

  return (
    <div>
      {isAddedToFavourites ? (
        <button
          className={
            isAddedToFavourites
              ? "bg-red-500 text-white rounded-lg px-8 py-1"
              : "bg-grape text-white rounded-lg px-4 py-1"
          }
          onClick={() => {
            isAddedToFavourites
              ? handleRemoveFromFavourites()
              : handleAddToFavourites();
          }}
        >
          {isAddedToFavourites ? "Remove Favourite" : "Add Favourite"}
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

export default AddToFavouritesButton;
