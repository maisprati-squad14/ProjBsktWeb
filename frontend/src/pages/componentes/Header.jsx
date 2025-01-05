import React, { useState } from "react";
import { FaMoon, FaSun, FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import logo from "../../assets/imgs/inicio/logo.png";
import SearchBar from "./SearchBar";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle("dark");
  };

    const navigateToSignUp = () => {
      navigate("/novousuario");
    };

    const navigateLogin = () => {
      navigate("/login");
    };

  return (
    <header className="flex items-center justify-between p-4 bg-primary dark:bg-nba-blue shadow-md">
      {/* Logo */}
      <div>
        <img src={logo} alt="BSKT Store Logo" className="h-14"/>
      </div>

      {/* Barra de Pesquisa */}
        <SearchBar />

      {/* Botão Entrar */}
      <div className="flex items-center space-x-4">
        <button onClick={navigateLogin}
        className="text-sm bg-nba-blue dark:bg-phoenixsuns-yellow text-white dark:text-nba-blue px-4 py-2 rounded-md shadow-md hover:bg-nba-orange font-bold">
          Entrar
        </button>

        <button
        onClick={navigateToSignUp}
        className="text-sm bg-nba-blue dark:bg-phoenixsuns-yellow text-white dark:text-nba-blue px-4 py-2 rounded-md shadow-md hover:bg-nba-orange font-bold">
          Criar Conta
        </button>

{/*         <FaUser className="text-gray-600 dark:text-gray-300 text-xl cursor-pointer" /> */}
        <FaShoppingCart className="text-gray-600 dark:text-gray-300 text-xl cursor-pointer" />
{/*         <button */}
{/*           onClick={toggleDarkMode} */}
{/*          className="text-gray-600 dark:text-gray-300 text-xl" */}
{/*          > */}
{/*           {darkMode ? <FaSun /> : <FaMoon />} */}
{/*         </button> */}
      </div>
    </header>
  );
};

export default Header;
