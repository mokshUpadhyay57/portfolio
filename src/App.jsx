import { useState, useEffect } from "react";
import './App.css'
import Navbar from './components/layouts/Navbar.jsx'
import Home from './pages/HomePage.jsx'
import Projects from './pages/ProjectsPage.jsx'
import ServicePage from "./pages/ServicePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import { Routes, Route } from "react-router-dom";       

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
  document.documentElement.setAttribute(
    "data-theme",
    darkMode ? "dark" : "light"
  );
}, [darkMode]);


  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  )
}

export default App
