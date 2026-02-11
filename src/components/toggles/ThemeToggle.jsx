import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="toggle-wrapper" onClick={toggleTheme}>
      <div className={`toggle-switch ${theme === "light" ? "light" : ""}`}>
        <div className="toggle-circle" />
      </div>
    </div>
  );
};

export default ThemeToggle;
