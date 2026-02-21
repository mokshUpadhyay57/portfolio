import { Link } from "react-router-dom";
import useSEO from "../hooks/useSEO";
import "./NotFound.css";

const NotFound = () => {
  useSEO({
    title: "404 - Page Not Found",
    description: "The page you're looking for doesn't exist. Return to Moksh Upadhyay's portfolio home page.",
    keywords: "404, page not found, Moksh Upadhyay portfolio",
    canonical: "https://mokshcodes.netlify.app/404"
  });

  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <h1 className="not-found-code">404</h1>
        <h2 className="not-found-title">Page Not Found</h2>
        <p className="not-found-text">
          Oops! The page you're looking for has vanished into the digital void.
        </p>
        <Link to="/" className="btn primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
