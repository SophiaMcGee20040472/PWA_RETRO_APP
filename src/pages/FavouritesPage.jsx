import React from 'react';
import { useSelector } from 'react-redux';
import { TrackCard } from '../components';

const FavouritesPage = () => {
  const favourites = useSelector((state) => state.favourites.favourites);
  console.log(favourites, 'my favourites');

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-orange text-left ml-4 mt-4 mb-8">
        Favourites
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {favourites.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </div>
    </div>
  );
};

export default FavouritesPage;
