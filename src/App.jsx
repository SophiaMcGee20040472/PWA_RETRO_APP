import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SearchBar, SideBar, SwipePlay } from './components';
import MusicPlayer from './PlayerOptions/Player3';
import Player1 from './PlayerOptions/Player1';

import {
  ArtistInfo,
  TopMusicians,
  AroundMe,
  Discover,
  Search,
  SongInfo,
  TopHits,
  Login,
} from './pages';
import FavouritesPage from './pages/FavouritesPage';

const App = () => {
  const { activeTrack } = useSelector(((state) => state.player));

  return (
    <><div className="relative flex bg-grape">
      <SideBar />
      <div className="flex-1 flex flex-col bg-gradient-to-br bg-black">
        <SearchBar />
        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/login" element={<Login />} />
              <Route path="/top-artists" element={<TopMusicians />} />
              <Route path="/top-hits" element={<TopHits />} />
              <Route path="/around-you" element={<AroundMe />} />
              <Route path="/artists/:id" element={<ArtistInfo />} />
              <Route path="/tracks/:trackid" element={<SongInfo />} />
              <Route path="/search/:searchTerm" element={<Search />} />
              <Route path="/favourites" element={<FavouritesPage />} />
            </Routes>
          </div>
          <div className="xl:sticky relative top-4 h-fit " />
        </div>
      </div>
      <SwipePlay />
      {activeTrack?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
      </div>
      <Player1 />
    </>
  );
};

export default App;
