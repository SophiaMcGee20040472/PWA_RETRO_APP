import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useGetTrackRelatedQuery, useGetTrackDetailsQuery } from '../redux/service/ShazamAPI';
import { HeaderDetails, Loader, RelatedHits } from '../components';
import { setActiveTrack, pausePlay } from '../redux/features/playerChoices';

const SongInfo = () => {
  const dispatch = useDispatch();
  const { trackid, id: artistId } = useParams();
  const { activeTrack, isPlaying } = useSelector((state) => state.player);

  const { data, isFetching: isFetchingRelatedHits } = useGetTrackRelatedQuery({ trackid });
  const { data: trackData, isFetching: isFetchingSongInfo } = useGetTrackDetailsQuery({ trackid });

  if (isFetchingSongInfo && isFetchingRelatedHits) return <Loader title="Searching Song details" />;

  // eslint-disable-next-line no-console
  console.log(trackData);
  const handleClickPause = () => {
    dispatch(pausePlay(false));
  };

  const handleClickPlay = (track, i) => {
    dispatch(setActiveTrack({ track, data, i }));
    dispatch(pausePlay(true));
  };

  return (
    <div className="flex flex-col">
      <HeaderDetails
        artistId={artistId}
        trackData={trackData}
      />

      <div className="mb-10 ml-2">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>

        <div className="mt-1">
          {trackData?.sections[1].type === 'LYRICS'
            ? trackData?.sections[1]?.text.map((line, i) => (
              <p key={`lyrics-${line}-${i}`} className="text-white text-base my-1">{line}</p>
            ))
            : (
              <p className="text-white text-base my-1">No lyrics found for this Song!</p>
            )}
        </div>
      </div>

      <RelatedHits
        data={data}
        artistId={artistId}
        isPlaying={isPlaying}
        activeTrack={activeTrack}
        handleClickPause={handleClickPause}
        handleClickPlay={handleClickPlay}
      />

    </div>
  );
};

export default SongInfo;
