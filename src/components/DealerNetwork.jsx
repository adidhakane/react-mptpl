// DealerNetwork.jsx
import React from 'react';
import styles from '../styles/dealerNetwork.module.css';
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
const DealerNetwork = () => {
  // Regions with dealer availability information
  const dealerRegions = {
    "North India": {
      states: ["Delhi NCR", "Punjab", "Rajasthan", "Uttar Pradesh", "Haryana"],
      count: "3+ Authorized Dealers",
      description: "Comprehensive coverage across major industrial hubs"
    },
    "South India": {
      states: ["Tamil Nadu", "Karnataka", "Telangana", "Kerala", "Andhra Pradesh"],
      count: "5+ Authorized Dealers", 
      description: "Strong presence in automotive and industrial sectors"
    },
    "East India": {
      states: ["West Bengal", "Assam", "Chhattisgarh", "Odisha", "Jharkhand"],
      count: "4+ Authorized Dealers",
      description: "Strategic locations for industrial and mining applications"
    },
    "West India": {
      states: ["Maharashtra", "Gujarat", "Madhya Pradesh", "Goa"],
      count: "6+ Authorized Dealers",
      description: "Extensive network serving diverse industrial needs"
    }
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>Our Dealer Network</h2>
      <p className={styles.subtitle}>
        Pan-India presence with authorized dealers across all major regions
      </p>
      
      <div className={styles.content}>
        <div className={styles.mapContainer}>
          <img 
            src="/Images/dealer-network-map.jpg" 
            alt="Dealer Network Map" 
            className={styles.mapImage}
          />
        </div>
        
        <div className={styles.regionsGrid}>
          {Object.entries(dealerRegions).map(([region, info], index) => (
            <div key={region} className={styles.regionCard}>
              <h3 className={styles.regionTitle}>{region}</h3>
              <div className={styles.regionInfo}>
                <div className={styles.dealerCount}>{info.count}</div>
                <div className={styles.regionDescription}>{info.description}</div>
                <div className={styles.statesInfo}>
                  <h4>Coverage Areas:</h4>
                  <ul className={styles.statesList}>
                    {info.states.map((state, i) => (
                      <li key={i}>{state}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className={styles.contactSection}>
        <div className={styles.contactCard}>
          <h3>Get Dealer Information</h3>
          <p>
            For specific dealer contacts and detailed information about our authorized 
            partners in your region, please contact us directly.
          </p>
          {/* <div className={styles.contactDetails}>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📧</span>
              <span>info@madhurapower.com</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📞</span>
              <span>+91-20-1234-5678</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>🏢</span>
              <span>Madhura Power Technologies Pvt. Ltd.</span>
            </div>
          </div> */}
          <button className={styles.contactButton}onClick={handleContactClick}>
            Contact Us for Dealer Details
          </button>
        </div>
      </div>
    </section>
  );
};

export default DealerNetwork;
