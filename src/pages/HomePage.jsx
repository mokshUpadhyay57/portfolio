import { useEffect, useState } from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import useSEO from "../hooks/useSEO";
import Timeline from "../components/sections/src/Timeline";
import ServicesOverview from "../components/sections/src/ServicesOverview";
import Skills from "../components/sections/src/Skills";
import FeaturedProjects from "../components/sections/src/FeaturedProjects";
import Recommendations from "../components/sections/src/Recommendations";
import Contact from "../components/sections/src/Contact";

const roles = [
  {
    title: "Software Engineer",
    subtitle: "Building scalable backend architectures...",
    stack: "Java | Spring Boot | MySQL", 
  },
  {
    title: "Web Solutions",
    subtitle: "Delivering robust web applications...",
    stack: "React | Node.js | Tailwind",

  },
  {
    title: "Mobile Development",
    subtitle: "Creating seamless mobile experiences...",
    stack: "Kotlin | Flutter | React Native",
  },
];

function Home() {
  useSEO({
    title: "Home",
    description: "Welcome to the portfolio of Moksh Upadhyay, a Java Backend Engineer and Full Stack Developer. Discover projects, services, and technical expertise.",
    keywords: "Moksh Upadhyay, Home, Java Backend, Full Stack Developer, Spring Boot, React Portfolio",
    canonical: "https://mokshcodes.netlify.app/",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Moksh Upadhyay",
      "jobTitle": "Java Backend Engineer",
      "url": "https://mokshcodes.netlify.app/",
      "sameAs": [
        "https://github.com/mokshUpadhyay57",
        "https://www.linkedin.com/in/mokshupadhyay57"
      ],
      "knowsAbout": [
        "Java",
        "Spring Boot",
        "React",
        "Node.js",
        "Flutter",
        "Kotlin",
        "MySQL",
        "Full Stack Development",
        "REST APIs"
      ],
      "description": "Moksh Upadhyay is a Java Backend Engineer specializing in building scalable backend systems, REST APIs, and full-stack applications."
    }
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

          <h3 className="hero-subheading">I build web apps, MVPs, APIs and backend systems for startups</h3>

          <p className="hero-description">
            I help businesses build scalable backend systems, high-performance APIs, and robust full-stack applications that drive growth and deliver exceptional user experiences.
          </p>

          <div className="hero-stat-badge">
            <span className="accent" style={{ fontWeight: 'bold' }}>2+ years</span> production experience
          </div>

          <div className="hero-actions">
            <Link to="/contact">
              <button className="btn btn-primary">Start a Project</button>
            </Link>
            <div className="cta-group">
              <Link to="/projects">
                <button className="btn btn-outline">View My Work</button>
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <div className="terminal">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
              </div>
              <span className="terminal-title">jules@dev ~</span>
            </div>
            <div className="terminal-body">
              <pre>{displayText}</pre>
            </div>
          </div>
        </div>
      </section>

      <ServicesOverview />
      <Timeline />
      <Skills />
      <FeaturedProjects />
      <Recommendations />
      <Contact />

    </div>
  );
}

export default Home;
