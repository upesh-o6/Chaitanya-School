
import React from 'react';
import facility1 from '../assets/facility1.jpg';
import facility2 from '../assets/facility2.jpg';

const Academics = () => {
  const facilities = [
    { id: 1, image: facility1, title: 'Modern Classrooms', desc: 'Equipped with interactive smart boards and comfortable seating for engaging learning experiences.' },
   
    { id: 3, image: facility2, title: 'Sports Facilities', desc: 'Spacious playground for cricket, football, and indoor games to promote physical fitness.' }
  ];

  return (
    <section id="academics" className="academics">
      <div className="container">
        <h2>Academics & Facilities</h2>
        <div className="grid">
          {facilities.map(facility => (
            <div key={facility.id} className="card">
              <img src={facility.image} alt={facility.title} />
              <h3>{facility.title}</h3>
              <p>{facility.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academics;