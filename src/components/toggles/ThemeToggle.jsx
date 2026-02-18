import { Sun, Moon } from "lucide-react";
import "./ThemeToggle.css";

function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
      />
      <span className="slider round">
        <Sun size={16} strokeWidth={2} className="slider-icon sun-to-light-icon" />
        <Moon size={16} strokeWidth={2} className="slider-icon moon-to-dark-icon" />
      </span>
    </label>
  );
}

export default ThemeToggle;
