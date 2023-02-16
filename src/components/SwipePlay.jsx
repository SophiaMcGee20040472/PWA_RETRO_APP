import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FreeMode } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import PausePlay from "./PausePlay";

import { useGetTopHitsQuery } from "../redux/service/ShazamAPI";
import { PauseandPlay, setActiveTrack } from "../redux/features/playerChoices";

const TopHitsCard = ({
  track,
  i,
  currentlyPlaying,
  activeTrack,
  handleClickPause,
  handleClickPlay,
}) => (
  <div
    className={`w-full flex flex-row items-center hover:bg-grape ${
      activeTrack?.title === track?.title ? "bg-orange" : "bg-transparent"
    } py-2 p-4 rounded-lg cursor-pointer mb-2`}
  >
    <h3 className="font-bold text-base text-orange mr-5">{i + 1}.</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img
        className="w-20 h-21 rounded-lg"
        src={track?.images?.coverart}
        alt={track?.title}
      />
      <div className="flex-1 flex flex-col justify-center mx-3">
        <Link to={`/tracks/${track.key}`}>
          <p className="text-xl font-bold text-orange">{track?.title}</p>
        </Link>
        <Link to={`/artists/${track?.artists[0].adamid}`}>
          <p className="text-base text-white mt-1">{track?.subtitle}</p>
        </Link>
      </div>
    </div>
    <PausePlay
      currentlyPlaying={currentlyPlaying}
      activeTrack={activeTrack}
      track={track}
      handlePause={handleClickPause}
      handlePlay={handleClickPlay}
    />
  </div>
);
const SwipePlay = () => {
  const { activeTrack, currentlyPlaying } = useSelector(
    (state) => state.player
  );
  const { data } = useGetTopHitsQuery();
  const dispatch = useDispatch();
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  const swipePlays = data?.slice(0, 5);

  const handlePauseClick = () => {
    dispatch(PauseandPlay(false));
  };

  const handlePlayClick = (track, i) => {
    dispatch(setActiveTrack({ track, data, i }));
    dispatch(PauseandPlay(true));
  };

  return (
    <div
      ref={divRef}
      className="  bg-black xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col"
    >
      <div className="w-full flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl ml-5 mt-6">Top Hits</h2>
          <Link to="/top-charts">
            <p className="text-orange text-base cursor-pointer mr-6 mt-6">
              See more
            </p>
          </Link>
        </div>

        <div className="mt-4 flex flex-col gap-1 bg-black">
          {swipePlays?.map((track, i) => (
            <TopHitsCard
              key={track.key}
              track={track}
              i={i}
              currentlyPlaying={currentlyPlaying}
              activeTrack={activeTrack}
              handlePauseClick={handlePauseClick}
              handlePlayClick={() => handlePlayClick(track, i)}
            />
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col mt-8">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl ml-5">Top Artists</h2>
          <Link to="/top-artists">
            <p className="text-orange text-base cursor-pointer mr-6">
              See more
            </p>
          </Link>
        </div>

        <Swiper
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          spaceBetween={11}
          slidesPerView="auto"
          freeMode
          className="mt-7 "
        >
          {swipePlays?.slice(0, 5).map((artist) => (
            <SwiperSlide
              key={artist?.key}
              style={{ width: "16%", height: "auto" }}
              className="shadow-lg rounded-full animate-slideright "
            >
              <Link to={`/artists/${artist?.artists[0].adamid}`}>
                <img
                  src={artist?.images?.background}
                  alt="Name"
                  className="rounded-full w-full object-cover ml-6 border to-orange"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwipePlay;
