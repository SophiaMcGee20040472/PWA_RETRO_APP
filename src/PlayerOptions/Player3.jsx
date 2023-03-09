import { useState } from 'react';

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRepeatOn, setIsRepeatOn] = useState(false);

  function handlePlayPauseClick() {
    setIsPlaying(!isPlaying);
  }

  function handleSkipClick() {
    // handle skip functionality
  }

  function handleRepeatClick() {
    setIsRepeatOn(!isRepeatOn);
  }

  return (
    <div className="bg-gray-100 rounded-lg p-4">
      <div className="flex items-center">
        <button
          className="bg-gray-500 text-white rounded-full p-3 mr-4"
          onClick={handlePlayPauseClick}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button
          className="bg-gray-500 text-white rounded-full p-3 mr-4"
          onClick={handleSkipClick}
        >
          Skip
        </button>
        <button
          className={`bg-gray-500 text-white rounded-full p-3 ${
            isRepeatOn ? 'bg-green-500' : ''
          }`}
          onClick={handleRepeatClick}
        >
          Repeat
        </button>
      </div>
      {/* Add more UI elements for the music player here */}
    </div>
  );
}

export default MusicPlayer;

