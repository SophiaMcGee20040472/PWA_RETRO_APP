import React from 'react';
const Song=({
    currentlyPlaying, currentlyActive, activeTrack})=>(
        <div className='flex-1 flex justify-start items-center '>
          <div className={`${currentlyPlaying && currentlyActive ? 'animate-[spin_3s_linear_infinite]' : ''} hidden sm:block h-14 w-14 mr-2`}>
          <img src={activeTrack?.images?.coverart} alt="cover art" className="rounded-full" />
          </div>
    <div className="w-[35%]">
      <p className="truncate text-white font-bold text-lg">
        {activeTrack?.title ? activeTrack?.title : 'No active Track'}
      </p>
      <p className="truncate text-gray-200">
        {activeTrack?.subtitle ? activeTrack?.subtitle : 'No active Track'}
      </p>
    </div>
  </div>
);

export default Song;