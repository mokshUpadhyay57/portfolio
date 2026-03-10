import { useParams, Link, useNavigate } from "react-router-dom";
import projects from "../components/data/projectsData";
import useSEO from "../hooks/useSEO";
import { Github, Globe, Smartphone, ArrowLeft, ChevronRight } from "lucide-react";
import "./ProjectDetailPage.css";
import { useEffect } from "react";

function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="not-found-container">
        <h2>Project not found</h2>
        <Link to="/projects" className="btn btn-primary">Back to Projects</Link>
      </div>
    );
  }

  const ogImageUrl = `${window.location.origin}/.netlify/functions/og-image?title=${encodeURIComponent(
    project.title
  )}&category=${encodeURIComponent(project.category[0])}`;

  useSEO({
    title: project.title,
    description: project.description,
    keywords: `${project.title}, ${project.tech.join(", ")}, Moksh Upadhyay Portfolio`,
    ogImage: ogImageUrl,
  });

  return (
    <div className="project-detail-page">
      <div className="detail-container">
        {/* Navigation / Header */}
        <button onClick={() => navigate(-1)} className="back-link">
          <ArrowLeft size={18} /> Back
        </button>

        <header className="detail-header">
          <div className="header-content">
            <h1 className="detail-title">{project.title}</h1>
            <div className="detail-categories">
              {project.category.map((cat, i) => (
                <span key={i} className="detail-cat">{cat}</span>
              ))}
            </div>
          </div>
          <div className="detail-actions">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline">
                <Github size={18} /> GitHub
              </a>
            )}
            {project.website && (
              <a href={project.website} target="_blank" rel="noreferrer" className="btn btn-primary">
                <Globe size={18} /> Live Demo
              </a>
            )}
             {project.android && (
              <a href={project.android} target="_blank" rel="noreferrer" className="btn btn-primary">
                <Smartphone size={18} /> Download App
              </a>
            )}
          </div>
        </header>

        {/* Main Content Grid */}
        <div className="detail-grid">
          {/* Left Column: Context & Tech */}
          <div className="detail-main">
            <section className="detail-section">
              <h2 className="section-title">Overview</h2>
              <p className="section-text">{project.description}</p>
            </section>

            <section className="detail-section">
              <h2 className="section-title">Why I Built This</h2>
              <p className="section-text">{project.whyBuilt}</p>
            </section>

            <section className="detail-section">
              <h2 className="section-title">How It's Built</h2>
              <p className="section-text">{project.howBuilt}</p>
            </section>

            <section className="detail-section">
              <h2 className="section-title">Challenges & Solutions</h2>
              <ul className="problem-list">
                {project.problems.map((prob, i) => (
                  <li key={i} className="problem-item">
                    <ChevronRight size={18} className="accent" />
                    <span>{prob}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right Column: Tech & Visuals */}
          <aside className="detail-sidebar">
            <div className="sidebar-block">
              <h3 className="block-title">Tech Stack</h3>
              <div className="tech-pills">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-pill">{t}</span>
                ))}
              </div>
            </div>

            {project.images && project.images.length > 0 && (
              <div className="sidebar-block">
                <h3 className="block-title">Screenshots</h3>
                <div className="detail-gallery">
                  {project.images.map((img, i) => (
                    <img key={i} src={img} alt={`${project.title} screenshot ${i+1}`} loading="lazy" />
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailPage;
