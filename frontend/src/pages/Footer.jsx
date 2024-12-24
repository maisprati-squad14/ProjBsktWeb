import React from "react";
import logo from "../assets/logo.png";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="flex items-center justify-between h-36 p-4 bg-nba-blue dark:bg-black shadow-md">
            <div className="flex items-center">
                <img src={logo} alt="BSKT Store Logo" className="h-14"/>
            </div>

            <div className="flex space-x-4 mr-8">
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-white text-5xl">
          <FaFacebook />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-white text-5xl">
          <FaInstagram />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-white text-5xl">
          <FaWhatsapp />
        </a>
      </div>
        </footer>
    )
}

export default Footer;