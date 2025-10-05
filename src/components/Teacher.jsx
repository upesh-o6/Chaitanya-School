
import React, { useState, useEffect } from 'react';
import teacher1 from '../assets/teacher1.jpg';


const Teachers = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fakeTeachers = [
      { id: 1, image: teacher1, name: 'Ms. Priya Sharma', bio: 'Maths Instructor with 10+ years experience in CBSE curriculum.' },
      
    ];
    setTeachers(fakeTeachers);
  }, []);

  return (
    <section id="teachers" className="teachers">
      <div className="container">
        <h2>Our Teachers</h2>
        <div className="grid">
          {teachers.map(teacher => (
            <div key={teacher.id} className="card">
              <img src={teacher.image} alt={teacher.name} />
              <h3>{teacher.name}</h3>
              <p>{teacher.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;