import React from 'react';
import styles from '../styles/style.module.css';

const WelcomeSection = () => {
  return (
    <section className={styles.welcome}>
      <div className={styles.welcomeContent}>
        <h2>Powering Innovation Since 1992</h2>
        <div className={styles.welcomeColumns}>
          <div className={styles.welcomeText}>
            <p className={styles.leadText}>
              At <strong>Madhura Group</strong>, we engineer excellence in electrical & electronic solutions, 
              serving global industries with cutting-edge technology and unmatched expertise.
            </p>
            <p className={styles.subText}>
              With 30+ years of experience, our ISO-certified facilities in Pune deliver innovative 
              solutions for engine controls, power systems, and industrial automation across 15+ countries.
            </p>
          </div>
          <div className={styles.welcomeStats}>
            <div className={styles.statItem}>
              <h3>30+</h3>
              <p>Years of Experience</p>
            </div>
            <div className={styles.statItem}>
              <h3>1500+</h3>
              <p>Global Clients</p>
            </div>
            <div className={styles.statItem}>
              <h3>50+</h3>
              <p>Patents & Certifications</p>
            </div>
          </div>
        </div>
        <button className={styles.ctaButton}>
          Explore Our Legacy →
        </button>
      </div>
    </section>
  );
};

export default WelcomeSection;