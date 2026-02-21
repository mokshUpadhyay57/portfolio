import React from "react";
import "../styles/Timeline.css";
import { timelineData } from "../../data/timelineData";

const Timeline = () => {
  return (
    <section className="timeline section light" id="experience">
      <div className="timeline-container">
        <h2 className="timeline-title">
          My <span className="accent">Experience</span>
        </h2>

        <div className="timeline-items">
          {timelineData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">{item.year}</div>
              <div className="timeline-content">
                <h3 className="timeline-role">{item.title}</h3>
                <h4 className="timeline-company">{item.company}</h4>
                <p className="timeline-description">{item.description}</p>
                <div className="timeline-tags">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="timeline-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
