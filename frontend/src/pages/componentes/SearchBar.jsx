import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="flex items-center bg-white dark:bg-gray-700 rounded-full shadow-md px-4 w-full max-w-md transition-all
                    focus-within:ring-2 focus-within:ring-nba-blue dark:focus-within:ring-phoenixsuns-yellow
                    focus-within:shadow-md focus-within:shadow-nba-blue dark:focus-within:shadow-phoenixsuns-yellow">
      <input
        type="text"
        placeholder="O que você está procurando?"
        className="flex-grow p-2 text-sm bg-transparent focus:outline-none focus:ring-0 dark:text-white"
      />
      <FaSearch className="text-gray-500 dark:text-gray-300 ml-2" />
    </div>
  );
};

export default SearchBar;