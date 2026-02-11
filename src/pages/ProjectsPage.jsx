import projects from "../components/data/projectsdata";
import ProjectCard from "../components/sections/src/ProjectCard";
import "./ProjectsPage.css";

const ProjectsPage = () => {
  return (
    <div className="projects-grid">
  {projects.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ))}
</div>

  );
};

export default ProjectsPage;
