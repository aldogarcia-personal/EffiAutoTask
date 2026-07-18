import { useEffect, useState } from "react"

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedMode = localStorage.getItem("landingDarkMode")
    if (savedMode !== null) {
      setDarkMode(JSON.parse(savedMode))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("landingDarkMode", JSON.stringify(darkMode))
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode((prevMode) => !prevMode)

  return { darkMode, toggleDarkMode }
}

export default useDarkMode
