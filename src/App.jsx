import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SearchBar, SideBar, MusicPlayer, SwipePlay } from './components';

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

const App = () => {
  const { activeTrack } = useSelector(((state) => state.player));

  return (
    <div className="relative flex bg-grape">
      <SideBar />
      <div className="flex-1 flex flex-col bg-gradient-to-br bg-black">
        <SearchBar />
        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/top-artists" element={<TopMusicians />} />
              <Route path="/top-charts" element={<TopHits />} />
              <Route path="/around-you" element={<AroundMe />} />
              <Route path="/artists/:id" element={<ArtistInfo />} />
              <Route path="/tracks/:trackid" element={<SongInfo />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>
          <div className="xl:sticky relative top-4 h-fit " />
        </div>
      </div>
      <SwipePlay />
      {activeTrack?.title && (
        <div className="absolute h-60 flex animate-slideup bg-gradient-to-br from-white/10 to-orange backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;
