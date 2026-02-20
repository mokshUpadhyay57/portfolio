// src/components/sections/src/Recommendations.jsx
import { useState, useEffect } from "react";
import "../../sections/styles/Recommendations.css";
import { recommendationsData } from "../../data/recommendationsData";
import { Linkedin, ChevronLeft, ChevronRight } from "lucide-react";

function Recommendations() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % recommendationsData.length);
    }, 6000); 

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + recommendationsData.length) % recommendationsData.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % recommendationsData.length);
  };

  return (
    <section 
      className="recommendations section" 
      id="recommendations"
    >
      <div className="recommendations-container">
        <h2 className="recommendations-title">
          Professional <span className="accent">Recommendations</span>
        </h2>
        
        <p className="recommendations-intro">
          Feedback and endorsements from colleagues, mentors, and partners I've worked with.
        </p>

        <div className="recommendations-slider">
          <div 
            className="recommendations-track" 
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {recommendationsData.map((rec) => (
              <div className="recommendation-slide" key={rec.id}>
                <div className="recommendation-card">
                  <div className="recommender-header">
                    <div className="recommender-profile-main">
                      <div className="avatar-wrapper">
                        <img src={rec.image || rec.avatar} alt={rec.name} className="recommender-avatar" />
                      </div>
                      <div className="recommender-info">
                        <h4 className="recommender-name">{rec.name}</h4>
                        <span className="recommender-role">{rec.role}</span>
                      </div>
                    </div>
                    <a 
                      href={rec.linkedIn} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="linkedin-link"
                      aria-label={`LinkedIn profile of ${rec.name}`}
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                  
                  <p className="recommendation-text">
                    {rec.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <button className="slider-control prev" onClick={handlePrev} aria-label="Previous recommendation">
            <ChevronLeft size={24} />
          </button>
          <button className="slider-control next" onClick={handleNext} aria-label="Next recommendation">
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="slider-dots">
            {recommendationsData.map((_, index) => (
              <button 
                key={index} 
                className={`dot ${index === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Recommendations;
