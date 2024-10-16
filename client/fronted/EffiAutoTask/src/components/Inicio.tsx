import { useState } from "react";
import SelectLanguage from "./language.tsx";
import { useNavigate } from "react-router-dom"; // Importa el hook useNavigate para la navegación
import Cerrar from "./icons.tsx";
import Landing from "../assets/images/landing.webp";

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false); // Define el estado showLogin para mostrar el modal de inicio de sesión
  const [showRegister, setShowRegister] = useState(false); // Define el estado showRegister para mostrar el modal de registro
  const navigate = useNavigate(); // Inicializa el hook useNavigate

  const handleLoginClick = () => {
    setShowLogin(true); // Cambia el estado a true para mostrar el modal
    navigate("/login"); // Redirige a la ruta de inicio de sesión
  };

  const handleRegisterClick = () => {
    setShowRegister(true); // Cambia el estado a true para mostrar el modal de registro
    navigate("/register"); // Redirige a la ruta de registro
  };

  const handleCloseModal = () => {
    setShowLogin(false);
    setShowRegister(false);
    navigate("/"); // Redirige a la ruta anterior
  };

  const handleRegisterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulación de registro exitoso
    setTimeout(() => {
      setShowRegister(false); // Cambia el estado a false para cerrar el modal
      setShowLogin(true); // Cambia el estado a false para cerrar el modal
      navigate("/login"); // Redirigir al formulario de inicio de sesión
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Encabezado */}
      <header className="bg-0056B3 text-f5f5dc p-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">EffiAutoTask</h1>
          <SelectLanguage />
          <div>
            <button
              className="bg-white text-0056B3 px-4 py-2 rounded hover:bg-gray-300 mr-4"
              onClick={handleLoginClick}
            >
              Iniciar Sesión
            </button>
            <button
              className="bg-white text-0056B3 px-4 py-2 rounded hover:bg-gray-300"
              onClick={handleRegisterClick}
            >
              Regístrate
            </button>
          </div>
        </div>
      </header>

      {/* Cuerpo */}
      <div className="flex justify-center items-center">
        <img src={Landing} alt="landing" className="w-10/12 h-1/4" />
      </div>

      <main className="py-20">
        <section className="text-center">
          <h2 className="text-4xl font-bold mb-8">
            Bienvenido a Nuestra Plataforma
          </h2>
          <p className="text-lg mb-8">
            Descubre cómo podemos ayudarte a alcanzar tus objetivos con nuestra
            solución.
          </p>
        </section>

        {/* Características */}
        <section className="mt-20">
          <div className="grid grid-cols-3 gap-8">
            <div className="feature">Característica 1</div>
            <div className="feature">Característica 2</div>
            <div className="feature">Característica 3</div>
          </div>
        </section>
      </main>

      {/* Modal para Inicio de Sesión */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 p-2 bg-0056B3 px-4 py-2 rounded-full text-f5f5dc hover:bg-00449B"
            >
              <Cerrar />
            </button>
            <h2 className="text-2xl mb-4">Iniciar Sesión</h2>
            <form>
              <input
                type="text"
                placeholder="Usuario o Email"
                className="border mb-4 p-2 w-full"
              />
              <input
                type="password"
                placeholder="Contraseña"
                className="border mb-4 p-2 w-full"
              />
              <button type="submit" className="bg-0056B3 text-f5f5dc px-4 py-2">
                Iniciar Sesión
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Modal para Registro */}
      {showRegister && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 p-2 bg-0056B3 px-4 py-2 rounded-full text-f5f5dc hover:bg-00449B"
            >
              <Cerrar />
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
      )}
    </div>
  );
};

export default LandingPage;
