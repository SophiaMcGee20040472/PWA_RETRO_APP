import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { TrackCard } from '../components';

const FavouritesPage = () => {
  const favourites = useSelector((state) => state.favourites.favourites);

  console.log('FavouritesPage', favourites);

  // useEffect hook is called when the `favourites` array changes
  useEffect(() => {}, [favourites]);

  // If the `favourites` array is empty, display a message
  if (favourites.length === 0) {
    return (
      <div className="flex flex-col">
        <h2 className="font-bold text-2xl text-orange text-left mt-4 mb-8">
          Favourites
        </h2>
        <p className="text-white text-xl">You have no favourites yet.</p>
      </div>
    );
  }

  // If there are items in the `favourites` array, display them using TrackCard component
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-2xl text-orange text-left ml- mt-4 mb-8">
        Favourites
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {favourites.map((track) => <TrackCard key={track.id} track={track} />)}
      </div>
    </div>
  );
};

export default FavouritesPage;
