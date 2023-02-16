import React from 'react';

const SeekingBar = ({ value, min, max, onInput, setSeekingTime, appTime }) => {
  // format converted to  0:00 format
  const getTime = (time) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;

  return (
    <div className="hidden sm:flex flex-row items-center">
      <button type="button" onClick={() => setSeekingTime(appTime - 5)} className="hidden lg:mr-4 lg:block text-white">
        -
      </button>
      <p className="text-orange">{value === 0 ? '0:00' : getTime(value)}</p>
      <input
        type="range"
        step="any"
        value={value}
        onInput={onInput}
        min={min}
        max={max}
        className="md:block w-24 md:w-56 2xl:w-96 h-1 mx-4 2xl:mx-3 rounded-lg"
      />
      <p className="text-orange">{max === 0 ? '0:00' : getTime(max)}</p>
      <button type="button" onClick={() => setSeekingTime(appTime + 5)} className="hidden lg:ml-4 lg:block text-white">
        +
      </button>
    </div>
  );
};
export default SeekingBar;