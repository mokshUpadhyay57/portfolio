import { useEffect, useState } from "react";
import "./Home.css";

import About from "../components/sections/src/About";
import Skills from "../components/sections/src/Skills";
import Projects from "../components/sections/src/Projects";
import Contact from "../components/sections/src/Contact";

const roles = [
  {
    title: "Java Backend Engineer",
    subtitle: "Building scalable backend systems & REST APIs",
  },
  {
    title: "Web Developer",
    subtitle: "Creating modern, responsive web applications",
  },
  {
    title: "Android Developer",
    subtitle: "Developing mobile apps with Flutter & Kotlin",
  },
];

function Home() {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const lines = [`> ${currentRole.title}`, `> ${currentRole.subtitle}`];

    let timeout;

    const typeLine = (line, i = 0) => {
      if (i <= line.length) {
        setDisplayText(line.slice(0, i));
        timeout = setTimeout(() => typeLine(line, i + 1), 70);
      } else {
        setTimeout(() => {
          if (lineIndex === 0) {
            setLineIndex(1);
          } else {
            setLineIndex(0);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }, 1400);
      }
    };

    typeLine(lines[lineIndex]);

    return () => clearTimeout(timeout);
  }, [roleIndex, lineIndex]);

  return (
    <>
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
            <button className="btn primary">View Projects</button>
            <button className="btn outline">Hire Me</button>
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

      <Projects />

      <Contact />
    </>
  );
}

export default Home;
