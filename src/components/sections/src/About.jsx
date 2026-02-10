import "../../sections/styles/About.css";

function About() {
  return (
    <section className="about section light" id="about">
      <div className="about-container">
        <h2 className="about-title">
          About <span className="accent">Me</span>
        </h2>

        <div className="about-content">
          <p className="about-intro">
            I’m a Software Development Engineer with a strong focus on backend
            systems and API-driven applications.
          </p>

          <p>
            In my current role, I work on production-grade systems where
            reliability and performance matter. I’ve resolved a large number of
            real-world issues, improved API behavior, and contributed to making
            systems more stable and efficient for everyday use.
          </p>

          <p>
            My primary work involves designing and maintaining backend services,
            handling integrations, and fixing issues that arise in live
            environments. I enjoy working close to the core of a system, where
            small improvements can have a meaningful impact.
          </p>

          <p>
            Alongside backend development, I’ve built web and mobile
            applications, which helps me understand the full product flow. This
            allows me to design backend systems that align well with frontend
            and user needs, rather than treating services in isolation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
