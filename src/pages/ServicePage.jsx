// src/pages/ServicePage.jsx
import { Link } from "react-router-dom";
import { servicesData } from "../components/data/serviceData";
import useSEO from "../hooks/useSEO";
import "./ServicePage.css";

const ServicePage = () => {
  useSEO({
    title: "Services",
    description: "Professional software development services by Moksh Upadhyay. Backend development, Mobile app development, and Full Stack solutions.",
    keywords: "Software Services, Backend Development, Mobile Apps, Full Stack, Hire Java Developer",
    canonical: "https://moksh.codes/services"
  });
  // Simple SVG Icons mapping
  const getIcon = (title) => {
    const iconStyle = { width: "28px", height: "28px", color: "var(--accent-primary)" };
    
    if (title.includes("Backend")) {
      return (
        <svg style={iconStyle} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v4a2 2 0 00-2-2m-14 0h14"></path>
        </svg>
      );
    }
    if (title.includes("Mobile")) {
      return (
        <svg style={iconStyle} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
        </svg>
      );
    }
    return (
      <svg style={iconStyle} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
      </svg>
    );
  };

  return (
    <div className="service-page">
      <h1>Services <span className="accent">I Offer</span></h1>
      <div className="service-cards">
        {servicesData.map((service, index) => (
          <div className={`service-card ${service.featured ? "featured" : ""}`} key={index}>
            <div className="service-card-header">
              <div className="icon-wrapper">
                {getIcon(service.title)}
              </div>
              <div className="title-group">
                {service.featured && <span className="recommended-tag">Recommended</span>}
                <h2>{service.title}</h2>
              </div>
            </div>

            <p className="service-subtitle">{service.subtitle}</p>
            
            <div className="service-details">
              <div className="detail-section">
                <h3>
                  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Ideal For:
                </h3>
                <p>{service.idealFor}</p>
              </div>
              
              <div className="detail-section">
                <h3>
                  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  What You Get:
                </h3>
                <ul>
                  {service.included.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              
              {/* <div className="detail-section">
                <h3>
                  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                  </svg>
                  Expected Result:
                </h3>
                <ul>
                  {service.result.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div> */}
            </div>
            
            <Link to="/contact" className="cta-wrapper"> 
              <button className="btn btn-primary">
                {service.cta}
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
