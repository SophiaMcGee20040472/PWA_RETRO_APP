import { PauseandPlay, setActiveTrack } from "../redux/features/playerChoices";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import PausePlay from "./PausePlay";

const TrackCard = ({ track, currentlyPlaying, activeTrack, data, i }) => {
  const dispatch = useDispatch();

  const handleClickPause = () => {
    dispatch(PauseandPlay(false));
  };

  const handleClickPlay = () => {
    dispatch(setActiveTrack({ track, data, i }));
    dispatch(PauseandPlay(true));
  };

  return (
    <div class=" bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div class="flex justify-end px-2 pt-2">
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            activeTrack?.title === track.title
              ? "flex bg-black bg-opacity-70"
              : "hidden"
          }`}
        >
          <PausePlay
            currentlyPlaying={currentlyPlaying}
            activeTrack={activeTrack}
            track={track}
            handlePause={handleClickPause}
            handlePlay={handleClickPlay}
          />
        </div>
        <div class="flex flex-col items-center pb-7 w-40 text-white">
          <img
            alt="song_img"
            src={track.images?.coverart}
            className="w-full h-full rounded-lg"
          />
          <br></br>
          <Link className="text-center" to={`/tracks/${track?.key}`}>
            {track.title}
          </Link>{" "}
          <Link
            className="text-orange text-center"
            to={
              track.artists
                ? `/tracks/${track?.artists[0]?.adamid}`
                : "/top-artists"
            }
          >
            {track.subtitle}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default TrackCard;
