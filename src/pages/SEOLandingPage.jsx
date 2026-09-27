import { useParams, Link } from "react-router-dom";
import useSEO from "../hooks/useSEO";
import "./ServicePage.css"; // Reuse styling where appropriate, or create a specific one

const seoData = {
  "java-spring-boot-development": {
    title: "Java Spring Boot Development Services",
    description: "Expert Java Spring Boot development services for scalable, enterprise-grade backend systems and APIs.",
    content: "I specialize in building robust, secure, and highly scalable enterprise backend systems using Java and Spring Boot. From microservices to monolithic architectures, I ensure your application can handle high traffic and complex business logic with ease.",
    keywords: "Java, Spring Boot, Backend Development, Microservices, Enterprise Architecture"
  },
  "rest-api-development": {
    title: "RESTful API Development & Integration",
    description: "Custom REST API development and third-party integration services.",
    content: "APIs are the backbone of modern software. I develop custom, secure REST APIs that allow your systems to communicate efficiently. I also specialize in integrating third-party services like payment gateways and external data sources.",
    keywords: "API Development, REST APIs, API Integration, Webhooks, API Security"
  },
  "mvp-development": {
    title: "MVP Development for Startups",
    description: "Rapid MVP development to test your startup idea quickly and cost-effectively.",
    content: "Launch your startup idea faster with a Minimum Viable Product (MVP). I help you identify core features and build a functioning product rapidly, allowing you to validate your market and attract early adopters without overspending.",
    keywords: "MVP Development, Startup MVP, Rapid Prototyping, Agile Development"
  },
  "payment-api-integrations": {
    title: "Payment & API Integrations",
    description: "Connecting external systems and payment gateways securely.",
    content: "I provide robust integration services for payment gateways like Stripe and PayPal, as well as third-party APIs. I ensure secure data synchronization, reliable webhook handling, and seamless user experiences across your platforms.",
    keywords: "API Integration, Payment Gateway, Stripe, Webhooks, Backend Services"
  },
  "bug-fixing-optimization": {
    title: "Bug Fixing & Performance Optimization",
    description: "Resolving issues and improving performance for existing applications.",
    content: "If your application is slow, buggy, or hard to maintain, I can help. I provide thorough code reviews, database optimization, and strategic refactoring to eliminate technical debt and ensure your application runs smoothly in production.",
    keywords: "Bug Fixing, Performance Optimization, Refactoring, Technical Debt"
  },
  "react-full-stack-development": {
    title: "React & Full-Stack Web Development",
    description: "End-to-end web application development using React and modern backends.",
    content: "I create responsive, dynamic, and user-friendly web applications. By combining React on the frontend with a powerful backend, I deliver full-stack solutions that provide an exceptional user experience and drive business growth.",
    keywords: "Web Application Development, Full-Stack Development, React, Custom Web Apps"
  },
  "mobile-development": {
    title: "Mobile App Development",
    description: "High-performance Android and cross-platform mobile applications.",
    content: "I build responsive, high-performance mobile applications that connect seamlessly to your backend infrastructure. Whether you need a native Android app or a cross-platform solution, I ensure a smooth and reliable user experience.",
    keywords: "Mobile Development, Android, Cross-platform, Mobile Apps"
  }
};

const SEOLandingPage = () => {
  const { serviceId } = useParams();
  const data = seoData[serviceId];

  useSEO({
    title: data ? data.title : "Service Not Found",
    description: data ? data.description : "Service details",
    keywords: data ? data.keywords : "Services",
    canonical: `https://mokshcodes.netlify.app/services/${serviceId}`
  });

  if (!data) {
    return (
      <div className="service-page">
        <h1>Service Not Found</h1>
        <Link to="/services" className="btn btn-primary">Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="service-page seo-landing">
      <div className="service-header" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1>{data.title}</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>{data.description}</p>
      </div>

      <div className="service-content" style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
        <p>{data.content}</p>

        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <Link to="/contact">
            <button className="btn btn-primary">Discuss Your Project</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SEOLandingPage;
