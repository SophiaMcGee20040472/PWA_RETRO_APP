import React, { useState, useEffect } from 'react';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import Volume from '../components/Volume';
import Track1 from '../MP3s/Miley_Cyrus_Flowers.mp3';
import Track2 from '../MP3s/RAYE_Escapism_Lyrics_ft_070_Shake.mp3';
import Track3 from '../MP3s/Lady_Gaga_Bloody_Mary_Lyrics_.mp3';
import Track4 from '../MP3s/Oliver_Tree_Robin_Schulz_Miss_You_Official_Mu.mp3';
import Track5 from '../MP3s/Rihanna_Lift_Me_Up.mp3';

const Player1 = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const [tracks] = useState([
    { name: 'Flowers - Miley Cyrus', url: Track1 },
    { name: 'Escapism - Raye_07_Shake', url: Track2 },
    { name: 'Bloody Mary - Lady Gaga', url: Track3 },
    { name: 'Miss_You - Oliver_Tree_Robin', url: Track4 },
    { name: 'Lift_Me_Up - Rihanna', url: Track5 },
  ]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [audioElement, setAudioElement] = useState(
    new Audio(tracks[currentTrackIndex].url),
  );

  useEffect(() => {
    setAudioElement(new Audio(tracks[currentTrackIndex].url));
  }, [currentTrackIndex, tracks]);

  const handlePlay = () => {
    audioElement.play();
    setIsPlaying(true);
  };
  const handlePause = () => {
    audioElement.pause();
    setIsPlaying(false);
  };

  const handleNext = () => {
    if (currentTrackIndex < tracks.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1);
    } else {
      setCurrentTrackIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentTrackIndex > 0) {
      setCurrentTrackIndex(currentTrackIndex - 1);
    } else {
      setCurrentTrackIndex(tracks.length - 1);
    }
  };

  return (
    <footer className="fixed bottom-0 bg-black px-20 py-3 transition">
      <div className="container mx-auto text-center" />
      <div className="bg-black rounded-lg  flex items-left justify-center mr-32">
        <div className="flex items-center px-6 ml-7">
          <div className="text-orange font-bold text-bold px-7 ml-4">{tracks[currentTrackIndex].name}</div>
          <div className="fix bottom-0 flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
            <button className="bg-black text-white font-bold py-3 px-3 rounded" onClick={handlePrev}><MdSkipPrevious class="w-5 h-5" /></button>
            <button className="bg-black text-white font-bold py-3 px-3 rounded" onClick={isPlaying ? handlePause : handlePlay}>{isPlaying ? (<FaPauseCircle class="w-5 h-5" />) : (<FaPlayCircle class="w-5 h-5" />)}</button>
            <button className="bg-black text-white font-bold py-3 px-4 rounded" onClick={handleNext}><MdSkipNext class="w-5 h-5" /></button>
          </div>
          <Volume />
        </div>
      </div>
    </footer>
  );
};
export default Player1;
