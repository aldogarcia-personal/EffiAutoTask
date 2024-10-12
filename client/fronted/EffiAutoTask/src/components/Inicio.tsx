import { useState } from "react";

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Encabezado / Hero Section */}
      <header className="bg-0056B3 text-white p-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">EffiAutoTask</h1>
          <button
            className="bg-white text-0056B3 px-4 py-2 rounded hover:bg-gray-300"
            onClick={handleLoginClick}
          >
            Iniciar Sesión
          </button>
        </div>
      </header>

      {/* Cuerpo / Features Section */}
      <main className="py-20">
        <section className="text-center">
          <h2 className="text-4xl font-bold mb-8">
            Bienvenido a Nuestra Plataforma
          </h2>
          <p className="text-lg mb-8">
            Descubre cómo podemos ayudarte a alcanzar tus objetivos con nuestra
            solución.
          </p>
          <button className="bg-0056B3 text-white px-6 py-3 rounded">
            Regístrate Ahora
          </button>
        </section>

        {/* Características o Información Adicional */}
        <section className="mt-20">
          <div className="grid grid-cols-3 gap-8">
            {/* Aquí podrías listar características con iconos */}
            <div className="feature">Característica 1</div>
            <div className="feature">Característica 2</div>
            <div className="feature">Característica 3</div>
          </div>
        </section>
      </main>

      {/* Modal para Inicio de Sesión */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-2xl mb-4">Iniciar Sesión</h2>
            <form>
              <input
                type="text"
                placeholder="Usuario"
                className="border mb-4 p-2 w-full"
              />
              <input
                type="password"
                placeholder="Contraseña"
                className="border mb-4 p-2 w-full"
              />
              <button type="submit" className="bg-0056B3 text-white px-4 py-2">
                Iniciar Sesión
              </button>
            </form>
            <button
              onClick={() => setShowLogin(false)}
              className="mt-4 text-red-500"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
