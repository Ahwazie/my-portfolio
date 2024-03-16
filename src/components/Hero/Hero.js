import React from 'react';
import './Hero.css';

function Hero() {
  // Function to handle smooth scroll
  const handleNavClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    const targetId = e.currentTarget.getAttribute('href').substring(1); // Get the target ID (removing the '#')
    const targetElement = document.getElementById(targetId); // Find the target element

    // Smooth scroll to the target element
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  };

  return (
    <div className="hero">
      <h2 className="hero-heading">Hello, I'm </h2>
      <h1>Ahwazie Matudin</h1>
      <p className="hero-title"></p>
      <div className="hero-buttons">
        <a href="/path-to-cv" className="btn download-cv">Download CV</a>
        {/* Update the href to point to #contactsection and add onClick handler */}
        <a href="#contactsection" className="btn contact-info" onClick={handleNavClick}>Contact Info</a>
      </div>
    </div>
  );
}

export default Hero;

