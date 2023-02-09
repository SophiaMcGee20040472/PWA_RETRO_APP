import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { MdManageSearch } from "react-icons/md";

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchMusic, setSearchMusic] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchMusic}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="p-2 text-white focus-within:text-white"
    >
      <label htmlFor="search-field" className="sr-only">
        Search your Favourite Music
      </label>
      <div className="flex flex-row justify-start items-left">
        <MdManageSearch aria-hidden="true" className="w-8 h-10 mt-6" />
        <input
          name="search-field"
          id="search-field"
          className="flex-1 bg-transparent border-none placeholder-white outline-none text-base text-white p-2 px-4 py-8"
          placeholder="Search"
          type="search"
          value={searchMusic}
          onChange={(e) => setSearchMusic(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Searchbar;
