import { useEffect, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"
// importando deendencias de gsap
import { gsap } from "gsap"

interface DarkModeToggleProps {
  darkMode: boolean
  onToggle: () => void
}

function DarkModeToggle({ darkMode, onToggle }: DarkModeToggleProps) {
  const circleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (darkMode) {
      gsap.to(circleRef.current, {
        x: 28,
        duration: 0.3,
        ease: "power2.inOut",
      })
    } else {
      gsap.to(circleRef.current, {
        x: 0,
        duration: 0.3,
        ease: "power2.inOut",
      })
    }
  }, [darkMode])

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={darkMode}
      className="flex items-center rounded-full focus:outline-none focus:ring-2 focus:ring-primary/60"
    >
      <div
        className={`relative w-14 h-8 rounded-full transition-colors duration-300 border border-black ${darkMode ? "bg-primary-hover shadow-[0_8px_20px_-10px_rgba(15,23,42,0.45)]" : "bg-white shadow-[0_8px_20px_-10px_rgba(15,23,42,0.1)]"}`}
      >
        <div
          ref={circleRef}
          className={`absolute top-1 left-1 w-6 h-6 rounded-full shadow-md flex items-center justify-center ${darkMode ? "bg-primary" : "bg-white"}`}
          style={{ x: 0 }}
        >
          <FontAwesomeIcon
            icon={darkMode ? faMoon : faSun}
            className={`${darkMode ? "text-white" : "text-yellow-500"}`}
          />
        </div>
      </div>
    </button>
  )
}

export default DarkModeToggle
