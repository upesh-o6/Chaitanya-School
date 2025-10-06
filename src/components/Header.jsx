
import React, { useState, useEffect } from 'react';
import logo from '../assets/react.svg';
import homeIcon from '../assets/home.png';
import aboutIcon from '../assets/info.png';
import academicsIcon from '../assets/report.png';
import teachersIcon from '../assets/teacher.png';
import achievementsIcon from '../assets/badge.png';
import galleryIcon from '../assets/gallery.png';
import blogIcon from '../assets/blogging.png';
import contactIcon from '../assets/contact-mail.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMenuOpen]);

  const navItems = [
    { href: '#home', icon: homeIcon, text: 'Home', alt: 'Home Icon' },
    { href: '#about', icon: aboutIcon, text: 'About', alt: 'About Icon' },
    { href: '#academics', icon: academicsIcon, text: 'Academics', alt: 'Academics Icon' },
    { href: '#teachers', icon: teachersIcon, text: 'Teachers', alt: 'Teachers Icon' },
    { href: '#achievements', icon: achievementsIcon, text: 'Achievements', alt: 'Achievements Icon' },
    { href: '#gallery', icon: galleryIcon, text: 'Gallery', alt: 'Gallery Icon' },
    { href: '#blog', icon: blogIcon, text: 'Blog', alt: 'Blog Icon' },
    { href: '#contact', icon: contactIcon, text: 'Contact', alt: 'Contact Icon' },
  ];

  const renderNavLink = (item) => (
    <a key={item.href} href={item.href} onClick={closeMenu}>
      <img src={item.icon} className="nav-icon" alt={item.alt} />
      <span>{item.text}</span>
    </a>
  );

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Sri Chaitanya High School Logo" />
          <h1>Sri Chaitanya High School</h1>
        </div>
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            {navItems.map(renderNavLink)}
          </ul>
        </nav>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {isMenuOpen && (
          <div className="mobile-menu-overlay" onClick={closeMenu}>
            <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
              <div className="mobile-header">
                <div className="school-name">
                  <span>Sri Chaitanya</span>
                  <span>High School</span>
                </div>
                <button className="close-btn" onClick={closeMenu}>×</button>
              </div>
              <ul>
                {navItems.map((item) => (
                  <li key={item.href}>
                    {renderNavLink(item)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;