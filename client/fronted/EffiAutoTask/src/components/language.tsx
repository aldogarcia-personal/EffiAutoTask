// TODO: solucionar el problema de selección de idioma japones (se selecciona español al presionar la opcion de japones en el selector)
import { useTranslation } from "react-i18next"
import { Language } from "./icons"

function SelectLanguage() {
  const { i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    localStorage.setItem("language", lng)
  }

  return (
    <div className="relative flex items-center bg-nav-light dark:bg-nav-dark text-0056B3 dark:text-f5f5dc ">
      <Language />
      <select
        value={i18n.language}
        onChange={(e) => changeLanguage(e.target.value)}
        className="pr-8 bg-nav-light dark:bg-nav-dark text-0056B3 dark:text-f5f5dc focus:outline-none focus:ring-2 focus:ring-00449B"
      >
        <option value="es">Español</option>
        <option value="en">English</option>
        <option value="fr">français</option>
        <option value="ko">한국인</option>
        <option value="de">Deutsch</option>
        <option value="ja">日本語</option>
      </select>
    </div>
  )
}

export default SelectLanguage
