import SelectLanguage from "./language.tsx"; // Importa un componente para seleccionar el idioma
import { useState } from "react"; // Importa el hook useState para gestionar el estado
import { useNavigate } from "react-router-dom"; // Importa el hook useNavigate para la navegación
import DropdownUser from "./user.tsx";

function Nav() {
  const [logOut, setLogOut] = useState(false); // Define el estado logOut para mostrar el modal de cierre de sesión
  const navigate = useNavigate(); // Inicializa el hook useNavigate

  const handleLogOutClick = () => {
    setLogOut(false); // Cambia el estado a false para cerrar el modal
    navigate("/"); // Redirige a la página principal
  };

  const handleOpenLogOutModal = () => {
    setLogOut(true); // Abre el modal de cerrar sesión
  };

  return (
    <nav className="bg-0056B3 flex justify-between items-center p-4 shadow-md ">
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
        <li className="flex ">
          <DropdownUser userName="aldo" />
        </li>
        <li>
          <button
            onClick={handleOpenLogOutModal}
            className="text-f5f5dc hover:text-red-500"
          >
            Cerrar Sesión
          </button>
        </li>
        <li>
          <SelectLanguage />
        </li>
      </ul>

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
              onClick={() => setLogOut(false)} // Cierra el modal sin cerrar sesión
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
