// ContactInfo.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <div className="contact-info-container">
      <h1 className="contact-info-title">How can we help you?</h1>
      <p className="contact-info-subtitle">
        <Link to="/contactform" className="contact-info-underline">
          Get in touch
        </Link> with us or find an office closest to you.
      </p>
      <p className="contact-info-subtitle">novabytetechnology.info@gmail.com</p>
    </div>
  );
};

export default ContactInfo;
