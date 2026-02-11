import React from "react";
import "../styles/ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="flip-card">
  <div className="flip-card-inner">

    {/* FRONT */}
    <div className="flip-card-front">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>

    {/* BACK */}
    <div className="flip-card-back">
      <div className="tech-stack">
        {project.tech.map((item, index) => (
          <span key={index} className="tech-badge">
            {item}
          </span>
        ))}
      </div>

      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="github-btn"
      >
        View Code
      </a>
    </div>

  </div>
</div>

  );
};

export default ProjectCard;
