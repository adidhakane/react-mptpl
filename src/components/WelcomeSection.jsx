import React from 'react';
import styles from '../styles/style.module.css'; // Using CSS Modules

const WelcomeSection = () => {
  return (
    <section className={styles.welcome}>
      <h2>Welcome to Madhura</h2>
      <p>
        Welcome to <strong>Madhura</strong> group, a professional organization engaged in design,
        manufacture, supply, wholesale, and support of advanced technology Electrical,
        Electro-mechanical & Electronic products...
      </p>
      <button className={styles.ctaButton}>
        Read More
      </button>
    </section>
  );
};

export default WelcomeSection;