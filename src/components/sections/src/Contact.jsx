import { Link } from "react-router-dom";
import "../../sections/styles/Contact.css";
import { contactDetails } from "../../data/contactDetails";

function Contact() {
  return (
    <section
      className="contact section light"
      id="contact"
    >
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
          {contactDetails.freelancePlatforms.map((platform, index) => (
            <a
              key={index}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="platform-link"
            >
              {platform.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;

