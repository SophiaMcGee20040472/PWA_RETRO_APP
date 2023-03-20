import React from 'react';
import { RiBearSmileLine } from 'react-icons/ri';
import { SiMusicbrainz } from 'react-icons/si';
import { BsRecordCircle } from 'react-icons/bs';
import { HiHomeModern } from 'react-icons/all';
import { NavLink } from 'react-router-dom';
import Logo3 from '../assets/Logo3.svg';

const SideBar = () => (
  <div className="flex flex-row min-h-screen from-grape bg-black bg-gradient-to-br">
    <aside className="sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-purple-500">
      <div className="sidebar-header flex items-center justify-center py-4">
        <div className="inline-flex">
          <a href="#" className="inline-flex flex-row items-center">
            <img src={Logo3} alt="Logo" />;
          </a>
        </div>
      </div>
      <div className="sidebar-content px-12 py-6">
        <ul className="flex flex-col w-full">

          <li className="my-px">
            <NavLink
              to="/"
              className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-orange hover:text-black"
              activeClassName="bg-orange text-black"
              exact
            >
              <HiHomeModern aria-hidden="true" className="w-6 h-6 ml-1" />
              <span className="ml-3">Discover</span>
            </NavLink>
          </li>
          <li className="my-px" />
          <li className="my-px">
            <NavLink
              to="/around-you"
              className="flex flex-row items-center h-10 px-2 rounded-lg text-gray-300  hover:bg-orange hover:text-black"
              activeClassName="bg-orange text-black"
            >
              <RiBearSmileLine aria-hidden="true" className="w-6 h-6 ml-1" />
              <span className="ml-3">Around You</span>
            </NavLink>
          </li>
          <li className="my-px">
            <NavLink
              to="/top-artists"
              className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-orange hover:text-black"
              activeClassName="bg-orange text-black"
            >
              <SiMusicbrainz aria-hidden="true" className="w-6 h-6" />
              <span className="ml-3">Top Artists</span>
            </NavLink>
          </li>
          <li className="my-px" />
          <li className="my-px">
            <NavLink
              to="/top-hits"
              className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-orange hover:text-black"
              activeClassName="bg-orange text-black"
            >
              <BsRecordCircle aria-hidden="true" className="w-6 h-6" />
              <span className="ml-3">Top Charts</span>
            </NavLink>
          </li>
          <li className="my-px">
            <NavLink
              to="/favourites"
              className="flex flex-row items-center h-10 px-2 rounded-lg text-gray-300  hover:bg-orange hover:text-black"
            >
              <RiBearSmileLine aria-hidden="true" className="w-6 h-6 ml-1" />
              <span className="ml-3">Favourites</span>
            </NavLink>
          </li>
          <li className="my-px" />
        </ul>
      </div>
    </aside>
  </div>
);
export default SideBar;
