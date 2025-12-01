import { create } from "zustand"

// Tipamos los idiomas soportados para un manejo más limpio y seguro del código
type Language = "es" | "en" | "fr" | "de" | "ko" | "ja"

// Interfaz que define la estructura del store de idioma
// language: almacena el idioma actual
// setLanguage: función para actualizar el idioma
interface LanguageStore {
  language: Language
  setLanguage: (language: Language) => void
}

// Se crea el store llamando la interfaz LanguageStore
const useLanguageStore = create<LanguageStore>((set) => {
  // Obtenemos el idioma guardado en localStorage, si existe; de lo contrario usamos "es" por defecto
  const savedLanguage = localStorage.getItem("language")
  const language: Language = ["es", "en", "fr", "de", "ko", "ja"].includes(
    savedLanguage ?? ""
  )
    ? (savedLanguage as Language)
    : "es"

  // Definimos el estado y la función para actualizar el idioma
  // setLanguage actualiza el store y persiste el idioma en localStorage
  return {
    language,
    setLanguage: (lang: Language) => {
      localStorage.setItem("language", lang)
      set({ language: lang })
    },
  }
})

export default useLanguageStore
