import React from 'react';
import styles from '../styles/dealerNetwork.module.css';

const DealerNetwork = () => {
  const dealers = [
    "Quantum Technology & Services, Kanpur",
    "Siemo Service, Chennai",
    // ... other dealers
  ];

  return (
    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <img 
          src="/Images/dealer-network-map.jpg" 
          alt="Dealer Network Map" 
          className={styles.mapImage}
        />
      </div>
      <div className={styles.listContainer}>
        <h2>Our Dealer Network</h2>
        <ol className={styles.dealerList}>
          {dealers.map((dealer, index) => (
            <li key={index} className={styles.dealerItem}>
              <span className={styles.number}>{index + 1}.</span>
              <strong>{dealer.split(',')[0]}</strong>
              <span className={styles.location}>{dealer.split(',')[1]}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default DealerNetwork;