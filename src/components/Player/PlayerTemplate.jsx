/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useEffect } from 'react';

const PlayerTemplate = (/* { activeTrack, currentlyPlaying, volumeOption, seekingTime, onEnd, onUpdateTime, onDataLoaded, replay } */) => {
    return<div>hello</div>
 /*  const ref = useRef(null);
  // eslint-disable-next-line no-unused-expressions
  if (ref.current) {
    if (currentlyPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  useEffect(() => {
    ref.current.volumeOption = volumeOption;
  }, [volumeOption]);
  useEffect(() => { 
    ref.current.currentTime = seekingTime;
  }, [seekingTime]);

  return (
    <audio
      src={activeTrack?.hub?.actions[1]?.uri}
      ref={ref}
      loop={replay}
      onEnd={onEnd}
      onUpdateTime={onUpdateTime}
      onDataLoaded={onDataLoaded}
    />
  );
}; */
}
export default PlayerTemplate;