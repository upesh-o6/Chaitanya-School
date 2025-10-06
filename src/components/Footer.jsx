
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Sri Chaitanya High School - -Upesh</h3>
            <p>Providing excellence in education since 2005. Nurturing future leaders in Telukunchi with a student-centered approach.</p>
            <p>CBSE Affiliated | 500+ Students | 50+ Faculty</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#academics">Academics</a></li>
              <li><a href="#teachers">Teachers</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Info</h3>
            <ul>
              <li>Telukunchi Village, Hyderabad</li>
              <li>+91-40-23456789</li>
              <li>info@srichaitanyaschool.com</li>
              <li>www.srichaitanyaschool.com</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <ul className="social-links">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Sri Chaitanya High School. All rights reserved. | Designed for Educational Excellence</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
