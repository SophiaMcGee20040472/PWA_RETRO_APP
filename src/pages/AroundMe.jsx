import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { TrackCard, Error, Loader } from '../components';
import { useGetTracksByLocationQuery } from '../redux/service/ShazamAPI';

const LocationTracks = () => {
  const [country, setLocation] = useState('');
  const [loading, setLoading] = useState(true);
  const { activeTrack, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTracksByLocationQuery(country);

  /* Using the useEffect hook to make an HTTP request to an external API to get the user's country based on their IP address.
Storing the retrieved country in the country state variable using the setLocation function.
Logging any errors to the console.
Setting the loading state variable to false. */
  useEffect(() => {
    axios
      .get(
        `https://geo.ipify.org/api/v2/country?apiKey=${
          import.meta.env.VITE_GEO_API_KEY
        }`,
      )
      .then((res) => setLocation(res?.data?.location.country))
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [country]);
  /* Checking if isFetching and loading are both true, and if so, displaying a Loader component.
Checking if error is not null and country is not an empty string, and if so, displaying an Error component. */
  if (isFetching && loading) { return <Loader title="Loading Tracks around you..." />; }

  if (error && country !== '') return <Error />;
  /* Rendering a list of TrackCard components using the data state variable and passing in the required props such as key, track, isPlaying, activeTrack, and i. */
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-2xl text-orange text-left mt-4 mb-10">
        Around you <span className="font-semibold">{country}</span>
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((track, i) => (
          <TrackCard
            key={track.key}
            track={track}
            isPlaying={isPlaying}
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
