import "../../sections/styles/About.css";
import { useScrollReveal } from "../../../hooks/useScrollReveal";

function About() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section 
      ref={ref} 
      className={`about section light ${isVisible ? "animate-in" : "animate-hidden"}`} 
      id="about"
    >
      <div className="about-container">
        <h2 className="about-title">
          About <span className="accent">Me</span>
        </h2>

        <div className="about-content">
          <p className="about-intro">
            Backend-focused Software Development Engineer with 1.5+ years of
            professional experience building and optimizing production-grade
            systems and API-driven applications.
          </p>

          <p>
            In my current role, I work on production-grade systems where
            reliability, performance, and stability are critical. I regularly
            resolve real-world production issues, enhance API behavior, and
            contribute to strengthening overall system robustness in live
            environments.
          </p>
          <p>
            My core responsibilities include designing and maintaining scalable
            RESTful services, optimizing database queries, handling third-party
            integrations, and strengthening backend architecture in high-impact
            environments. I regularly debug real-world production scenarios
            where precision and fast resolution are critical.
          </p>

          <p>
            During my internship, I worked on OCR system improvement by
            preparing structured training datasets and refining Tesseract-based
            text recognition workflows. I also collaborated on creating image
            datasets for YOLO model training, contributing to better detection
            accuracy and document digitization performance.
          </p>

          <p>
            My core strength is Java backend engineering; however, I also build
            Android and web applications, enabling me to deliver complete,
            end-to-end solutions. This cross-platform experience enhances my
            backend decisions with practical insight into frontend behavior and
            real user workflows.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
