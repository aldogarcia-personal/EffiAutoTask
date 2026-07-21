import DarkModeToggle from "./DarkModeToggle";
import useDarkMode from "../hooks/useDarkMode";

function Settings() {
  const { darkMode, toggleDarkMode } = useDarkMode()
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Configuraciones</h1>
      <div className="flex flex-col items-center">
        <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} />
      </div>
    </div>
  );
}
export default Settings;
