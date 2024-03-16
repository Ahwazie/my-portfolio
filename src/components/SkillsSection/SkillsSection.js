import React, { useRef, useEffect } from 'react';
import './SkillsSection.css';

function SkillsSection() {

    const ref = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add 'run-animation' class to run animations
            const elements = ref.current.querySelectorAll('.skill-box, .skills-title, .skills-subtitle');
            elements.forEach(el => el.classList.add('run-animation'));
          }
        });
      }, {
        threshold: 0.1, // Trigger when 10% of the element is visible
      });
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => observer.disconnect();
    }, []);

  return (
    <section className="skills-container" ref={ref}>
      <h2 className="skills-subtitle">Explore My</h2>
      <h1 className="skills-title">SKILLS</h1>
      <div className="skills-boxes">
        <div className="skill-box left">
          <h3 className='end'>Frontend Development</h3>
          <ul>
            <li><img src='https://www.freeiconspng.com/thumbs/check-tick-icon/black-check-tick-icon-4.png 'alt="Check" /> HTML</li>
            <li><img src='https://www.freeiconspng.com/thumbs/check-tick-icon/black-check-tick-icon-4.png' alt="Check" /> CSS</li>
            <li><img src='https://www.freeiconspng.com/thumbs/check-tick-icon/black-check-tick-icon-4.png' alt="Check" /> JavaScript</li>
            <li><img src='https://www.freeiconspng.com/thumbs/check-tick-icon/black-check-tick-icon-4.png' alt="Check" /> React</li>
          </ul>
        </div>
        <div className="skill-box right">
          <h3 className='end'>Backend Development</h3>
          <ul>
            <li><img src='https://www.freeiconspng.com/thumbs/check-tick-icon/black-check-tick-icon-4.png' alt="Check" /> Laravel</li>
            <li><img src='https://www.freeiconspng.com/thumbs/check-tick-icon/black-check-tick-icon-4.png' alt="Check" /> PHP</li>
            <li><img src='https://www.freeiconspng.com/thumbs/check-tick-icon/black-check-tick-icon-4.png' alt="Check" /> MySQL</li>
            <li><img src='https://www.freeiconspng.com/thumbs/check-tick-icon/black-check-tick-icon-4.png' alt="Check" /> MERN Stack</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;

