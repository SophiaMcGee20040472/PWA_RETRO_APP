import React from "react";
import Logo2 from "../assets/Logo2.svg";

const SideBar = () => (
  <div class="flex flex-row min-h-screen from-grape bg-black bg-gradient-to-br">
    <aside class="sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-purple-500">
      <div class="sidebar-header flex items-center justify-center py-4">
        <div class="inline-flex">
          <a href="#" class="inline-flex flex-row items-center">
            <img src={Logo2} alt="Logo" />;
          </a>
        </div>
      </div>
      <div class="sidebar-content px-4 py-6">
        <ul class="flex flex-col w-full">
        <li class="my-px">
            <a
              href="#"
              class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span class="flex items-center justify-center text-lg text-gray-400">
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </span>
              <span class="ml-3">Discover</span>
            </a>
          </li>
          <li class="my-px"></li>

          <li class="my-px">
            <a
              href="#"
              class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span class="flex items-center justify-center text-lg text-gray-400">
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </span>
              <span class="ml-3">Around You</span>
            </a>
          </li>
          <li class="my-px"></li>
          <li class="my-px">
            <a
              href="#"
              class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span class="flex items-center justify-center text-lg text-gray-400">
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              <span class="ml-3">Top Artists</span>
            </a>
          </li>
          <li class="my-px"></li>
          <li class="my-px">
            <a
              href="#"
              class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span class="flex items-center justify-center text-lg text-gray-400">
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/>
                </svg>
              </span>
              <span class="ml-3">Top Charts</span>
            </a>
          </li>
          <li class="my-px"></li>
        </ul>
      </div>

      
    </aside>
  </div>
);

export default SideBar;
