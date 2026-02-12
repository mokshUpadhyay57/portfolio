import { Sun, Moon } from "lucide-react";
import "./ThemeToggle.css";

function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <div className="theme-toggle">
      <Sun
        size={24}
        strokeWidth={2}
        className={`icon sun ${!darkMode ? "active" : ""}`}
        onClick={() => setDarkMode(false)}
      />

      <Moon
        size={24}
        strokeWidth={2}
        className={`icon moon ${darkMode ? "active" : ""}`}
        onClick={() => setDarkMode(true)}
      />
    </div>
  );
}

export default ThemeToggle;
