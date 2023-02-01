import React from 'react';
import { Link } from 'react-router-dom';

const HeaderDetails = ({ artistId, artistData, trackData }) => (
  <div className="relative w-full flex flex-col">
    <div className="w-full to-black sm:h-48 h-28" />
    <div className="absolute inset-0 flex items-center">
      <img
        alt="Photo"
        src={
          artistId ? artistData?.attributes?.artwork?.url
            .replace('{w}', '400')
            .replace('{h}', '400')
            : trackData?.images?.coverart
}
        className="sm:w-48 w-28 sm:h-48 h-28 square-full ml-2 py-3object-cover border-2 shadow-xl shadow-black"
      />

      <div className="ml-9">
        <p className="font-bold sm:text-2xl text-xl text-orange">
          {artistId ? artistData?.attributes?.name : trackData?.title}
        </p>
        {!artistId && (
          <Link to={`/artists/${trackData?.artists[0]?.adamid}`}>
            <p className="text-base text-white mt-1">{trackData?.subtitle}</p>
          </Link>
        )}

        <p className="text-base font-bold  text-white mt-1">
          {artistId
            ? artistData?.attributes?.genreNames[0]
            : trackData?.genres?.primary}
        </p>
      </div>
    </div>

    <div className="w-full sm:h-48 h-28" />
  </div>
);

export default HeaderDetails;

