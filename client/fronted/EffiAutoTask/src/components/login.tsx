import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa el hook useNavigate para la navegación
import { Regresar } from "./icons.tsx";
import { login } from "../services/api"; // Importa tu servicio de autenticación

const Login = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [identifier, setIdentifier] = useState(""); // Cambiado a identifier
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCloseModal = () => {
    setShowLogin(false);
    navigate("/"); // Redirige a la página principal
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      // Llama a la API para verificar las credenciales con identifier (username o email) y password
      const userData = await login(identifier, password);
      console.log("Usuario autenticado:", userData);
      setShowLogin(false);
      navigate("/home"); // Redirigir si es exitoso
    } catch (error) {
      setError("Credenciales incorrectas. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="grid place-items-center">
      <h2>Inicia sesión en tu cuenta</h2>
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg relative">
            <h2 className="text-2xl mb-4">Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Usuario o Email"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                className="border mb-4 p-2 w-full"
                required
              />
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border mb-4 p-2 w-full"
                required
              />
              <button type="submit" className="bg-0056B3 text-f5f5dc px-4 py-2">
                Iniciar Sesión
              </button>
              {error && <p className="text-red-500 mt-2">{error}</p>}
              <button
                onClick={handleCloseModal}
                className="absolute top-2 right-2 p-2 bg-0056B3 px-4 py-2 rounded-full text-f5f5dc hover:bg-00449B"
              >
                <Regresar />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
