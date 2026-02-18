import { useEffect, useState } from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import useSEO from "../hooks/useSEO";

import About from "../components/sections/src/About";
import Skills from "../components/sections/src/Skills";
import FeaturedProjects from "../components/sections/src/FeaturedProjects";
import Contact from "../components/sections/src/Contact";

const roles = [
  {
    title: "Java Backend Engineer",
    subtitle: "Building scalable backend systems & REST APIs",
    stack: "Java | Spring Boot | MySQL", 
  },
  {
    title: "Web Developer",
    subtitle: "Creating modern, responsive web applications",
    stack: "React | Node.js | Express.js | Tailwind CSS",

  },
  {
    title: "Android Developer",
    subtitle: "Developing mobile apps with Flutter & Kotlin",
    stack: "Kotlin | FLutter | Firebase | React Native",
  },
];

function Home() {
  useSEO({
    title: "Home",
    description: "Welcome to the portfolio of Moksh Upadhyay, a Java Backend Engineer and Full Stack Developer. Discover projects, services, and technical expertise.",
    keywords: "Moksh Upadhyay, Home, Java Backend, Full Stack Developer, Spring Boot, React Portfolio",
    canonical: "https://moksh.codes/"
  });
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const fullText = `${currentRole.title}\n> ${currentRole.subtitle}\n> ${currentRole.stack}`;
    
    const typingSpeed = isDeleting ? 30 : 60;
    const pauseDuration = isDeleting ? 500 : 2500;

    const handleTyping = () => {
      if (!isDeleting && displayText.length < fullText.length) {
        // Typing
        setDisplayText(fullText.slice(0, displayText.length + 1));
      } else if (isDeleting && displayText.length > 0) {
        // Deleting
        setDisplayText(fullText.slice(0, displayText.length - 1));
      } else if (!isDeleting && displayText.length === fullText.length) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), pauseDuration);
        return;
      } else if (isDeleting && displayText.length === 0) {
        // Switch to next role
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        return;
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <section className="hero section">
        {/* LEFT */}
        <div className="hero-left">
          <span className="hero-intro">Hi, I’m</span>

          <h1 className="hero-title">
            Moksh <span className="accent">Upadhyay</span>
          </h1>

          <h2 className="hero-role">Java Backend Engineer</h2>

          <p className="hero-description">
            I design and build scalable backend systems, REST APIs, and
            full-stack applications using Java, Spring Boot, and modern
            technologies.
          </p>

          <div className="hero-actions">
            <Link to="/projects">
              <button className="btn primary">View Projects</button>
            </Link>
            <div className="cta-group">
              <Link to="/contact">
                <button className="btn outline">Hire Me</button>
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <div className="terminal">
            <pre>{displayText}</pre>
          </div>
        </div>
      </section>

      <About />

      <Skills />

      <FeaturedProjects />

      <Contact />
    </div>
  );
}

export default Home;
