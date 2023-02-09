import React, { useState, useEffect } from 'react';
import { SiSongoda } from 'react-icons/si';
import { useSelector, useDispatch } from 'react-redux';

import { PauseandPlay, nextTrack, prevTrack } from '../../redux/features/playerChoices';
import PlayerTemplate from './PlayerTemplate';
import Song from './Song';
import VolumeOptions from './VolumeOptions';


const MusicPlayer = () => {
  const { activeTrack, currentTracks, currentIndex, currentlyActive, currentlyPlaying } = useSelector((state) => state.player);
  const [duration, setDuration] = useState(0);
  const [seekingTime, setSeekingTime] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [volumeOption, setVolumeOption] = useState(0.3);
  const [replay, setReplay] = useState(false);
  const [shuffleTrack, setShuffleTrack] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentTracks.length) dispatch(pausePlay(true));
  }, [currentIndex]);

  const handlePausePlay = () => {
    if (!currentlyActive) return;

    if (currentlyPlaying) {
      dispatch(PauseandPlay(false));
    } else {
      dispatch(PauseandPlay(true));
    }
  };

  const handleNextTrack = () => {
    dispatch(PauseandPlay(false));

    if (!shuffleTrack) {
      dispatch(nextTrack((currentIndex + 1) % currentTracks.length));
    } else {
      dispatch(nextTrack(Math.floor(Math.random() * currentTracks.length)));
    }
  };

  const handlePrevTrack = () => {
    if (currentIndex === 0) {
      dispatch(prevTrack(currentTracks.length - 1));
    } else if (shuffleTrack) {
      dispatch(prevTrack(Math.floor(Math.random() * currentTracks.length)));
    } else {
      dispatch(prevTrack(currentIndex - 1));
    }
  };

  return (
    <div className="relative sm:px-12 px-8 w-full flex items-center justify-between">
      <SiSongoda currentlyPlaying={currentlyPlaying} currentlyActive={currentlyActive} activeTrack={activeTrack} />
      <div className="flex-1 flex flex-col items-center justify-center">
     {/*    <Controls
          currentlyPlaying={currentlyPlaying}
          currentlyActive={currentlyActive}
          replay={replay}
          setReplay={setReplay}
          shuffleTrack={shuffleTrack}
          setShuffleTrack={setShuffleTrack}
          currentTracks={currentTracks}
          handlePausePlay={handlePausePlay}
          handlePrevTrack={handlePrevTrack}
          handleNextTrack={handleNextTrack}
        />
        <Seekbar
          value={appTime}
          min="0"
          max={duration}
          onInput={(event) => setSeekingTime(event.target.value)}
          setSeekingTime={setSeekingTime}
          appTime={appTime}
        /> */}
        <PlayerTemplate
          activeTrack={activeTrack}
          volumeOption={volumeOption}
          currentlyPlaying={currentlyPlaying}
          seekingTime={seekingTime}
          replay={replay}
          currentIndex={currentIndex}
          onEnded={handleNextTrack}
          onUpdateTime={(event) => setAppTime(event.target.currentTime)}
          onDataLoaded={(event) => setDuration(event.target.duration)}
        />
      </div>
      <VolumeOptions value={volumeOption} min="0" max="1" onChange={(event) => setVolumeOption(event.target.value)} setVolumeOption={setVolumeOption} />
    </div>
  );
};

export default MusicPlayer;