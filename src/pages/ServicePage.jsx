// src/pages/ServicePage.jsx
import { Link } from "react-router-dom";
import { servicesData } from "../components/data/serviceData";
import "./ServicePage.css";

const ServicePage = () => {
  return (
    <div className="service-page">
      <h1>Services I Offer</h1>
      <div className="service-cards">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <h2>{service.title}</h2>
            <p>{service.subtitle}</p>
            <h3>Ideal For:</h3>
            <p>{service.idealFor}</p>
            <h3>What You Get:</h3>
            <ul>
              {service.included.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <h3>Result:</h3>
            <ul>
              {service.result.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <Link to="/contact"> <button className="btn primary">{service.cta}</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
