import "./AboutPage.css";
import profileImg from "../assets/profile.jpg";
import resumePdf from "../assets/Moksh_Upadhyay_1.7_Experience.pdf";

function AboutPage() {
  return (
    <section className="about section light" id="about">
      <div className="about-container">

        <div className="about-grid">

          {/* Left Side – Image */}
          <div className="about-image">
            <img src={profileImg} alt="Moksh Upadhyay" />
          </div>

          {/* Right Side – Content */}
          <div className="about-content">
            <h1 className="about-title">
              About <span className="accent">Me</span>
            </h1>

            <p>
              <strong>Software Developer</strong> with <strong>1.7+ years</strong> of professional experience working on production-grade backend systems. I primarily build and maintain scalable <strong>REST APIs using Java and Spring Boot</strong>, while debugging live production issues, analyzing system behavior, and optimizing performance for stability and low response times.
            </p>

            <p>
              My experience includes <strong>Spring MVC, Spring Boot, Hibernate, and JDBC</strong>, along with <strong>MySQL and PostgreSQL</strong> for query optimization, indexing, and transaction management. I implement authentication and authorization using <strong>Spring Security and JWT</strong>, handle structured exception management, and manage third-party API integrations in production environments.
            </p>

            <p>
              I also have exposure to building <strong>native and hybrid applications</strong>, as well as web applications and websites with admin panels. Familiar with <strong>Linux environments</strong>, with working knowledge of <strong>Git and Docker</strong>, focused on writing clean and reliable backend code.
            </p>

            <div className="about-cta">
              <a href={resumePdf} download="Moksh_Upadhyay_Resume.pdf" className="btn btn-primary">
                Download Resume
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutPage;
