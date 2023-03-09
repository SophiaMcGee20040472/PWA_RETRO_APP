import React from 'react';
import { useSelector } from 'react-redux';
import { TrackCard } from '../components';

const FavouritesPage = () => {
  const favourites = useSelector((state) => state.favourites.favourites);
  console.log(favourites, 'HELLO');

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {favourites.map((track) => (
        <TrackCard key={track.id} track={track} />
      ))}
    </div>
  );
};

export default FavouritesPage;
