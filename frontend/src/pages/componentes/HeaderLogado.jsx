import React, { useState } from "react";
import { FaMoon, FaSun, FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import logo from "../../assets/imgs/inicio/logo.png";
import SearchBar from "./SearchBar";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="flex items-center justify-between p-4 bg-primary dark:bg-nba-blue shadow-md">
      {/* Logo */}
      <div>
        <img src={logo} alt="BSKT Store Logo" className="h-14"/>
      </div>

      {/* Barra de Pesquisa */}
        <SearchBar />

      <div className="flex items-center space-x-4">
        <FaUser className="text-gray-600 dark:text-gray-300 text-xl cursor-pointer" />
        <FaShoppingCart className="text-gray-600 dark:text-gray-300 text-xl cursor-pointer" />
        <button
          onClick={toggleDarkMode}
          className="text-gray-600 dark:text-gray-300 text-xl"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
