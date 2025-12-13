import React, { useState, useId } from "react"
import { useNavigate } from "react-router-dom" // Importa el hook useNavigate para la navegación
import { Regresar } from "./icons.tsx"

const Register: React.FC = () => {
  const navigate = useNavigate()
  const passwordId = useId()
  const confirmId = useId()
  const errorId = useId()
  const [error, setError] = useState(false)
  const [showRegister, setShowRegister] = useState(true) // Define el estado showRegister para mostrar el modal de registro

  const handleCloseModal = () => {
    setShowRegister(false)
    navigate("/") // Redirige a la página principal
  }
  const handleRegisterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const pwdEl = form.querySelector(`#${passwordId}`) as HTMLInputElement | null
    const confirmEl = form.querySelector(`#${confirmId}`) as HTMLInputElement | null
    const pwd = pwdEl?.value ?? ""
    const confirm = confirmEl?.value ?? ""

    if (pwd !== confirm) {
      setError(true)
      return
    }

    setError(false)
    // Simulación de registro exitoso
    setTimeout(() => {
      setShowRegister(false) // Cambia el estado a false para cerrar el modal
      navigate("/account/login") // Redirigir al formulario de inicio de sesión
    }, 1000)
  }

  return (
    showRegister && (
      <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center  ">
        <div className="bg-white p-6 rounded-lg relative ml-auto h-screen w-8/12 ">
          <h2 className="text-2xl mb-4">Regístrate</h2>
          <span>
            ¿Ya tienes una cuenta?{" "}
            <a href="/account/login" className="text-0056B3">
              Inicia sesión
            </a>
          </span>
          <form
            onSubmit={handleRegisterSubmit}
            className="flex flex-col justify-between "
          >
            <input
              type="text"
              placeholder="Username"
              className="border mb-4 p-2 w-1/2 h-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="border mb-4 p-2 w-1/2"
            />
            <input
              id={passwordId}
              type="password"
              placeholder="Contraseña"
              className="border mb-4 p-2 w-1/2"
              aria-describedby={error ? errorId : undefined}
            />
            <input
              id={confirmId}
              type="password"
              placeholder="confirma contraseña"
              className="border mb-4 p-2 w-1/2"
              aria-describedby={error ? errorId : undefined}
            />
            <button
              type="submit"
              className="bg-0056B3 text-f5f5dc px-4 py-2 w-2/12"
            >
              Registrarse
            </button>
            <button
              onClick={handleCloseModal}
              className="absolute right-8 p-2 bg-0056B3 px-4 py-2 rounded-full text-f5f5dc hover:bg-00449B"
            >
              <Regresar />
            </button>
            {error && (
              <p
                id={errorId}
                role="alert"
                className="text-red-500 text-xs font-bold mt-2 mb-4"
              >
                las contraseñas no coinciden
              </p>
            )}
          </form>
        </div>
      </div>
    )
  )
}

export default Register
