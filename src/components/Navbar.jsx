import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#" className="logo">
          Portfolio<span className="dot">.</span>
        </a>
        <ul className="nav-links">
          <li><a href="#projects">Projets</a></li>
          <li><a href="#skills">Compétences</a></li>
          <li><a href="#about">À propos</a></li>
          <li><a href="#contact" className="btn-nav">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
