import React from 'react';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs';

const Navigations = ({ isPlaying, repeat, setRepeat, shuffle, setShuffle, currentTracks, handlePausePlay, handlePrevTrack, handleNextTrack }) => (
  <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
    <BsArrowRepeat size={20} color={repeat ? 'red' : 'white'} onClick={() => setRepeat((prev) => !prev)} className="hidden sm:block cursor-pointer" />
    {currentTracks?.length && <MdSkipPrevious size={30} color="#FFF" className="cursor-pointer" onClick={handlePrevTrack} />}
    {isPlaying ? (
      <BsFillPauseFill size={45} color="#FFF" onClick={handlePausePlay} className="cursor-pointer" />
    ) : (
      <BsFillPlayFill size={45} color="#FFF" onClick={handlePausePlay} className="cursor-pointer" />
    )}
    {currentTracks?.length && <MdSkipNext size={30} color="#FFF" className="cursor-pointer" onClick={handleNextTrack} />}
    <BsShuffle size={20} color={shuffle ? 'red' : 'white'} onClick={() => setShuffle((prev) => !prev)} className="hidden sm:block cursor-pointer" />
  </div>
);

export default Navigations;
