import SelectLanguage from "./language"
import DropdownUser from "./DropdownUser"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faListCheck,
  faBars,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { useTranslation } from "react-i18next"
// TODO: hacer cambios pertinentes para que el nav sea un sidebar
// TODO: agregar seeciones de navegación nuevas: dashboard, automations, notes, Insights; Task mantenr
// TODO: agregar iconos a cada sección de navegación
// TODO: agregar links a secciones de navegación
// TODO: agregar botón de log out cambiante dependiendo del idioma seleccionado (ejemplo: "Cerrar sesión" para español, "Log out" para inglés, etc.)
// TODO: Crear componentes de la sección de navegación: Dashboard, Automations, Notes, Insights y Task

function sideBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }
  const toggleSearch = () => {
    setOpenSearch(!openSearch)
  }
  const { t } = useTranslation()
  return (
    <div className="flex">
      <div className="flex items-center space-x-4 p-4 justify-center ">
        <button className={`p-1 ${isOpen ? "z-[60]" : "z-0"}`}>
          <FontAwesomeIcon icon={faBars} onClick={toggleDropdown} />
        </button>
        <a
          href="/Dashboard"
          className={`text-0056B3 text-xl font-bold dark:text-f5f5dc ${isOpen ? "translate-x-60" : "translate-x-0"}`}
        >
          EffiAutoTask
        </a>
      </div>
      <div className="flex items-center space-x-4 ml-auto mb-2">
        <DropdownUser userName="aldo" />
        <SelectLanguage />
      </div>

      {isOpen && (
        <nav
          className={`fixed left-0 top-0 h-screen w-64 bg-nav-light dark:bg-nav-dark flex flex-col p-4 shadow-md z-50 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <ul className="flex  flex-col bottom-1 top-4">
            <li className="text-0056B3 no-underline hover:text-gray-300 p-4 dark:text-f5f5dc dark:hover:text-gray-400 flex intems-center gap-2">
              <button onClick={toggleSearch}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <span>{t("nav.search")}</span>
              </button>
            </li>
            <li>
              <a
                href="/Dashboard"
                className="text-0056B3 no-underline hover:text-gray-300 p-4 dark:text-f5f5dc dark:hover:text-gray-400 flex intems-center gap-2"
              >
                <span>{t("nav.dashboard")}</span>
              </a>
            </li>
            <li>
              <a
                href="/Tasks"
                className="text-0056B3 no-underline hover:text-gray-300 p-4 dark:text-f5f5dc dark:hover:text-gray-400 flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faListCheck} />
                <span>{t("nav.tasks")}</span>
              </a>
            </li>
            <li>
              <a
                href="/Automations"
                className="text-0056B3 no-underline hover:text-gray-300 p-4 dark:text-f5f5dc dark:hover:text-gray-400 flex items-center "
              >
                <span>{t("nav.automations")}</span>
              </a>
            </li>
            <li>
              <a
                href="/Insights"
                className="text-0056B3 no-underline hover:text-gray-300 p-4 dark:text-f5f5dc dark:hover:text-gray-400"
              >
                <span>{t("nav.insights")}</span>
              </a>
            </li>
            <li>
              <a
                href="/Notes"
                className="text-0056B3 no-underline hover:text-gray-300 p-4 dark:text-f5f5dc dark:hover:text-gray-400"
              >
                <span>{t("nav.notes")}</span>
              </a>
            </li>
            <li>
              <a
                href="/Notifications"
                className="text-0056B3 no-underline hover:text-gray-300 p-4 dark:text-f5f5dc dark:hover:text-gray-400"
              >
                <span>{t("nav.notifications")}</span>
              </a>
            </li>
            <li>
              <a
                href="/Settings"
                className="text-0056B3 no-underline hover:text-gray-300 p-4 dark:text-f5f5dc dark:hover:text-gray-400"
              >
                <span>{t("nav.settings")}</span>
              </a>
            </li>
          </ul>
        </nav>
      )}
      {openSearch && (
        <div className="fixed left-0 top-4  bg-nav-light dark:bg-nav-dark flex flex-row justify-center items-center p-4 shadow-md z-50 transition-transform duration-300 translate-x-full gap-2">
          <button className="">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <input
            type="text"
            placeholder={t("nav.search")}
            className=" w-128 border-transparent bg-transparent focus:outline-none"
          />
        </div>
      )}
    </div>
  )
}

export default sideBar
