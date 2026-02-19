import "../../sections/styles/FeaturedProjects.css";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../../../hooks/useScrollReveal";
import { Github, ExternalLink, Globe, Smartphone } from "lucide-react";

function FeaturedProjects() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section 
      ref={ref} 
      className={`projects section light ${isVisible ? "animate-in" : "animate-hidden"}`} 
      id="projects"
    >
      <div className="projects-container">
        <h2 className="projects-title">
          Projects <span className="accent">& Work</span>
        </h2>

        {/* FEATURED PROJECTS */}
        <div className="projects-group">
          {/* <h3>Featured Projects</h3> */}

          <div className="projects-grid featured">
            <ProjectCard
              title="Pet Care & Aid"
              desc="Mobile application for pet owners with care utilities, e-commerce features, and integrated payments."
              tech="Flutter · Firebase · Payments"
              github="https://github.com/mokshUpadhyay57/PetCareApp"
            />

            <ProjectCard
              title="Bizzare E-commerce"
              desc="Full-stack e-commerce platform with product management, checkout flow, and secure transactions."
              tech="Django · JavaScript · HTML · CSS · SQLite"
              github="https://github.com/mokshUpadhyay57/BizarreEcom"
            />
            <ProjectCard
              title="Lockify"
              desc="Mobile application focused on authentication workflows."
              tech="Flutter · Firebase · Netlify"
              github="https://github.com/mokshUpadhyay57/LockifyFrontend"
            />
            <ProjectCard
              title="TextWizard"
              desc="Lightweight web utility for text manipulation."
              tech="React · JavaScript · CSS"
              github="https://github.com/mokshupadhyay57/textwizard"
              website="https://txtwiz.netlify.app"
            />
          </div>
        </div>
      </div>
      <div className="projects-more">
        <Link to="/projects" className="projects-more-link">
          View More Projects →
        </Link>
      </div>
    </section>
  );
}

/* REUSABLE PROJECT CARD */
function ProjectCard({
  title,
  desc,
  tech,
  github,
  website = "",
  android = "",
  comingSoon,
}) {
  return (
    <div className="project-card">
      <div className="project-image default">
        <span className="project-placeholder-title">{title}</span>
        {comingSoon && <span className="badge">Coming Soon</span>}
      </div>

      <p className="project-desc">{desc}</p>
      
      <div className="tech-stack">
        {tech.split(" · ").map((item, index) => (
          <span key={index} className="tech-badge">
            {item}
          </span>
        ))}
      </div>

      <div className="project-actions">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            <Github size={18} />
            Code
          </a>
        )}

        {website && !comingSoon && (
          <a href={website} target="_blank" rel="noopener noreferrer">
            <Globe size={18} />
            Live Demo
          </a>
        )}

        {android && !comingSoon && (
          <a href={android} target="_blank" rel="noopener noreferrer">
            <Smartphone size={18} />
            App
          </a>
        )}

        {!github && !website && !android && (
          <span className="disabled">Links Soon</span>
        )}
      </div>
    </div>
  );
}

export default FeaturedProjects;
