import "./Navbar.css";


const handleProjectsClick = () => {
  if (window.location.pathname === "/") {
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth" });
  } else {
    window.location.href = "/#projects";
  }
};

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-base">moksh</span>
        <span className="brand-accent">codes</span>
      </div>

      

      <ul className="navbar-menu">
        <li className="nav-item active">Home</li>
        <li className="nav-item" onClick={handleProjectsClick}>Projects</li>
        <li className="nav-item">Services</li>
        <li className="nav-item">Contact</li>
        <li className="nav-cta">Hire Me</li>
      </ul>
    </nav>
  );
}

export default Navbar;
