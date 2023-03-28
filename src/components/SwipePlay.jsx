/* eslint-disable import/no-unresolved */ // Disables eslint warning for unresolved imports
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper'; // Imports from Swiper library

import { pausePlay, setActiveTrack } from '../redux/features/playerChoices'; // Imports actions from Redux store
import { useGetTopHitsQuery } from '../redux/service/ShazamAPI'; // Imports custom hook from Redux service

import 'swiper/css'; // Imports Swiper CSS
import 'swiper/css/free-mode'; // Imports Swiper CSS for free mode
import Playbar from '../PlayerOptions/PlayBar'; // Imports Playbar component

// Component for rendering individual top hits
const TopHitsCard = ({ track, i, activeTrack }) => (
  <div
    className={`w-full flex flex-row items-center hover:bg-[#4c426e] ${
      activeTrack?.title === track?.title ? 'bg-[#4c426e]' : 'bg-transparent'
    } py-1 p-2 rounded-lg cursor-pointer mb-1`}
  >
    <h3 className="font-bold text-sm text-orange mr-2">{i + 1}.</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img
        className="w-16 h-16 rounded-lg"
        src={track?.images?.coverart}
        alt={track?.title}
      />
      <div className="flex-1 flex flex-col justify-center mx-2">
        <Link to={`/tracks/${track.key}`}>
          <p className="text-lg font-bold text-orange">{track?.title}</p>
        </Link>
        <Link to={`/tracks/${track?.artists[0].adamid}`}>
          <p className="text-sm text-gray-300 mt-1">{track?.subtitle}</p>
        </Link>
      </div>
    </div>
    <Playbar />
  </div>
);

// Component for rendering top hits and top artists using Swiper library
const SwipePlay = () => {
  const dispatch = useDispatch();
  const { activeTrack, isPlaying } = useSelector((state) => state.player);
  const { data } = useGetTopHitsQuery(); // Uses custom hook to get top hits data from API
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  });

  const swipePlays = data?.slice(0, 5);

  const handleClickPause = () => {
    dispatch(pausePlay(false)); // Dispatches pausePlay action with false value to pause audio playback
  };

  const handleClickPlay = (track, i) => {
    dispatch(setActiveTrack({ track, data, i })); // Dispatches setActiveTrack action with track data and index to update Redux store
    dispatch(pausePlay(true)); // Dispatches pausePlay action with true value to play audio playback
  };

  // Render the component
  return (
    // The main container for the component, using tailwind CSS classes
    <div
      ref={divRef}
      className="ml-5 xl:ml-1 xl:mb-0 mb-6  flex-1 xl:max-w-[400px] max-w-full flex flex-col"
    >
      {/* The top charts section */}
      <div className="w-full flex flex-col">
        {/* The header section for the top charts */}
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-orange font-semibold text-2xl mt-8 ml-4">
            Top Charts
          </h2>
          <Link to="/top-hits">
            <p className="text-orange text-base cursor-pointer mt-8 mr-5 ml-4">
              See more
            </p>
          </Link>
        </div>
        {/* The container for the top chart cards */}
        <div className="w-full flex flex-col mt-8 ml-1">
          {swipePlays?.map((track, i) => (
            <TopHitsCard
              key={track.key}
              track={track}
              i={i}
              isPlaying={isPlaying}
              activeTrack={activeTrack}
              handleClickPause={handleClickPause}
              handleClickPlay={() => handleClickPlay(track, i)}
            />
          ))}
        </div>
      </div>
      {/* The top artists section */}
      <div className="w-full flex flex-col mt-1">
        {/* The header section for the top artists */}
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-orange font-semibold text-2xl mt-8 ml-4">
            Top Artists
          </h2>
          <Link to="/top-artists">
            <p className="text-orange text-base cursor-pointer mt-8 mr-4">
              See more
            </p>
          </Link>
        </div>

        {/* The Swiper component for the top artist cards */}
        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="mt-4"
        >
          {swipePlays?.slice(0, 5).map((artist) => (
            <SwiperSlide
              key={artist?.key}
              style={{ width: '13%', height: 'auto' }}
              className="shadow-lg rounded-full animate-slideright ml-3 mt-3 mb-11 "
            >
              {/* The link to the artist's page */}
              <Link to={`/artists/${artist?.artists[0].adamid}`}>
                {/* The image of the artist */}
                <img
                  src={artist?.images?.background}
                  alt="Name"
                  className="rounded-full w-full object-cover"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

// Export the component
export default SwipePlay;
