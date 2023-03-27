import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { HeaderDetails, Error, Loader, RelatedHits } from '../components';

import { useGetMusicianDetailsQuery } from '../redux/service/ShazamAPI';

const ArtistInfo = () => {
  const { id: artistId } = useParams();
  const { activeTrack, isPlaying } = useSelector((state) => state.player);
  const { data: artistData, isFetching: isFetchingMusicianInfo, error } = useGetMusicianDetailsQuery(artistId);

  if (isFetchingMusicianInfo) return <Loader title="Loading artist details..." />;

  if (error) return <Error />;

  // eslint-disable-next-line no-console

  return (
    <div className="flex flex-col">
      <HeaderDetails
        artistId={artistId}
        artistData={artistData?.data[0]}
      />
      <RelatedHits
        data={artistData?.data[0].views['top-songs']?.data}
        artistId={artistId}
        isPlaying={isPlaying}
        activeTrack={activeTrack}
      />
    </div>
  );
};

export default ArtistInfo;
