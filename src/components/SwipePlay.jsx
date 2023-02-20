/* eslint-disable import/no-unresolved */
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';

import PausePlay from './PausePlay';
import { pausePlay, setActiveTrack } from '../redux/features/playerChoices';
import { useGetTopHitsQuery } from '../redux/service/ShazamAPI';

import 'swiper/css';
import 'swiper/css/free-mode';

const TopHitsCard = ({ track, i, isPlaying, activeTrack, handleClickPause, handleClickPlay }) => (
  <div className={`w-full flex flex-row items-center hover:bg-[#4c426e] ${activeTrack?.title === track?.title ? 'bg-[#4c426e]' : 'bg-transparent'} py-2 p-4 rounded-lg cursor-pointer mb-2`}>
    <h3 className="font-bold text-base text-white mr-3">{i + 1}.</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img className="w-20 h-20 rounded-lg" src={track?.images?.coverart} alt={track?.title} />
      <div className="flex-1 flex flex-col justify-center mx-3">
        <Link to={`/tracks/${track.key}`}>
          <p className="text-xl font-bold text-white">
            {track?.title}
          </p>
        </Link>
        <Link to={`/tracks/${track?.artists[0].adamid}`}>
          <p className="text-base text-gray-300 mt-1">
            {track?.subtitle}
          </p>
        </Link>
      </div>
    </div>
    <PausePlay
      isPlaying={isPlaying}
      activeTrack={activeTrack}
      track={track}
      handlePause={handleClickPause}
      handlePlay={handleClickPlay}
    />
  </div>
);

const SwipePlay = () => {
  const dispatch = useDispatch();
  const { activeTrack, isPlaying } = useSelector((state) => state.player);
  const { data } = useGetTopHitsQuery();
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  });

  const swipePlays = data?.slice(0, 5);

  const handleClickPause = () => {
    dispatch(pausePlay(false));
  };

  const handleClickPlay = (track, i) => {
    dispatch(setActiveTrack({ track, data, i }));
    dispatch(pausePlay(true));
  };

  return (
    <div ref={divRef} className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col">
      <div className="w-full flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-orange font-bold text-2xl mt-8 ml-4">Top Charts</h2>
          <Link to="/top-hits">
            <p className="text-orange text-base cursor-pointer mt-8 mr-5 ml-4">See more</p>
          </Link>
        </div>

        <div className="mt-4 flex flex-col gap-1">
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

      <div className="w-full flex flex-col mt-8">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-orange font-bold text-2xl mt-8 ml-4">Top Artists</h2>
          <Link to="/top-artists">
            <p className="text-orange text-base cursor-pointer mt-8 mr-4">See more</p>
          </Link>
        </div>

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
              style={{ width: '17%', height: 'auto' }}
              className="shadow-lg rounded-full animate-slideright ml-1 mt-5 "
            >
              <Link to={`/artists/${artist?.artists[0].adamid}`}>
                <img src={artist?.images?.background} alt="Name" className="rounded-full w-full object-cover" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwipePlay;
