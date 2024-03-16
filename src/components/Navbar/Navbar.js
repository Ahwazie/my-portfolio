import React from 'react';
import './Navbar.css';

function Navbar() {
  // Function to handle smooth scroll on click
  const handleNavClick = (event) => {
    event.preventDefault(); // Prevent default anchor click behavior
    const targetId = event.currentTarget.getAttribute('href').slice(1); // Get the target section ID
    const targetSection = document.getElementById(targetId); // Get the target section element

    // Scroll to the target section
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth"
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Ahwazie Matudin</div>
      <ul className="navbar-menu">
        <li className="navbar-item"><a href="#aboutme" onClick={handleNavClick}>About</a></li>
        <li className="navbar-item"><a href="#projectssection" onClick={handleNavClick}>Projects</a></li>
        <li className="navbar-item"><a href="#skillssection" onClick={handleNavClick}>Skills</a></li>
        <li className="navbar-item"><a href="#contactsection" onClick={handleNavClick}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

