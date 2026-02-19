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
      <Link to="/" className="navbar-brand" onClick={closeMobileMenu}>
        <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="navbar-logo">
          <defs>
            <linearGradient id="logoGradient" x1="0" y1="0" x2="100" y2="100">
              <stop offset="0%" stopColor="var(--accent-primary)" />
              <stop offset="100%" stopColor="var(--accent-primary)" opacity="0.8" />
            </linearGradient>
          </defs>
          <path d="M35 25 L15 50 L35 75" stroke="url(#logoGradient)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M65 25 L85 50 L65 75" stroke="url(#logoGradient)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M58 20 L42 80" stroke="var(--text-primary)" strokeWidth="6" strokeLinecap="round" />
        </svg>
        <div className="brand-text">
          <span className="brand-base">moksh</span>
          <span className="brand-accent">codes</span>
        </div>
      </Link>

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
        <div className="navbar-cta-group">
          <Link to="/contact" className="nav-cta" onClick={closeMobileMenu}>
            Hire Me
          </Link>
          <a href="/resume.pdf" download="Moksh_Upadhyay_Resume.pdf" className="nav-cta resume-nav-cta">
            Resume
          </a>
        </div>
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
          <li className="mobile-cta-item">
            <Link to="/contact" className="nav-cta" onClick={closeMobileMenu}>
              Hire Me
            </Link>
            <a href="/resume.pdf" download="Moksh_Upadhyay_Resume.pdf" className="nav-cta resume-nav-cta" onClick={closeMobileMenu}>
              Resume
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
