import React from 'react';
import { RiBearSmileLine } from 'react-icons/ri';
import { SiMusicbrainz } from 'react-icons/si';
import { BsRecordCircle } from 'react-icons/bs';
import { GiIsland } from 'react-icons/gi';
import { CgLogOut } from 'react-icons/cg';
import { HiHomeModern } from 'react-icons/all';
import { NavLink } from 'react-router-dom';
import Logo3 from '../assets/Logo3.svg';

// Function to handle logout click
function handleLogoutClick() {
  window.location.reload();
}

// Sidebar component
const SideBar = () => (
  <div className="flex flex-row min-h-screen from-grape bg-black bg-gradient-to-br">
    <aside className="sidebar w-48 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-purple-500">
      <div className="sidebar-header flex items-center justify-center py-2">
        <div className="inline-flex">
          <a href="#" className="inline-flex flex-row items-center">
            <img src={Logo3} alt="Logo" height="30" />
          </a>
        </div>
      </div>
      <div className="sidebar-content px-4 py-2">
        <ul className="flex flex-col w-full">

          {/* Discover link */}
          <li className="my-px">
            <NavLink
              to="/"
              className="flex flex-row items-center h-8 px-2 rounded-lg text-sm text-gray-300 hover:bg-orange hover:text-black"
              activeClassName="bg-orange text-black"
              exact
            >
              <HiHomeModern aria-hidden="true" className="w-4 h-4 ml-5" />
              <span className="ml-2">Discover</span>
            </NavLink>
          </li>

          {/* Separator */}
          <li className="my-px" />

          {/* Around You link */}
          <li className="my-px">
            <NavLink
              to="/around-you"
              className="flex flex-row items-center h-8 px-2 rounded-lg text-sm text-gray-300  hover:bg-orange hover:text-black"
              activeClassName="bg-orange text-black"
            >
              <GiIsland aria-hidden="true" className="w-4 h-4 ml-5" />
              <span className="ml-2">Around You</span>
            </NavLink>
          </li>

          {/* Top Artists link */}
          <li className="my-px">
            <NavLink
              to="/top-artists"
              className="flex flex-row items-center h-8 px-2 rounded-lg text-sm text-gray-300 hover:bg-orange hover:text-black"
              activeClassName="bg-orange text-black"
            >
              <SiMusicbrainz aria-hidden="true" className="w-4 h-4 ml-5" />
              <span className="ml-2">Top Artists</span>
            </NavLink>
          </li>

          {/* Separator */}
          <li className="my-px" />

          {/* Top Charts link */}
          <li className="my-px">
            <NavLink
              to="/top-hits"
              className="flex flex-row items-center h-8 px-2 rounded-lg text-sm text-gray-300 hover:bg-orange hover:text-black"
              activeClassName="bg-orange text-black"
            >
              <BsRecordCircle aria-hidden="true" className="w-4 h-4 ml-5" />
              <span className="ml-2">Top Charts</span>
            </NavLink>

          </li>
          <li className="my-px">
            <NavLink
              to="/favourites"
              className="flex flex-row items-center h-8 px-2 rounded-lg text-sm text-gray-300  hover:bg-orange hover:text-black"
            >
              <RiBearSmileLine aria-hidden="true" className="w-4 h-4 ml-5" />
              <span className="ml-3">Favourites</span>
            </NavLink>
          </li>
          <li className="my-px mt-32">
            <NavLink
              to=""
              className="flex flex-row items-center h-8 px-2 rounded-lg text-sm text-gray-300  hover:bg-orange hover:text-black"
              onClick={handleLogoutClick}
            >
              <CgLogOut aria-hidden="true" className="w-5 h-5 ml-5" />
              <span className="ml-3">Logout</span>
            </NavLink>
          </li>
          <li className="my-px" />
        </ul>
      </div>
    </aside>
  </div>
);
export default SideBar;
