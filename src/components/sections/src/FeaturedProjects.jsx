import "../../sections/styles/FeaturedProjects.css";
import { Link } from "react-router-dom";
import projects from "../../data/projectsData";
import ProjectCard from "./ProjectCard";

function FeaturedProjects() {
  const featuredProjects = projects.filter(project => project.featured).slice(0, 2);

  return (
    <section className="projects section light" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">
          Projects <span className="accent">& Work</span>
        </h2>

        <div className="projects-group">
          <div className="projects-grid featured">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
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

export default FeaturedProjects;
