// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Layout.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    // Check if we're on the home page
    if (window.location.pathname === '/') {
      // Scroll to bottom of the page
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    } else {
      // Navigate to home page and then scroll to bottom
      window.location.href = '/#contact';
    }
  };

  const handleHomeClick = (e) => {
    // Check if we're already on the home page
    if (window.location.pathname === '/') {
      e.preventDefault();
      // Scroll to top of the page
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    // If not on home page, let the Link component handle navigation normally
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/">
            <img src="Images/logo.jpg" alt="Madhura International Logo" />
          </Link>
        </div>
        
        <div className={styles.mobileMenuToggle} onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
        
        <nav className={`${styles.navigation} ${isMenuOpen ? styles.active : ''}`}>
          <ul>
            <li><Link to="/" onClick={handleHomeClick}>Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/group-profile">Group Profile</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><a href="#contact" onClick={handleContactClick}>Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
