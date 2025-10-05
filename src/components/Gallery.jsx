
import './Gallery.css';
import '../styles.css';


import React, { useState, useEffect } from 'react';


import gallery1 from '../assets/gallery1.jpg';
import gallery2 from '../assets/gallery2.jpg';
import gallery3 from '../assets/gallery3.jpg';

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    const fakeGallery = [
      { id: 1, image: gallery1, alt: 'School Annual Day Celebration' },
      { id: 2, image: gallery2, alt: 'Science Lab Session' },
      { id: 3, image: gallery3, alt: 'Sports Day Event' },
      
    ];
    setGalleryImages(fakeGallery);
  }, []);

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2>Gallery</h2>
        <div className="grid">
          {galleryImages.map(img => (
            <img key={img.id} src={img.image} alt={img.alt} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

