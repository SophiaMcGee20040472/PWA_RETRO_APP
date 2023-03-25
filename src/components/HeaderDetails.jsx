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
      .replace('{w}', '500')
      .replace('{h}', '1000')
      : trackData?.images?.coverart
  }
        className="sm:w-24 w-16 sm:h-24 h-16 ml-2 py-3"
      />

      <div className="ml-3">
        <p className="font-bold sm:text-base text-sm text-orange">
          {artistId ? artistData?.attributes?.name : trackData?.title}
        </p>
        {!artistId && (
          <Link to={`/artists/${trackData?.artists[0]?.adamid}`}>
            <p className="text-base text-white">{trackData?.subtitle}</p>
          </Link>
        )}

        <p className="text-sm font-bold text-white">
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
