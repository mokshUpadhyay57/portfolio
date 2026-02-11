import './App.css'
import Navbar from './components/layouts/Navbar.jsx'
import Home from './pages/HomePage.jsx'
import Projects from './pages/ProjectsPage.jsx'
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  )
}

export default App
