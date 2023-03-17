import { useState, useEffect } from 'react';
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from 'react-icons/fa';
import '../styles.css';
import Track1 from '../MP3s/Miley_Cyrus_Flowers.mp3';
import Track2 from '../MP3s/RAYE_Escapism_Lyrics_ft_070_Shake.mp3';

function Playbar() {
  const [track, setTrack] = useState([
    { name: 'Track 1', url: Track1 },
    { name: 'Track 2', url: Track2 },
    { name: 'Track 3', url: Track1 },
  ]);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [audioElement, setAudioElement] = useState(new Audio(track[currentTrack].url));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setAudioElement(new Audio(track[currentTrack].url));
  }, [currentTrack, track]);

  const handlePlay = () => {
    audioElement.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    audioElement.pause();
    setIsPlaying(false);
  };

  const handleNext = () => {
    if (currentTrack < track.length - 1) {
      setCurrentTrack(currentTrack + 1);
    } else {
      setCurrentTrack(0);
    }
    setIsPlaying(false);
  };

  const handlePrev = () => {
    if (currentTrack > 0) {
      setCurrentTrack(currentTrack - 1);
    } else {
      setCurrentTrack(track.length - 1);
    }
    setIsPlaying(false);
  };

  return (
    <div>
      <div className="fixed bottom-0 w-full bg-gray-900 z-50 p-2 flex justify-center items-center" />
      <button className="bg-orange hover:bg-grape text-white font-bold py-2 px-4 rounded-full mr-2" onClick={handlePrev }>
        <FaStepBackward />
      </button>
      <button className="bg-orange hover:bg-grape text-white font-bold py-2 px-4 rounded-full mr-2" onClick={isPlaying ? handlePause : handlePlay}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <button className="bg-orange hover:bg-grape text-white font-bold py-2 px-4 rounded-full mr-2" onClick={handleNext}>
        <FaStepForward />
      </button>
    </div>
  );
}

export default Playbar;
