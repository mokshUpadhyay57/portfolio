import { useParams, Link } from "react-router-dom";
import useSEO from "../hooks/useSEO";
import "./ServicePage.css"; // Reuse styling where appropriate, or create a specific one

const seoData = {
  "java-backend-development": {
    title: "Java Backend Development Services",
    description: "Scalable Java backend systems, REST APIs and integrations using Spring MVC and Hibernate.",
    content: "I build reliable backend systems with Java, Spring MVC and Hibernate, backed by MySQL or PostgreSQL. That includes REST API design, third-party and payment integrations, and fixing performance problems in live systems, so your application handles real traffic and real business logic.",
    keywords: "Java, Spring MVC, Hibernate, REST APIs, API Integration, Backend Development"
  },
  "web-development": {
    title: "Web Development for Businesses & Startups",
    description: "Landing pages, business websites and full e-commerce stores with third-party integrations.",
    content: "From a single landing page to a complete online store with payments and third-party integrations, I build responsive, fast websites that are easy to maintain. You get a working product, not just a design.",
    keywords: "Web Development, Landing Page, Business Website, E-commerce Development, React, Django"
  },
  "android-mobile-apps": {
    title: "Android & Mobile App Development",
    description: "Native Android (Kotlin) and cross-platform Flutter apps connected to a live backend.",
    content: "I build native Android apps with Kotlin and cross-platform apps with Flutter, connected to Firebase or your own REST backend. You get an installable, store-ready build with authentication and a smooth user experience.",
    keywords: "Android Development, Kotlin, Flutter, Mobile Apps, Firebase"
  },
  "bug-fixing-maintenance": {
    title: "Bug Fixing & Maintenance",
    description: "Resolving issues and improving performance for existing applications.",
    content: "If your application is slow, buggy, or hard to maintain, I can help. I provide bug diagnosis and fixes, code reviews, database optimization, and strategic refactoring so your application runs smoothly in production.",
    keywords: "Bug Fixing, Maintenance, Performance Optimization, Refactoring, Technical Debt"
  },
  "mvp-development": {
    title: "MVP Development for Startups",
    description: "Rapid MVP development to test your startup idea quickly and cost-effectively.",
    content: "Launch your startup idea faster with a Minimum Viable Product (MVP). I help you identify core features and build a functioning product rapidly, allowing you to validate your market and attract early adopters without overspending.",
    keywords: "MVP Development, Startup MVP, Rapid Prototyping, Agile Development"
  },
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
