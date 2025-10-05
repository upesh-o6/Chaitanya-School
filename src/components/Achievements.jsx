
import React, { useState, useEffect } from 'react';
import achievement1 from '../assets/achievement1.jpg';

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    const fakeAchievements = [
      { id: 1, image: achievement1, title: 'Top Rank in State Exams', desc: 'Our students secured 1st place in board exams 2023 with 98% average score.' },
      
    ];
    setAchievements(fakeAchievements);
  }, []);

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <h2>Our Achievements</h2>
        <div className="grid">
          {achievements.map(achievement => (
            <div key={achievement.id} className="card">
              <img src={achievement.image} alt={achievement.title} />
              <h3>{achievement.title}</h3>
              <p>{achievement.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;