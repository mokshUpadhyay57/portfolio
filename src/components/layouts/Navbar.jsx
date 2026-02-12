import "./Navbar.css";
import ThemeToggle from "../toggles/ThemeToggle";
import { NavLink } from "react-router-dom";

function Navbar({darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-base">moksh</span>
        <span className="brand-accent">codes</span>
      </div>

      <ul className="navbar-menu">
  <li className="nav-item">
    <NavLink to="/" end className={({ isActive }) =>
      isActive ? "active" : ""
    }>
      Home
    </NavLink>
  </li>

  <li className="nav-item">
    <NavLink to="/projects" className={({ isActive }) =>
      isActive ? "active" : ""
    }>
      Projects
    </NavLink>
  </li>

  <li className="nav-item">
    <NavLink to="/services" className={({ isActive }) =>
      isActive ? "active" : ""
    }>
      Services
    </NavLink>
  </li>

  <li className="nav-item">
    <NavLink to="/contact" className={({ isActive }) =>
      isActive ? "active" : ""
    }>
      Contact
    </NavLink>
  </li>

  <li className="nav-cta">Hire Me</li>

  <li className="nav-toggle">
    <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
  </li>
</ul>

    </nav>
  );
}

export default Navbar;
