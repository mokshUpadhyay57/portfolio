import projects from "../components/data/projectsdata";
import ProjectCard from "../components/sections/src/ProjectCard";
import "./ProjectsPage.css";
const ProjectsPage = () => {
  
  return (
    <div className="projects-page">
      <div className="projects-header">
        <h1>Projects Dashboard</h1>
        <p>Backend systems, mobile applications and full-stack platforms.</p>
      </div>

      <div className="projects-stats">
         <div className="stat-card">
    <h3>{projects.length}</h3>
    <span>Projects Delivered</span>
  </div>

  <div className="stat-card">
    <h3>Java & Spring</h3>
    <span>Primary Focus</span>
  </div>

  <div className="stat-card">
    <h3>Android & Web</h3>
    <span>Freelance Development</span>
  </div>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
