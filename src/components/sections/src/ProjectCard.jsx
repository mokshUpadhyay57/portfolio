import "../styles/ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-tile">
      <h3 className="project-title">{project.title}</h3>

      <div className="project-tags">
        {project.category.map((tag, index) => (
          <span key={index} className="project-tag">
            {tag}
          </span>
        ))}
      </div>

      <p className="project-desc">{project.description}</p>

      {/* <p>{project.features.length > 0 ? `Features: ${project.features.slice(0, 3).join(', ')}` : ''}</p> */}

      <div className="tech-stack">
        {project.tech.slice(0, 5).map((item, index) => (
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
        View Repository →
      </a>
    </div>
  );
};

export default ProjectCard;
