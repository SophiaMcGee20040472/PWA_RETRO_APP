import React from 'react';
import { loader } from '../assets';

const Loader = ({ title }) => (
  <div className="w-full flex justify-center items-center flex-col">
    <img
      src={loader}
      alt="loading image"
      className="w-900 h900 object-contain"
    />
    <h1 className="font-bold text-4xl text-white mt-10">
      {title || 'Please wait currently Loading'}
    </h1>
  </div>
);

export default Loader;
