import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useGetTrackRelatedQuery, useGetTrackDetailsQuery } from '../redux/service/ShazamAPI';
import { HeaderDetails, Loader, RelatedHits } from '../components';
import { setActiveTrack, pausePlay } from '../redux/features/playerChoices';

const SongInfo = () => {
  // Initialize React Hooks
  const dispatch = useDispatch();
  const { trackid, id: artistId } = useParams(); // Get URL parameters
  const { activeTrack, isPlaying } = useSelector((state) => state.player); // Get current state from Redux store
  const { data, isFetching: isFetchingRelatedHits } = useGetTrackRelatedQuery({ trackid }); // Fetch related songs
  const { data: trackData, isFetching: isFetchingSongInfo } = useGetTrackDetailsQuery({ trackid }); // Fetch song details

  // If either song or related songs are being fetched, show a loading screen
  if (isFetchingSongInfo && isFetchingRelatedHits) return <Loader title="Searching Song details" />;

  // Pause button click handler
  const handleClickPause = () => {
    dispatch(pausePlay(false)); // Dispatch pause action to Redux store
  };

  // Play button click handler
  const handleClickPlay = (track, i) => {
    dispatch(setActiveTrack({ track, data, i })); // Dispatch play action to Redux store
    dispatch(pausePlay(true)); // Dispatch pause action to Redux store
  };

  // Render song information and related songs
  return (
    <div className="flex flex-col">
      <HeaderDetails
        artistId={artistId} // Pass artist ID to HeaderDetails component
        trackData={trackData} // Pass song details to HeaderDetails component
      />

      <div className="mb-10 ml-2">
        <h2 className="text-white text-2xl font-bold">Lyrics:</h2>

        <div className="mt-1">
          {/* Render lyrics or no lyrics found message */}
          {trackData?.sections[1].type === 'LYRICS'
            ? trackData?.sections[1]?.text.map((line, i) => (
              <p key={`lyrics-${line}-${i}`} className="text-white text-base my-1">{line}</p>
            ))
            : (
              <p className="text-white text-base my-1">No lyrics found for this Song!</p>
            )}
        </div>
      </div>

      {/* Render related songs */}
      <RelatedHits
        data={data} // Pass related songs data to RelatedHits component
        artistId={artistId} // Pass artist ID to RelatedHits component
        isPlaying={isPlaying} // Pass current playing state to RelatedHits component
        activeTrack={activeTrack} // Pass current active track to RelatedHits component
        handleClickPause={handleClickPause} // Pass pause click handler to RelatedHits component
        handleClickPlay={handleClickPlay} // Pass play click handler to RelatedHits component
      />

    </div>
  );
};

export default SongInfo;
