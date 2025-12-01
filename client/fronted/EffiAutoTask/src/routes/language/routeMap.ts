// Mapa de rutas traducidas para cada idioma, facilitando la implementación y manejo
// de paths localizados en la aplicación según el idioma del usuario.

export const routeMap = {
  es: {
    home: "Inicio",
    about: "acerca de nosotros", // Mejor: "Acerca de" o "Sobre nosotros" para interfaz
    tasks: "Tareas", // Capitalizar para consistencia con otros idiomas
    login: "Iniciar sesión", // Minúscula en "sesión" para consistencia
    register: "Registrar",
  },
  en: {
    home: "Home",
    about: "About",
    tasks: "Tasks",
    login: "Login",
    register: "Register",
  },
  fr: {
    home: "Accueil",
    about: "À propos",
    tasks: "Tâches",
    login: "Connexion",
    register: "Inscription",
  },
  de: {
    home: "Startseite",
    about: "Über uns", // Más natural que solo "Über"
    tasks: "Aufgaben",
    login: "Anmelden",
    register: "Registrieren",
  },
  ko: {
    home: "홈",
    about: "소개",
    tasks: "작업",
    login: "로그인",
    register: "등록",
  },
  ja: {
    home: "ホーム",
    about: "概要", // Mejor que "約", que es demasiado literal
    tasks: "タスク",
    login: "ログイン",
    register: "登録",
  },
}
