// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Layout.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={`${styles.footerSection} ${styles.contactInfo}`}>
            <h3>Contact Us</h3>
            <p><strong>Corporate Office:</strong></p>
            <p>
              Madhura International Pvt Ltd.<br />
              ICC Trade Tower, 5th Floor, 'B' Wing<br />
              Senapati Bapat Road, Pune, Maharashtra 411016, India
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:contact@madhura.co.in">contact@madhura.co.in</a>
            </p>
            <p><strong>Phone:</strong> +91 1234 567 890</p>
          </div>
          
          <div className={`${styles.footerSection} ${styles.footerLinks}`}>
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/group-profile">Group Profile</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className={`${styles.footerSection} ${styles.socialMedia}`}>
            <h3>Follow Us</h3>
            <div className={styles.socialIcons}>
              <a 
                href="https://www.linkedin.com/company/madhura-power-technologies-pvt-ltd-global/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a 
                href="https://www.facebook.com/Madhura-Power-Technologies-Pvt-Ltd-102019338417296" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
        
        <p className={styles.footerBottom}>
          &copy; {new Date().getFullYear()} Madhura International Pvt Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
