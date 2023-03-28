// Import the useNavigate hook from the react-router-dom library
import { useNavigate } from 'react-router-dom';

// Define a MusicianCard component that takes a 'track' prop
const MusicianCard = ({ track }) => {
  // Initialize the navigate function using the useNavigate hook
  const navigate = useNavigate();

  // Render the component
  return (
    // Render a div with a background image and a click handler that navigates to a new route
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

// Export the MusicianCard component as the default export of the module
export default MusicianCard;
