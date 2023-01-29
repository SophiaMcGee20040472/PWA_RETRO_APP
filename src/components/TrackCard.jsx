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
      <div class="flex justify-start px-6 pt-8">
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            activeTrack?.title === track.title
              ? "flex bg-black bg-opacity-60"
              : "hidden"
          }`}
        >
          <PausePlay
            handlePause={handleClickPause}
            handlePlay={handleClickPlay}
            currentlyPlaying={currentlyPlaying}
            activeTrack={activeTrack}
            track={track}
          />
        </div>
        <div class="flex flex-col items-start px-1 pb-2 w-40 text-white font-semibold">
          <img
            alt="song_img"
            src={track.images?.coverart}
            className="w-full h-full rounded-lg"
          />
          <br></br>
          <Link className="text-start" to={`/tracks/${track?.key}`}>
            {track.title}
          </Link>{" "}
          <Link
            className="text-orange"
            to={
              track.artists
                ? `/tracks/${track?.artists[0]?.sophiaid}`
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
