import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-nba-red dark:bg-nba-orange p-2">
      <ul className="grid grid-cols-3 gap-8">
        <li className="text-white text-center flex justify-center items-center"> 
          <a href="#">Vestuário</a>
        </li>
        <li className="text-white text-center flex justify-center items-center"> 
          <a href="#">Material Esportivo</a>
        </li>
        <li className="text-white text-center flex justify-center items-center"> 
          <a href="#">Acessórios</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;