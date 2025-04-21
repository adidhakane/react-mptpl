// import HeroBanner from '../components/HeroBanner'; // Make sure this path is correct
// import WelcomeSection from '../components/WelcomeSection';
// import ProductCategories from '../components/ProductCategories';

// const Home = () => {
//   return (
//     <main>
//       <HeroBanner />
//       <WelcomeSection />
//       <ProductCategories />
//       {/* Other home content */}
//     </main>
//   );
// };

// export default Home; // Must have default export


import React from 'react';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import WelcomeSection from '../components/WelcomeSection';
import ProductCategories from '../components/ProductCategories';
import ClientLogos from '../components/ClientLogos';
import DealerNetwork from '../components/DealerNetwork';
import NewsSection from '../components/NewsSection';
import Footer from '../components/Footer';
import styles from '../styles/home.module.css';
import TestimonialsAndNews from '../components/TestimonialsAndNews';


const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Header />
      <HeroBanner />
      <main className={styles.mainContent}>
        <WelcomeSection />
        <ProductCategories />
        <ClientLogos />
        <DealerNetwork />
        <TestimonialsAndNews />
        {/* <NewsSection /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;