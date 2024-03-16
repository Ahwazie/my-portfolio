import React, { useEffect, useRef } from 'react'; 
import './ProjectsSection.css'; // Ensure your CSS file is linked



function ProjectsSection() {

    const projectsRef = useRef(null);

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
          threshold: 0.3, // Trigger when 10% of the item is in the viewport
        }
      );
      const projectCards = projectsRef.current.querySelectorAll('.project-card');
    projectCards.forEach((card) => observer.observe(card));

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects-container">
      <h2 className='projects-subtitle'>My Recent</h2>
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid" ref={projectsRef}>
        {/* Project One */}
        <div className="project-card">
          <img src="https://via.placeholder.com/300" alt="Project One" className="project-image" />
          <h3>Project One</h3>
          <div className="project-links">
            <a href="https://github.com/yourusername/project-one" className="project-btn">GitHub</a>
            <a href="https://your-live-demo-link.com" className="project-btn">Live Demo</a>
          </div>
        </div>
        {/* Project Two */}
        <div className="project-card">
          <img src="https://via.placeholder.com/300" alt="Project Two" className="project-image" />
          <h3>Project Two</h3>
          <div className="project-links">
            <a href="https://github.com/yourusername/project-two" className="project-btn">GitHub</a>
            <a href="https://your-live-demo-link.com" className="project-btn">Live Demo</a>
          </div>
        </div>
        {/* Project Three */}
        <div className="project-card">
          <img src="https://via.placeholder.com/300" alt="Project Three" className="project-image" />
          <h3>Project Three</h3>
          <div className="project-links">
            <a href="https://github.com/yourusername/project-three" className="project-btn">GitHub</a>
            <a href="https://your-live-demo-link.com" className="project-btn">Live Demo</a>
          </div>
        </div>
      </div>
      <div className="projects-footer">
        <a href="https://github.com/ahwazie" className="github-link" target="_blank" rel="noopener noreferrer">
          <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png'alt="GitHub Logo" className="github-logo" />
          <span>Explore more on my GitHub profile</span> 
        </a>
      </div>
    </section>
  );
}

export default ProjectsSection;

