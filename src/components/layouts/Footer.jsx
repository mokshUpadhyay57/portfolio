import { Link } from "react-router-dom";
import "./Footer.css";
import { contactDetails } from "../data/contactDetails";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <h3>Moksh Upadhyay</h3>
            <p>Software Engineer focusing on Backend Systems, API Development, and Full-Stack Applications.</p>
          </div>

          <div className="footer-links-group">
            <h4>Sitemap</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Me</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-links-group seo-links">
            <h4>Expertise</h4>
            <ul>
              <li><Link to="/services/java-spring-boot-development">Java & Spring Boot</Link></li>
              <li><Link to="/services/rest-api-development">REST API Development</Link></li>
              <li><Link to="/services/mvp-development">MVP Development</Link></li>
              <li><Link to="/services/payment-api-integrations">API Integrations</Link></li>
              <li><Link to="/services/react-full-stack-development">Full-Stack Development</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Moksh Upadhyay. All rights reserved.</p>
          <div className="footer-socials">
            {contactDetails.social.map((platform, index) => (
              <a key={index} href={platform.url} target="_blank" rel="noopener noreferrer">
                {platform.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
