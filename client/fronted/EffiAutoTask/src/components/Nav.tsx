import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectLanguage from "./language";
import DropdownUser from "./user";
import { use } from "i18next";

function Nav() {
  const [logOut, setLogOut] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });
  useEffect(() => {
    // Aplica la clase dark al body según el estado darkMode
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Guarda la preferencia en localStorage
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const navigate = useNavigate();
  const handleLogOutClick = () => {
    setLogOut(false);
    navigate("/");
  };

  const handleOpenLogOutModal = () => {
    setLogOut(true);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="bg-0056B3 flex justify-between items-center p-4 shadow-md">
      <div className="flex items-center space-x-4">
        <a href="/home" className="text-f5f5dc text-xl font-bold">
          EffiAutoTask
        </a>
      </div>
      <ul className="flex space-x-6">
        <li>
          <a
            href="/home"
            className="text-f5f5dc no-underline hover:text-gray-300 p-4"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/about"
            className="text-f5f5dc no-underline hover:text-gray-300 p-4"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/tasks"
            className="text-f5f5dc no-underline hover:text-gray-300 p-4"
          >
            Tasks
          </a>
        </li>
      </ul>
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleDarkMode}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {darkMode ? "Modo Claro" : "Modo Oscuro"}
        </button>
        <SelectLanguage />
        <DropdownUser userName="aldo" />
        <button
          onClick={handleOpenLogOutModal}
          className="text-f5f5dc hover:text-red-500"
        >
          Cerrar Sesión
        </button>
      </div>

      {/* Modal para confirmar el cierre de sesión */}
      {logOut && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-2xl mb-4">¿Seguro que deseas cerrar sesión?</h2>
            <button
              onClick={handleLogOutClick}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Confirmar Cierre de Sesión
            </button>
            <button
              onClick={() => setLogOut(false)}
              className="mt-4 text-gray-500"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;
