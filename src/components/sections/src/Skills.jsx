import "../../sections/styles/Skills.css";
import { useScrollReveal } from "../../../hooks/useScrollReveal";


function Skills() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section 
      ref={ref} 
      className={`skills section ${isVisible ? "animate-in" : "animate-hidden"}`} 
      id="skills"
    >
      <div className="skills-container">
        <h2 className="skills-title">
          Skills <span className="accent">& Technologies</span>
        </h2>

        <div className="skills-grid">
          <div className="skill-card">
            <h4>Backend Development</h4>
            <p className="tech">
              Java · Spring Boot · Spring MVC · Hibernate · REST APIs
            </p>
            <p className="desc">
              Backend services, API design, integrations, production fixes.
            </p>
          </div>

          <div className="skill-card">
            <h4>Databases</h4>
            <p className="tech">
              MySQL · PostgreSQL · MongoDB · SQL · Schema design
            </p>
            <p className="desc">
              Data modeling, queries, performance tuning.
            </p>
          </div>

          <div className="skill-card">
            <h4>Web Development</h4>
            <p className="tech">
              React · JavaScript · Node.js · Express · Django
            </p>
            <p className="desc">
              Web apps and API-driven frontend–backend integration.
            </p>
          </div>

          <div className="skill-card">
            <h4>Mobile Development</h4>
            <p className="tech">
              Flutter · Kotlin · Firebase
            </p>
            <p className="desc">
              Mobile apps with backend connectivity.
            </p>
          </div>

          <div className="skill-card">
            <h4>CI/CD & Version Control</h4>
            <p className="tech">
              Git · GitHub · GitLab · Build automation
            </p>
            <p className="desc">
              Source control, deployments, and workflow automation.
            </p>
          </div>

          <div className="skill-card">
            <h4>Engineering Practices</h4>
            <p className="tech">
              Debugging · Code reviews · Clean code
            </p>
            <p className="desc">
              Working with real production systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
