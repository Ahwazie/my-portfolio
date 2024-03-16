import React from 'react';
import './ContactSection.css';

// Import the icons from your local assets
import githubIcon from './icons/github.png';
import gmailIcon from './icons/gmail.png';
import phoneIcon from './icons/phone.png';
import whatsappIcon from './icons/whatsapp.png';

function ContactSection() {
  return (
    <section className="contact-container">
      <h2 className="contact-subtitle">Get In Touch</h2>
      <h1 className="contact-title">Contact Me</h1>
      
      {/* ...existing content... */}
      
      <div className="contact-icons">
      <a href="https://wa.me/qr/B54G34RANKPOL1" target="_blank" rel="noopener noreferrer">
          <img src={whatsappIcon} alt="WhatsApp" />
        </a>
        <a href="https://github.com/Ahwazie" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a href="wazie8699@gmail.com">
          <img src={gmailIcon} alt="Gmail" />
        </a>
        <a href="tel:+6738308445">
          <img src={phoneIcon} alt="Phone" />
        </a>
      </div>
    </section>
  );
}

export default ContactSection;

