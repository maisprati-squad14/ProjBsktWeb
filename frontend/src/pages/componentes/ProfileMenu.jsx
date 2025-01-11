import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProfileMenu = () => {
  const [profileMenu, setProfileMenu] = useState(false);
  const navigate = useNavigate();

  const toggleProfileMenu = () => {
    setProfileMenu((prev) => !prev);
  };

  const closeMenu = (event) => {
    if(!event.target.closest("#button-container")) {
      setProfileMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeMenu);
    return () => {
      document.removeEventListener("click", closeMenu)
    };
  }, []);

  const handleLogout = () => {
    navigate("/")
  }

  return (
    <div className="w-5 h-5">
      <button
        type="button"
        id="menu-button"
        aria-expanded={profileMenu}
        aria-haspopup="true"
        onClick={toggleProfileMenu}
      >
        <FaUser className="text-gray-600 dark:text-gray-300 text-xl cursor-pointer" />
      </button>
      {profileMenu && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              id="menu-item-0"
            >
              Editar Perfil
            </a>
              <button
                type="button"
                className="block w-full px-4 py-2 text-left text-sm text-gray-700"
                role="menuitem"
                id="menu-item-3"
                onClick={handleLogout}
              >
                Sair
              </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
