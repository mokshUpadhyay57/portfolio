import "../../sections/styles/Projects.css";


function Projects() {
  return (
    <section className="projects section light" id="projects">
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
              github="https://github.com/yourusername/pet-care"
              android="https://play.google.com/store/apps/details?id=petcare"
            />

            <ProjectCard
              title="Bizzare E-commerce"
              desc="Full-stack e-commerce platform with product management, checkout flow, and secure transactions."
              tech="Django · JavaScript · HTML · CSS · SQLite"
              github="https://github.com/yourusername/bizzare"
              website="https://bizzare.store"
            />

            <ProjectCard
              title="Online Bookstore Backend"
              desc="Backend system focused on APIs, data handling, and backend architecture."
              tech="Spring · REST APIs · SQL"
              comingSoon
            />

            <ProjectCard
              title="Payroll Batch Processor"
              desc="Batch processing application for payroll calculation and scheduled jobs."
              tech="Spring Boot · Spring Batch · SQL"
              comingSoon
            />
          </div>
        </div>

        {/* ADDITIONAL PROJECTS */}
        {/* <div className="projects-group">
          <h3>Additional Projects</h3>

          <div className="projects-grid">
            <ProjectCard
              title="XCom E-commerce (Internship)"
              desc="Worked on backend logic and UI improvements during internship."
              tech="Django · JavaScript · SQLite"
              github="https://github.com/yourusername/xcom"
            />

            <ProjectCard
              title="Lockify"
              desc="Mobile application focused on authentication workflows."
              tech="Flutter · Firebase · Netlify"
              github="https://github.com/yourusername/lockify"
              android="https://play.google.com/store/apps/details?id=lockify"
            />

            <ProjectCard
              title="Esports Tournament App"
              desc="Android application for managing tournaments and matches."
              tech="Kotlin · Firebase"
              github="https://github.com/yourusername/esports"
              android="https://play.google.com/store/apps/details?id=esports"
            />
          </div>
        </div> */}

        {/* MINI PROJECTS */}
        {/* <div className="projects-group mini">
          <h3>Mini Projects</h3>

          <div className="projects-grid mini">
            <ProjectCard
              title="TextWizard"
              desc="Lightweight web utility for text manipulation."
              tech="React · JavaScript · CSS"
              github="https://github.com/yourusername/textwizard"
              website="https://textwizard.netlify.app"
            />
          </div>
        </div> */}
      </div>
       {/* <div className="home-project-cta">
        <Link to="/projects" className="cta-btn outline">
          View All Projects
        </Link>
      </div> */}
    </section>
  );
}

/* REUSABLE PROJECT CARD */
function ProjectCard({ title, desc, tech, github, website, android, comingSoon }) {
  return (
    <div className="project-card">
      <div className="project-image default">
        <span className="project-placeholder-title">{title}</span>
        {comingSoon && <span className="badge">Coming Soon</span>}
      </div>

      <p className="project-desc">{desc}</p>
      <p className="project-tech">{tech}</p>

      <div className="project-actions">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}

        {website && !comingSoon && (
          <a href={website} target="_blank" rel="noopener noreferrer">
            Website
          </a>
        )}

        {android && !comingSoon && (
          <a href={android} target="_blank" rel="noopener noreferrer">
            Android App
          </a>
        )}

        {!github && !website && !android && (
          <span className="disabled">Links Soon</span>
        )}
      </div>
    </div>
  );
}

export default Projects;
