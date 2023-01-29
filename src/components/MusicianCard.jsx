import { useNavigate } from "react-router-dom";

const MusicianCard = ({track}) => {
  const navigate = useNavigate();
  console.log(track ,track.artists)

  return(
  <div
  className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
  onClick={() => navigate(`/artists/${track?.artists[0].sophiaid}`)}
>
  <img alt="track_img" src={track?.images?.coverart} className="w-full h-56 rounded-lg" />
  <p className="mt-4 font-bold text-lg text-white truncate">
    {track?.subtitle}
  </p>
</div>
);
};

export default MusicianCard;