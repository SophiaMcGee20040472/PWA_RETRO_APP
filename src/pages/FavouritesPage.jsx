import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { TrackCard } from "../components";

const FavouritesPage = () => {
  const favourites = useSelector((state) => state.favourites.favourites);

  console.log("FavouritesPage", favourites);
  useEffect(() => {}, [favourites]);

  if (favourites.length === 0) {
    return (
      <div className="flex flex-col">
        <h2 className="font-bold text-2xl text-orange text-left ml-4 mt-4 mb-8">
          Favourites
        </h2>
        <p className="text-center">You have no favourites yet.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-2xl text-orange text-left ml-4 mt-4 mb-8">
        Favourites
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {favourites.map((track) => {
          return <TrackCard key={track.id} track={track} />;
        })}
      </div>
    </div>
  );
};

export default FavouritesPage;
