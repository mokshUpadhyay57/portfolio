import "./AboutPage.css";
// import profileImg from "../../assets/profile.jpg"; // add your image here

function AboutPage() {
  return (
    <section className="about section light" id="about">
      <div className="about-container">

        <div className="about-grid">

          {/* Left Side – Image */}
          {/* <div className="about-image">
            <img src={profileImg} alt="Profile" />
          </div> */}

          {/* Right Side – Content */}
          <div className="about-content">
            <h2 className="about-title">
              About <span className="accent">Me</span>
            </h2>

            <p>
              I am a Backend-Focused Software Development Engineer with 1.5+ years 
              of professional experience working on production-grade systems. 
              My primary focus is building scalable REST APIs and strengthening 
              backend architectures that operate reliably under real-world load. 
              I regularly debug live production issues, analyze system behavior, 
              and optimize performance to ensure stability and fast response times.
            </p>

            <p>
              My core stack includes Java and Spring Boot, along with Spring MVC, 
              Spring Data JPA, Hibernate, and JDBC for building clean and 
              maintainable service layers. I work extensively with MySQL and 
              PostgreSQL, focusing on query optimization, indexing strategies, 
              transaction handling, and database performance tuning. I implement 
              secure authentication flows using Spring Security and JWT, design 
              structured exception handling, and manage third-party integrations 
              in high-impact environments.
            </p>

            <p>
              Beyond backend systems, I have exposure to Android and web 
              application development, which helps me design APIs aligned with 
              real frontend workflows. I work in Linux-based environments using 
              Git, Maven, Gradle, Docker (basic), and JUnit/Mockito for testing. 
              My approach is practical and impact-driven — build systems that are 
              scalable, secure, and resilient in production.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutPage;
