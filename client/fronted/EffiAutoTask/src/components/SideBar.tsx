import SelectLanguage from "./language"
import DropdownUser from "./DropdownUser"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faListCheck } from "@fortawesome/free-solid-svg-icons"

// TODO: hacer cambios pertinentes para que el nav sea un sidebar
// TODO: agregar seeciones de navegación nuevas: dashboard, automations, notes, Insights; Task mantenr
// TODO: agregar iconos a cada sección de navegación
// TODO: agregar links a secciones de navegación
// TODO: agregar botón de log out cambiante dependiendo del idioma seleccionado (ejemplo: "Cerrar sesión" para español, "Log out" para inglés, etc.)
// TODO: Crear componentes de la sección de navegación: Dashboard, Automations, Notes, Insights y Task

function sideBar() {
  return (
    <nav className="bg-nav-light dark:bg-nav-dark flex justify-between items-center p-4 shadow-md">
      <div className="flex items-center space-x-4">
        <a
          href="/Dashboard"
          className="text-0056B3 text-xl font-bold dark:text-f5f5dc"
        >
          EffiAutoTask
        </a>
      </div>
      <ul className="flex space-x-6">
        <li>
          <a
            href="/Dashboard"
            className="text-0056B3 no-underline hover:text-gray-300 p-4 dark:text-f5f5dc dark:hover:text-gray-400 flex intems-center gap-2"
          >
            Dashboard
          </a>
        </li>
        <li>
          <a
            href="/Tasks"
            className="text-0056B3 no-underline hover:text-gray-300 p-4 dark:text-f5f5dc dark:hover:text-gray-400 flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faListCheck} />
            <span>Tasks</span>
          </a>
        </li>
        <li>
          <a
            href="/Automations"
            className="text-0056B3 no-underline hover:text-gray-300 p-4 dark:text-f5f5dc dark:hover:text-gray-400"
          >
            Automations
          </a>
        </li>
        <li>
          <a
            href="/Insights"
            className="text-0056B3 no-underline hover:text-gray-300 p-4 dark:text-f5f5dc dark:hover:text-gray-400"
          >
            Insights
          </a>
        </li>
        <li>
          <a
            href="/Notes"
            className="text-0056B3 no-underline hover:text-gray-300 p-4 dark:text-f5f5dc dark:hover:text-gray-400"
          >
            Notes
          </a>
        </li>
        <li>
          <a
            href="/Notifications"
            className="text-0056B3 no-underline hover:text-gray-300 p-4 dark:text-f5f5dc dark:hover:text-gray-400"
          >
            Notifications
          </a>
        </li>
        <li>
          <a
            href="/Settings"
            className="text-0056B3 no-underline hover:text-gray-300 p-4 dark:text-f5f5dc dark:hover:text-gray-400"
          >
            Settings
          </a>
        </li>
      </ul>
      <div className="flex items-center space-x-4">
        <SelectLanguage />
        <DropdownUser userName="aldo" />
      </div>
    </nav>
  )
}

export default sideBar
