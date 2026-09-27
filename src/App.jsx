import './App.css'
import Navbar from './components/layouts/Navbar.jsx'
import Home from './pages/HomePage.jsx'
import About from './pages/AboutPage.jsx'
import Projects from './pages/ProjectsPage.jsx'
import ServicePage from "./pages/ServicePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import ProjectDetailPage from "./pages/ProjectDetailPage.jsx";
import SEOLandingPage from "./pages/SEOLandingPage.jsx";
import BackToTop from "./components/layouts/BackToTop.jsx";
import Footer from "./components/layouts/Footer.jsx";
import { Routes, Route } from "react-router-dom";       

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/services/:serviceId" element={<SEOLandingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<About/>} />
          {/* Catch-all route for 404 error page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop/>
    </div>
  )
}

export default App
