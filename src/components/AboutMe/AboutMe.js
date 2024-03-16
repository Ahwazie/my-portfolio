import React, { useEffect, useRef } from 'react';
import './AboutMe.css'; // Ensure your CSS file is linked

function AboutMe() {

    const aboutRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
            }
          });
        },
        {
          threshold: 0.1, // Adjust as needed
        }
      );
  
      const aboutSection = aboutRef.current;
      observer.observe(aboutSection);
  
      // Cleanup observer on component unmount
      return () => observer.disconnect();
    }, []);

  return (
    <section className="about-me-container" ref={aboutRef}>
      <h2 className="section-title">Get To Know More</h2>
      <h1 className="about-title">About Me</h1>
      
      <div className="about-me-content">
        <div className="info-card">
          <h3>Education</h3>
          <p className="info-detail">Master of Islamic Technologies (2023 - Present)</p>
          <p className="info-detail">Bachelor of Halal Science (2018-2022)</p>
          <p className="info-detail emphasis">Minor in ICT (Web Designing & Database Management)</p>
        </div>
        <div className="info-card">
          <h3>Current Project</h3>
          <p className="info-detail">KPI Monitoring System for Universiti Sultan Sharif Ali</p>
          <p className="info-detail">Technologies: Laravel, PHP, HTML, CSS, MySQL, Laragon</p>
          <p className="info-detail">2022 - Present</p>
        </div>
      </div>

      <div className="about-description">
        <p>
          My current endeavor involves the creation of a KPI Monitoring System for UNISSA, harnessing the power 
          of Laravel, PHP, HTML, CSS, and MySQL, with Laragon as the local development environment. This project 
          showcases my expertise in developing comprehensive backend solutions and my passion for integrating 
          technology with educational systems.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;



