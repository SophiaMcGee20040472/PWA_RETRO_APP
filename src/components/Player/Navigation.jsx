import React from "react";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import {
  BsArrowRepeat,
  BsFillPauseFill,
  BsFillPlayFill,
  BsShuffle,
} from "react-icons/bs";

const Navigation = ({
  currentlyPlaying,
  replay,
  setReplay,
  shuffleTrack,
  setShuffleTrack,
  currentTracks,
  handlePausePlay,
  handlePrevTrack,
  handleNextTrack,
}) => (
  <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
    <BsArrowRepeat
      size={20}
      color={replay ? "grape" : "white"}
      onClick={() => setReplay((prev) => !prev)}
      className="hidden sm:block cursor-pointer"
    />
    {currentTracks?.length && (
      <MdSkipPrevious
        size={30}
        color="#fbbf24"
        className="cursor-pointer"
        onClick={handlePrevTrack}
      />
    )}
    {currentlyPlaying ? (
      <BsFillPauseFill
        size={45}
        color="#fbbf24"
        onClick={handlePausePlay}
        className="cursor-pointer"
      />
    ) : (
      <BsFillPlayFill
        size={45}
        color="#fbbf24"
        onClick={handlePausePlay}
        className="cursor-pointer"
      />
    )}
    {currentTracks?.length && (
      <MdSkipNext
        size={30}
        color="#fbbf24"
        className="cursor-pointer"
        onClick={handleNextTrack}
      />
    )}
    <BsShuffle
      size={21}
      color={shuffleTrack ? "grape" : "white"}
      onClick={() => setShuffleTrack((prev) => !prev)}
      className="hidden sm:block cursor-pointer"
    />
  </div>
);

export default Navigation;
