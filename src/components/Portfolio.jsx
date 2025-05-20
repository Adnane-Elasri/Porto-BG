import React from "react";
import './Portfolio.css';


function Portfolio() {
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <div className="services">
        <div className="service-card">WEB DESIGN</div>
        <div className="service-card dark">MOBILE DESIGN</div>
        <div className="service-card">LOGO DESIGN</div>
        <div className="service-card dark">WEB APPLICATION DEVELOPMENT</div>
        <div className="service-card">MOBILE APPLICATION DEVELOPMENT</div>
        <div className="service-card dark">PWA DEVELOPMENT</div>
      </div>
    </div>
  );
}

export default Portfolio;
