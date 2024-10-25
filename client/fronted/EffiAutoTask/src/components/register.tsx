import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa el hook useNavigate para la navegación
import { Regresar } from "./icons.tsx";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [showRegister, setShowRegister] = useState(true); // Define el estado showRegister para mostrar el modal de registro

  const handleCloseModal = () => {
    setShowRegister(false);
    navigate("/"); // Redirige a la página principal
  };
  const handleRegisterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulación de registro exitoso
    setTimeout(() => {
      setShowRegister(false); // Cambia el estado a false para cerrar el modal
      navigate("/account/login"); // Redirigir al formulario de inicio de sesión
    }, 1000);
  };

  return (
    showRegister && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg relative">
          <button
            onClick={handleCloseModal}
            className="absolute top-2 right-2 p-2 bg-0056B3 px-4 py-2 rounded-full text-f5f5dc hover:bg-00449B"
          >
            <Regresar />
          </button>
          <h2 className="text-2xl mb-4">Regístrate</h2>
          <form onSubmit={handleRegisterSubmit}>
            <input
              type="text"
              placeholder="Nombre"
              className="border mb-4 p-2 w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="border mb-4 p-2 w-full"
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="border mb-4 p-2 w-full"
            />
            <button type="submit" className="bg-0056B3 text-f5f5dc px-4 py-2">
              Registrarse
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default Register;
