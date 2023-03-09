import React, { useState, useRef } from 'react';
import '../styles.css';
import audioFile from '../MP3s/Miley_Cyrus_Flowers.mp3';
import PausePlay from '../components/PausePlay';

function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const skip = (time) => {
    audioRef.current.currentTime += time;
  };

  return (
    <div className="player">
      <button onClick={() => skip(-10)}>{'<<'}</button>
      <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
      <button onClick={() => skip(10)}>{'>>'}</button>
      <audio src={audioFile} ref={audioRef} />
    </div>
  );
}

export default Player;
