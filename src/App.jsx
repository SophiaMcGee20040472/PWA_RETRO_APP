import { Route, Routes } from "react-router-dom";
import { SearchBar,SideBar } from "./components";
import { useSelector } from "react-redux";

import {
  ArtistInfo,
  TopMusicians,
  AroundMe,
  Discover,
  Search,
  SongInfo,
  TopHits,
} from "./pages";
const App = () => {
    const{activeTrack} =useSelector((state=>state.player));

return(
  <div className="relative flex">
    <SideBar/>
    <div className="flex-1 flex flex-col bg-gradient-to-br bg-black">
    
      <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
        <div className="flex-1 h-fit pb-40">
          <Routes>
            <Route path="/" element={<Discover />} />
            <Route path="/top-artists" element={<TopMusicians />} />
            <Route path="/top-charts" element={<TopHits />} />
            <Route path="/around-you" element={<AroundMe />} />
            <Route path="/artists/:id" element={<ArtistInfo />} />
            <Route path="/songs/:songid" element={<SongInfo />} />
            <Route path="/search/:searchTerm" element={<Search />} />
          </Routes>
        </div>
        <div className="xl:sticky relative top-0 h-fit">           
          </div>
      </div>
    </div>
    
    {activeTrack?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
        </div>
      )}
    </div>
    );
};

export default App;
