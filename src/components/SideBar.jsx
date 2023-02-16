import React from "react";
import Logo3 from "../assets/Logo3.svg";
import {RiBearSmileLine} from "react-icons/ri"
import {SiMusicbrainz} from "react-icons/si"
import {BsRecordCircle} from "react-icons/bs"
import {HiHomeModern} from "react-icons/all";

const SideBar = () => (
  <div class="flex flex-row min-h-screen from-grape bg-black bg-gradient-to-br">
    <aside class="sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-purple-500">
      <div class="sidebar-header flex items-center justify-center py-4">
        <div class="inline-flex">
          <a href="#" class="inline-flex flex-row items-center">
            <img src={Logo3} alt="Logo" />;
          </a>
        </div>
      </div>
      <div class="sidebar-content px-12 py-6">
        <ul class="flex flex-col w-full">
        <li class="my-px">
            <a
              href="#"
              class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-orange hover:text-black"
            >
          <HiHomeModern aria-hidden="true" className="w-6 h-6 ml-1" />
              <span class="ml-3"><a href="/">Discover</a></span>
            </a>
          </li>
          <li class="my-px"></li>

          <li class="my-px">
            <a
              href="#"
              class="flex flex-row items-center h-10 px-2 rounded-lg text-gray-300  hover:bg-orange hover:text-black"
            >
              <RiBearSmileLine aria-hidden="true" className="w-6 h-6 ml-1" />
              <span class="ml-3"><a href ="/around-you">Around You</a></span>
            </a>
          </li>
          <li class="my-px"></li>
          <li class="my-px">
            <a
              href="#"
              class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-orange hover:text-black"
            >
         <SiMusicbrainz aria-hidden="true" className="w-6 h-6" />
              <span class="ml-3"><a href="/top-artists">Top Artists</a></span>
            </a>
          </li>
          <li class="my-px"></li>
          <li class="my-px">
            <a
              href="#"
              class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-orange hover:text-black"
            >
            <BsRecordCircle aria-hidden="true" className="w-6 h-6" />
              <span class="ml-3"><a href="/top-charts">Top Charts</a></span>
            </a>
          </li>
          <li class="my-px"></li>
        </ul>
      </div>
    </aside>
  </div>
);

export default SideBar;
