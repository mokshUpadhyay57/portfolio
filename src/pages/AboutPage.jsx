import { useState } from "react";
import "./AboutPage.css";
import profileImg from "../assets/profile.jpg";
import resumePdf from "../assets/Moksh_Upadhyay_1.7_Experience.pdf";
import useSEO from "../hooks/useSEO";
import { ChevronDown, ChevronUp } from "lucide-react";

function AboutPage() {
  useSEO({
    title: "About Me",
    description: "Welcome to the portfolio of Moksh Upadhyay, a Java Backend Engineer and Full Stack Developer. Discover projects, services, and technical expertise.",
    keywords: "Moksh Upadhyay, About, Java Backend, Full Stack Developer, Spring Boot, React Portfolio",
    canonical: "https://mokshcodes.netlify.app/about"
  });

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "What types of projects do you typically take on?",
      a: "I focus on developing scalable backend systems using Java and Spring Boot, as well as full-stack web and mobile applications. Whether you need a robust REST API, an MVP to test a new idea, or custom integrations for an existing system, I can help build a reliable solution."
    },
    {
      q: "Do you work with startups or established businesses?",
      a: "Both. I help startups build their initial MVPs rapidly and reliably, while I assist established businesses by optimizing their backend architectures, fixing complex bugs, and building scalable new features."
    },
    {
      q: "How do you handle communication during a project?",
      a: "I believe in transparency and proactive communication. I provide regular updates on progress, actively ask for clarification when needed, and am always available via email or scheduled calls to discuss technical strategies and business goals."
    }
  ];

  return (
    <div className="about-page-wrapper">
      <section className="about section light" id="about">
        <div className="about-container">
          <div className="about-grid">
            {/* Left Side – Image */}
            <div className="about-image">
              <img src={profileImg} alt="Moksh Upadhyay" loading="lazy" />
            </div>

            {/* Right Side – Content */}
            <div className="about-content">
              <h1 className="about-title">
                About <span className="accent">Me</span>
              </h1>

              <div className="availability-badge" style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'var(--bg-secondary)', padding: '0.5rem 1rem', borderRadius: '20px', marginBottom: '1.5rem', border: '1px solid var(--border-color)', fontSize: '0.9rem' }}>
                <span style={{ width: '10px', height: '10px', backgroundColor: '#22c55e', borderRadius: '50%', marginRight: '10px', display: 'inline-block' }}></span>
                Available for freelance opportunities
              </div>

              <p>
                <strong>Software Developer</strong> with <strong>2+ years</strong> of professional software development experience working on production-grade backend systems. I primarily build and maintain scalable <strong>REST APIs using Java and Spring Boot</strong>, while debugging live production issues, analyzing system behavior, and optimizing performance for stability and low response times.
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

      <section className="why-work-with-me section" style={{ padding: '4rem 0', backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem' }}>Why Work With <span className="accent">Me</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ padding: '2rem', backgroundColor: 'var(--bg-primary)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
              <h3 style={{ marginBottom: '1rem' }}>Production-Ready Focus</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>I don't just write code that works on my machine. Having spent 2+ years debugging live systems, I build software that is robust, properly logged, and secure for production environments.</p>
            </div>
            <div style={{ padding: '2rem', backgroundColor: 'var(--bg-primary)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
              <h3 style={{ marginBottom: '1rem' }}>Full-Stack Understanding</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>While my core expertise is backend architecture, my experience building mobile and web apps means I understand exactly what frontend clients need from APIs, preventing friction and saving time.</p>
            </div>
            <div style={{ padding: '2rem', backgroundColor: 'var(--bg-primary)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
              <h3 style={{ marginBottom: '1rem' }}>Transparent Communication</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>I bridge the gap between technical constraints and business goals. I keep stakeholders updated, explain technical decisions clearly, and always aim to deliver on expectations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="how-i-work section" style={{ padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem' }}>How I <span className="accent">Work</span></h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>

            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--accent-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>1</div>
              <div>
                <h3 style={{ marginBottom: '0.5rem' }}>Discovery & Planning</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>We discuss your project requirements, target audience, and business goals. I outline the technical approach and provide a clear roadmap.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--accent-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>2</div>
              <div>
                <h3 style={{ marginBottom: '0.5rem' }}>Architecture & Design</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>I design the database schema, API contracts, and system architecture, ensuring scalability and security are built in from the start.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--accent-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>3</div>
              <div>
                <h3 style={{ marginBottom: '0.5rem' }}>Development & Iteration</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>I build the software in iterative cycles, sharing progress regularly so we can course-correct early if needed.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--accent-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>4</div>
              <div>
                <h3 style={{ marginBottom: '0.5rem' }}>Testing & Delivery</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Rigorous testing for edge cases, performance, and security. Finally, deploying the application and handing over documentation.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="faq section" style={{ padding: '4rem 0', backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem' }}>Frequently Asked <span className="accent">Questions</span></h2>
          <div className="faq-accordion" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item" style={{ backgroundColor: 'var(--bg-primary)', borderRadius: '8px', border: '1px solid var(--border-color)', overflow: 'hidden' }}>
                <button
                  onClick={() => toggleFaq(index)}
                  style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', textAlign: 'left', fontSize: '1.1rem', fontWeight: '600' }}
                >
                  {faq.q}
                  {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {openFaq === index && (
                  <div style={{ padding: '0 1.5rem 1.5rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
