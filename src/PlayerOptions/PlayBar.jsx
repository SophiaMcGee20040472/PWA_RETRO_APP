import { useState, useEffect } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import '../styles.css';
import Track1 from '../MP3s/Miley_Cyrus_Flowers.mp3';
import Track2 from '../MP3s/Lady_Gaga_Bloody_Mary_Lyrics_.mp3';
import Track3 from '../MP3s/Oliver_Tree_Robin_Schulz_Miss_You_Official_Mu.mp3';
import Track4 from '../MP3s/RAYE_Escapism_Lyrics_ft_070_Shake.mp3';
import Track5 from '../MP3s/Rihanna_Lift_Me_Up.mp3';

function Playbar() {
  const [track] = useState([
    { name: 'Track 1', url: Track1 },
    { name: 'Track 2', url: Track2 },
    { name: 'Track 3', url: Track3 },
    { name: 'Track 4', url: Track4 },
    { name: 'Track 5', url: Track5 },
  ]);
  const [currentTrack] = useState(0);
  const [audioElement, setAudioElement] = useState(
    new Audio(track[currentTrack].url),
  );
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

  return (
    <div>
      <button
        className="bg-orange hover:bg-grape text-white font-bold py-1 px-2 rounded-full mr-4"
        onClick={isPlaying ? handlePause : handlePlay}
        style={{ height: '30px', width: '30px' }}
      >
        {isPlaying ? <FaPause size={16} /> : <FaPlay size={16} />}
      </button>
    </div>
  );
}

export default Playbar;
