import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className="hero">
      <h2 className="hero-heading">Hello, I'm </h2>
      <h1>Ahwazie Matudin</h1>
      <p className="hero-title"></p>
      <div className="hero-buttons">
        <a href="/path-to-cv" className="btn download-cv">Download CV</a>
        <a href="/contact-info" className="btn contact-info">Contact Info</a>
      </div>
    </div>
  );
}

export default Hero;
