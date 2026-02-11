

const projects = [
  { id: 1, title: 'Project One', description: 'Description of Project One' },
  { id: 2, title: 'Project Two', description: 'Description of Project Two' },
  { id: 3, title: 'Project Three', description: 'Description of Project Three' },
];

const Project = () => {
  return (
    <div className="project-page">
      <h1>View All Projects</h1>
      <div className="project-list">
        {projects.map(project => (
          <div key={project.id} className="project-item">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;