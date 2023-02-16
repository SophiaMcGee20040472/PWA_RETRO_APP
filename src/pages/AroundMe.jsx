import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { TrackCard, Error, Loader,  } from '../components';
import { useGetTracksByLocationQuery } from '../redux/service/ShazamAPI';

const LocationTracks = () => {
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(true);
  const { activeTrack, currentlyPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTracksByLocationQuery(location);

  useEffect(() => {
    axios
      .get(`https://geo.ipify.org/api/v2/country?apiKey=${import.meta.env.VITE_GEO_API_KEY}`)
      .then((res) => setLocation(res?.data?.location.location))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [location]);

  if (isFetching && loading) return <Loader title="Loading Tracks around you..." />;

  if (error && location !== '') return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Around you <span className="font-black">{location}</span></h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((track, i) => (
          <TrackCard
            key={track.key}
            track={track}
            currentlyPlaying={currentlyPlaying}
            activeTrack={activeTrack}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default LocationTracks;
