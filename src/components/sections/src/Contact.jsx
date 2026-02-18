import { Link } from "react-router-dom";
import "../../sections/styles/Contact.css";

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">
          Let’s <span className="accent">Work Together</span>
        </h2>

        <p className="contact-intro">
          Have a project or opportunity in mind? I'd love to hear from you.
        </p>

        <Link to="/contact" className="btn primary contact-redirect-btn">
          Contact Me
        </Link>

        {/* OTHER OPTIONS */}
        <div className="contact-platforms">
          <span>Or find me on:</span>
          <a
            href="https://www.upwork.com/freelancers/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="platform-link"
          >
            Upwork
          </a>
          <a
            href="https://www.fiverr.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="platform-link"
          >
            Fiverr
          </a>
          <a
            href="https://yourfreelanceprofile.com"
            target="_blank"
            rel="noopener noreferrer"
            className="platform-link"
          >
            Freelancer
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
