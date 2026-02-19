import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import "./BackToTop.css";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(window.scrollY > 300); // Initialize state based on initial scroll position

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className={`back-to-top ${isVisible ? "show" : ""}`}>
      <button 
        onClick={scrollToTop} 
        aria-label="Back to top"
        title="Back to Top"
      >
        <ChevronUp size={24} />
      </button>
    </div>
  );
}

export default BackToTop;
