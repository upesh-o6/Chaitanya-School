
import React from 'react';
import heroImage from '../assets/hero.png';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <img src={heroImage} alt="School Hero Banner" className="hero-image" />
      <div className="hero-content">
        <h2>Welcome to Sri Chaitanya High School</h2>
       
      </div>
    </section>
  );
};

export default Hero;