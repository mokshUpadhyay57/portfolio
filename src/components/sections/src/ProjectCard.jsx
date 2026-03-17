import "../styles/ProjectCard.css";
import { Github, Globe, Smartphone, ExternalLink, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const { 
    id,
    title, 
    description, 
    category = [], 
    tech = [], 
    outcomes = [],
    github, 
    website, 
    android, 
    image, 
    comingSoon 
  } = project;

  return (
    <div className="project-tile">
      <Link to={`/projects/${id}`} className="project-card-link-overlay" aria-label={`View details for ${title}`}></Link>
      
      {image ? (
        <div className="project-image-container">
          <img 
            src={image} 
            alt={title} 
            className="project-image" 
            loading="lazy"
          />
          {comingSoon && <span className="badge">Coming Soon</span>}
        </div>
      ) : (
        <div className="project-image-placeholder">
          <span>{title}</span>
          {comingSoon && <span className="badge">Coming Soon</span>}
        </div>
      )}
      
      <div className="project-content-wrapper">
        <h3 className="project-title">{title}</h3>

        <div className="project-tags">
          {category.map((tag, index) => (
            <span key={index} className="project-tag">
              {tag}
            </span>
          ))}
        </div>

        <p className="project-desc">{description}</p>

        {outcomes && outcomes.length > 0 && (
          <div className="project-impact-highlight">
            <Zap size={14} className="accent" />
            <span>{outcomes[0]}</span>
          </div>
        )}

        <div className="tech-stack">
          {tech.slice(0, 5).map((item, index) => (
            <span key={index} className="tech-badge">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="project-footer">
        <Link to={`/projects/${id}`} className="view-details-btn">
          View Details <ExternalLink size={14} />
        </Link>
        
        <div className="project-actions">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="action-btn github" onClick={(e) => e.stopPropagation()}>
              <Github size={16} /> Code
            </a>
          )}

          {website && !comingSoon && (
            <a href={website} target="_blank" rel="noopener noreferrer" className="action-btn live" onClick={(e) => e.stopPropagation()}>
              <Globe size={16} /> Live
            </a>
          )}

          {android && !comingSoon && (
            <a href={android} target="_blank" rel="noopener noreferrer" className="action-btn android" onClick={(e) => e.stopPropagation()}>
              <Smartphone size={16} /> App
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
