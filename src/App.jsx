
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Academics from './components/Academics';
import Teachers from './components/Teacher';
import Achievements from './components/Achievements';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Academics />
      <Teachers />
      <Achievements />
      <Gallery />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
