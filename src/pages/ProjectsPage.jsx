import projects from "../components/data/projectsData";
import ProjectCard from "../components/sections/src/ProjectCard";
import useSEO from "../hooks/useSEO";
import "./ProjectsPage.css";

const ProjectsPage = () => {
  useSEO({
    title: "Projects",
    description: "Explore the portfolio of Moksh Upadhyay. Showcase of Java Backend systems, Spring Boot APIs, React web apps, and Mobile applications.",
    keywords: "Java Projects, Spring Boot, React, Full Stack, Portfolio, Moksh Upadhyay",
    canonical: "https://mokshcodes.netlify.app/projects"
  });
  
  return (
    <div className="projects-page">
      <div className="projects-header">
        <h1>Projects <span className="accent">Dashboard</span></h1>
        <p>Backend systems, mobile applications and full-stack platforms.</p>
      </div>

      <div className="projects-stats">
         <div className="stat-card">
    <h3>{projects.length}</h3>
    <span>Projects Delivered</span>
  </div>

  <div className="stat-card">
    <h3>Java & SpringBoot</h3>
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
