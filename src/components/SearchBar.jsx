import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdManageSearch } from 'react-icons/md';

const Searchbar = () => {
  // Hook to navigate to search results page
  const navigate = useNavigate();

  // State hook to manage the search input
  const [searchMusic, setSearchMusic] = useState('');

  // Function to handle form submit event
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default form submission
    navigate(`/search/${searchMusic}`); // navigate to search results page with the search input as a parameter
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="text-white">
      <label htmlFor="search-field" className="sr-only">
        Search your Favourite Music
      </label>
      <div className="flex flex-row items-center">
        {/* Search icon */}
        <MdManageSearch aria-hidden="true" className="w-6 h-6 ml-6 mt-8 mb-4" />
        {/* Search input field */}
        <input
          name="search-field"
          id="search-field"
          className="flex-1 bg-transparent border-none placeholder-white outline-none text-lg text-white ml-4 mt-8 mb-4"
          placeholder="Search"
          type="search"
          value={searchMusic}
          onChange={(e) => setSearchMusic(e.target.value)} // Update searchMusic state with input value
        />
      </div>
    </form>
  );
};

export default Searchbar;
