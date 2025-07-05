// src/pages/GroupProfile.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/groupProfile.module.css';

const GroupProfile = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      
      {/* Profile Header */}
      <section className={styles.profileHeader}>
        <div className={styles.container}>
          <h1>Madhura Group Profile</h1>
          <p>Excellence in Engineering Since 1994</p>
        </div>
      </section>

      <div className={styles.container}>
        {/* Profile Overview */}
        <section className={styles.profileContent}>
          <div className={styles.profileImage}>
            <img src="/Images/group.png"/>
          </div>
          <div className={styles.profileText}>
            <h2>About Madhura Group</h2>
            <p>Madhura group of companies was established in 1994. The first company launched was Madhura International. Madhura Controls & Automation Pvt. Ltd and Madhura Lubricants were launched at a later stage. Today, Madhura has a solid base of more than 50 OEM customers (Original Equipment Manufacturer). The customers are major manufacturers of Engine, Vehicle, Genset, and Panel across India and overseas.</p>
            <p>Madhura has earned the reputation of being a supplier of hi-tech products & services, delivering innovative solutions for complex engineering challenges across multiple industries.</p>
            {/* <a href="#" className={styles.btn}>Download Company Brochure</a> */}
          </div>
        </section>

        {/* Core Activities */}
        <section className={styles.profileSection}>
          <h2>Core Activities</h2>
          <div className={styles.profileContent}>
            <div className={styles.profileText} style={{ width: '100%' }}>
              <ul>
                <li><strong>Design & Manufacture:</strong> Custom-built parts and comprehensive solutions for specific industry needs</li>
                <li><strong>Import-Export:</strong> Global sourcing and distribution of high-quality components</li>
                <li><strong>Trading & Wholesale:</strong> Distribution of specialized technical products to various industries</li>
                <li><strong>System Engineering:</strong> Integration of complex systems for optimal performance</li>
                <li><strong>Service Provider:</strong> Technical support, maintenance, and consulting services</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className={styles.profileSection}>
          <h2>Our Journey</h2>
          <div className={styles.timeline}>
            <div className={`${styles.timelineContainer} ${styles.left}`}>
              <div className={styles.timelineContent}>
                <h3>1994</h3>
                <p>Establishment of Madhura International, the first company in the Madhura Group</p>
              </div>
            </div>
            <div className={`${styles.timelineContainer} ${styles.right}`}>
              <div className={styles.timelineContent}>
                <h3>1998</h3>
                <p>Expansion into engine control systems and introduction of electronic governors</p>
              </div>
            </div>
            <div className={`${styles.timelineContainer} ${styles.left}`}>
              <div className={styles.timelineContent}>
                <h3>2003</h3>
                <p>Launch of Madhura Controls & Automation Pvt. Ltd., focusing on advanced control systems</p>
              </div>
            </div>
            <div className={`${styles.timelineContainer} ${styles.right}`}>
              <div className={styles.timelineContent}>
                <h3>2008</h3>
                <p>Establishment of Madhura Lubricants division for specialized industrial lubricants</p>
              </div>
            </div>
            <div className={`${styles.timelineContainer} ${styles.left}`}>
              <div className={styles.timelineContent}>
                <h3>2015</h3>
                <p>Expansion into electric vehicle technology and renewable energy solutions</p>
              </div>
            </div>
            <div className={`${styles.timelineContainer} ${styles.right}`}>
              <div className={styles.timelineContent}>
                <h3>2020</h3>
                <p>Introduction of IoT-enabled control systems and digital monitoring solutions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className={styles.profileSection}>
          <h2>Technology</h2>
          <div className={styles.profileContent}>
            <div className={styles.profileText} style={{ width: '100%' }}>
              <p>We use only the latest & state-of-the-art technology. Most of our products are microprocessor-based and produced in modern manufacturing facilities. Technology-driven products render optimal performance & longer life. The products are well-proven for harsh Indian conditions.</p>
              <p>Our R&D team continuously works on developing innovative solutions that address the evolving needs of our customers, ensuring that we remain at the forefront of technological advancement in our industry.</p>
            </div>
          </div>
        </section>

        {/* Infrastructure Section */}
        <section className={styles.profileSection}>
          <h2>Infrastructure</h2>
          <div className={styles.profileContent}>
            <div className={styles.profileText} style={{ width: '100%' }}>
              <p>Two independent office premises house the staff. The warehouse is located on the outskirts of the city. Both are situated on Pune's most prestigious commercial address viz. Senapati Bapat road (Shivaji Nagar). The head office is located at "International Convention Centre (ICC)", which is South East Asia's biggest commercial complex, covering IT industries, trade towers, convention centers, and a 5-star hotel.</p>
              <p>Local representatives & system integrators across India and in Thailand, Malaysia, Bangladesh, and Iraq help us reach customers faster, providing timely support and service to our global clientele.</p>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default GroupProfile;
