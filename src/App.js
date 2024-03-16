import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import SkillsSection from './components/SkillsSection/SkillsSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="aboutme">
        <AboutMe />
      </section>
      <section id="projectssection">
        <ProjectsSection />
      </section>
      <section id="skillssection">
        <SkillsSection />
      </section>
      <section id="contactsection">
        <ContactSection />
      </section>
      <Footer />
    </div>
  );
}

export default App;

