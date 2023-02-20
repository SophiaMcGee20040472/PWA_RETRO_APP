import React from 'react';

const Track = ({ isPlaying, isActive, activeTrack }) => (
  <div className="flex-1 flex items-center justify-start">
    <div className={`${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''} hidden sm:block h-16 w-16 mr-4`}>
      <img src={activeTrack?.images?.coverart} alt="cover art" className="rounded-full" />
    </div>
    <div className="w-[50%]">
      <p className="truncate text-white font-bold text-lg">
        {activeTrack?.title ? activeTrack?.title : 'No active Song'}
      </p>
      <p className="truncate text-gray-300">
        {activeTrack?.subtitle ? activeTrack?.subtitle : 'No active Song'}
      </p>
    </div>
  </div>
);

export default Track;
