// src/pages/ServicePage.jsx
import React from "react";
import { servicesData } from "../components/data/serviceData";
import "./ServicePage.css";

const ServicePage = () => {
  return (
    <div className="service-page">
      <h1>Services</h1>
      <div className="service-cards">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <h2>{service.title}</h2>
            <p>{service.subtitle}</p>
            <h3>Best For:</h3>
            <p>{service.bestFor}</p>
            <h3>Included:</h3>
            <ul>
              {service.included.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <h3>Outcome:</h3>
            <ul>
              {service.outcome.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <button>{service.cta}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
