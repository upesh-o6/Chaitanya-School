
import React, { useState } from 'react';
import mapImage from '../assets/gallery3.jpg'; 

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent. We'll reply soon.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <div className="contact-content">
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              rows="5"
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
          <div className="contact-info">
            <p><strong>Address:</strong> Telukunchi Village, Hyderabad, Telangana 500001</p>
            <p><strong>Phone:</strong> +91-40-23456789</p>
            <p><strong>Email:</strong> info@srichaitanyaschool.com</p>
            <p><strong>Office Hours:</strong> Mon-Fri: 8 AM - 4 PM</p>
            <img src={mapImage} alt="School Location Map" className="map-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;