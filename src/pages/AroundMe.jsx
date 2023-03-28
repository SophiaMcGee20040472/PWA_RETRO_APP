import React, { useState, useEffect } from 'react'; // Importing necessary libraries
import axios from 'axios'; // Importing Axios library
import { useSelector } from 'react-redux'; // Importing 'useSelector' hook from Redux library

import { TrackCard, Error, Loader } from '../components'; // Importing components from a 'components' folder
import { useGetTracksByLocationQuery } from '../redux/service/ShazamAPI'; // Importing a hook function from a custom Redux API service

const LocationTracks = () => {
  const [country, setLocation] = useState(''); // Initializing 'country' state variable as an empty string
  const [loading, setLoading] = useState(true); // Initializing 'loading' state variable as 'true'
  const { activeTrack, isPlaying } = useSelector((state) => state.player); // Retrieving data from the Redux store using the 'useSelector' hook
  const { data, isFetching, error } = useGetTracksByLocationQuery(country); // Fetching data from a custom API service with the 'country' state variable as a parameter

  useEffect(() => { // Using the 'useEffect' hook to make a GET request to an external API to get the country location of the user
    axios
      .get(
        `https://geo.ipify.org/api/v2/country?apiKey=${
          import.meta.env.VITE_GEO_API_KEY
        }`,
      )
      .then((res) => setLocation(res?.data?.location.country))
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err))
      .finally(() => setLoading(false)); // Set 'loading' state variable to 'false' after the request is completed
  }, [country]);

  if (isFetching && loading) { return <Loader title="Loading Tracks around you..." />; } // If both 'isFetching' and 'loading' are 'true', display a loader component

  if (error && country !== '') return <Error />; // If there is an error in the API call and 'country' state variable is not empty, display an error component

  return ( // Display a list of tracks based on the 'data' state variable
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

export default LocationTracks; // Exporting 'LocationTracks' component for use in other files
