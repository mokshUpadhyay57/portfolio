import { useContext } from "react";
import { Sun, Moon } from "lucide-react";
import { ThemeContext } from "../../context/ThemeContext";
import "./ThemeToggle.css";

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isDark}
        onChange={toggleTheme}
      />
      <span className="slider round">
        <Sun size={16} strokeWidth={2} className="slider-icon sun-to-light-icon" />
        <Moon size={16} strokeWidth={2} className="slider-icon moon-to-dark-icon" />
      </span>
    </label>
  );
}

export default ThemeToggle;
