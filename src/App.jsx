import './App.css'
import Navbar from './components/layouts/Navbar.jsx'
import Home from './pages/HomePage.jsx'
import Projects from './pages/ProjectsPage.jsx'
import ServicePage from "./pages/ServicePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import { Routes, Route } from "react-router-dom";       

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Catch-all route for 404 error page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
