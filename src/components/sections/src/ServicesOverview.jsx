import { Link } from "react-router-dom";
import "../../sections/styles/ServicesOverview.css";
import { servicesData } from "../../data/serviceData";

const ServicesOverview = () => {
  return (
    <section className="services-overview section" id="services">
      <div className="services-overview-container">
        <h2 className="services-overview-title">
          My <span className="accent">Services</span>
        </h2>
        <p className="services-overview-intro">
          I provide end-to-end solutions for businesses and startups. Here's how I can help you.
        </p>

        <div className="services-overview-grid">
          {servicesData.slice(0, 3).map((service, index) => (
            <div key={index} className="services-overview-card">
              <h3 className="services-overview-card-title">{service.title}</h3>
              <p className="services-overview-card-subtitle">{service.subtitle}</p>
              <Link to="/services" className="services-overview-link">
                Learn More &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
