import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { nextTrack, prevTrack, pausePlay } from '../../redux/features/playerChoices';
import Controls from './Navigations';
import Seekbar from './Seekbar';
import Track from './Track';
import Volume from './Volume';
import Player from './Player';

const MusicPlayer = () => {
  const { activeTrack, currentTracks, currentIndex, currentlyActive, isPlaying } = useSelector((state) => state.player);
  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentTracks.length) dispatch(pausePlay(true));
  }, [currentIndex]);

  const handlePlayPause = () => {
    if (!currentlyActive) return;

    if (isPlaying) {
      dispatch(pausePlay(true));
    } else {
      dispatch(pausePlay(false));
    }
  };

  const handleNextTrack = () => {
    dispatch(pausePlay(false));

    if (!shuffle) {
      dispatch(nextTrack((currentIndex + 1) % currentTracks.length));
    } else {
      dispatch(nextTrack(Math.floor(Math.random() * currentTracks.length)));
    }
  };

  const handlePrevTrack = () => {
    if (currentIndex === 0) {
      dispatch(prevTrack(currentTracks.length - 1));
    } else if (shuffle) {
      dispatch(prevTrack(Math.floor(Math.random() * currentTracks.length)));
    } else {
      dispatch(prevTrack(currentIndex - 1));
    }
  };

  return (
    <div className="relative sm:px-12 px-8 w-full flex items-center justify-between">
      <Track isPlaying={isPlaying} isActive={currentlyActive} activeTrack={activeTrack} />
      <div className="flex-1 flex flex-col items-center justify-center">
        <Controls
          isPlaying={isPlaying}
          currentlyActive={currentlyActive}
          repeat={repeat}
          setRepeat={setRepeat}
          shuffle={shuffle}
          setShuffle={setShuffle}
          currentTracks={currentTracks}
          handlePlayPause={handlePlayPause}
          handlePrevTrack={handlePrevTrack}
          handleNextTrack={handleNextTrack}
        />
        <Seekbar
          value={appTime}
          min="0"
          max={duration}
          onInput={(event) => setSeekTime(event.target.value)}
          setSeekTime={setSeekTime}
          appTime={appTime}
        />
        <Player
          activeTrack={activeTrack}
          volume={volume}
          isPlaying={isPlaying}
          seekTime={seekTime}
          repeat={repeat}
          currentIndex={currentIndex}
          onEnded={handleNextTrack}
          onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
          onLoadedData={(event) => setDuration(event.target.duration)}
        />
      </div>
      <Volume value={volume} min="0" max="1" onChange={(event) => setVolume(event.target.value)} setVolume={setVolume} />
    </div>
  );
};

export default MusicPlayer;
