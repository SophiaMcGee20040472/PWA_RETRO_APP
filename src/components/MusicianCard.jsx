import { useNavigate } from 'react-router-dom';

const MusicianCard = ({ track }) => {
  const navigate = useNavigate();
  // eslint-disable-next-line no-console

  return (
    <div
      className="flex flex-col w-[150px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}
    >
      <img
        alt="track_img"
        src={track?.images?.coverart}
        className="w-22 h-22 rounded-lg"
      />
      <p className="mt-4 font-bold text-sm text-white truncate">
        {track?.subtitle}
      </p>
    </div>
  );
};

export default MusicianCard;

