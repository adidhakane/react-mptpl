// DealerNetwork.jsx
import React from 'react';
import styles from '../styles/dealerNetwork.module.css';

const DealerNetwork = () => {
  // Dealers categorized by region
  const dealerRegions = {
    "North India": [
      "1. Quantum Technology & Services, Kanpur",
      "8. Sun Shine Automation India Limited, Jaipur"
      // "11. Unicon Automation and Control, Delhi NCR"
    ],
    "South India": [
      "2. Siemo Service, Chennai",
      "4. Innovative Solutions, Karnataka",
      "5. Smatic Engineers, Secunderabad"
    ],
    "East India": [
      "6. Rising Sun Auto Tech, Kolkata",
      "7. Volta Engineering Solutions, Assam",
      "9. Artech Solutions, Chattisgarh"
    ],
    "West India": [
      "10. Leelavati Automation Pvt Ltd, Mumbai",
      "11. Unicon Automation and Control, Ahmedabad",
      "12. Arist Automation, Indore"
    ]
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>Our Dealer Network</h2>
      
      <div className={styles.content}>
        <div className={styles.mapContainer}>
          <img 
            src="/Images/dealer-network-map.jpg" 
            alt="Dealer Network Map" 
            className={styles.mapImage}
          />
        </div>
        
        <div className={styles.regionsGrid}>
          {Object.entries(dealerRegions).map(([region, dealers], index) => (
            <div key={region} className={styles.regionCard}>
              <h3 className={styles.regionTitle}>{region}</h3>
              <ul className={styles.regionDealers}>
                {dealers.map((dealer, i) => {
                  const [name, location] = dealer.split(',').map(part => part.trim());
                  return (
                    <li key={i} className={styles.dealerItem}>
                      <div className={styles.dealerName}>{name}</div>
                      {location && <div className={styles.dealerLocation}>{location}</div>}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealerNetwork;
