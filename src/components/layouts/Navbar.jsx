import { useState } from "react";
import "./Navbar.css";
import ThemeToggle from "../toggles/ThemeToggle";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-base">moksh</span>
        <span className="brand-accent">codes</span>
      </div>

      <div className="navbar-right-section">
        <ul className="navbar-links">
          <li className="nav-item">
            <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMobileMenu}>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMobileMenu}>Projects</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMobileMenu}>Services</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMobileMenu}>Contact</NavLink>
          </li>
        </ul>
        <Link to="/contact" className="nav-cta" onClick={closeMobileMenu}>
          Hire Me
        </Link>
        <div className="nav-toggle">
          <ThemeToggle />
        </div>
        <div className="hamburger-menu" onClick={toggleMobileMenu}>
          <Menu size={28} />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <ul className="navbar-menu-overlay">
          <li className="close-menu-button" onClick={closeMobileMenu}>
            <X size={32} />
          </li>
          {/* Mobile menu links */}
          <li className="nav-item">
            <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMobileMenu}>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMobileMenu}>Projects</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMobileMenu}>Services</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMobileMenu}>Contact</NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
