
import React from 'react';
import aboutImage from '../assets/about.jpg';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Us</h2>
            <p>Sri Chaitanya High School is committed to providing quality education in a nurturing environment. Established in 2005 in Telukunchi, we focus on holistic development through academics, sports, and extracurricular activities for over 500 students.</p>
            <p>Our mission is to foster creativity, critical thinking, and strong values in every student, preparing them for global challenges.</p>
          </div>
          <div className="about-image">
            <img src={aboutImage} alt="School Building" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;