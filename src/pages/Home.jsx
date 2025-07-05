import React,{ useEffect }  from 'react';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import WelcomeSection from '../components/WelcomeSection';
import ProductCategories from '../components/ProductCategories';
import ClientLogos from '../components/ClientLogos';
import DealerNetwork from '../components/DealerNetwork';
// import NewsSection from '../components/NewsSection';
import Footer from '../components/Footer';
import styles from '../styles/home.module.css';
import TestimonialsAndNews from '../components/TestimonialsAndNews';
import LocomotiveScroll from "locomotive-scroll";
import { useLocation } from 'react-router-dom';


const Home = () => {
  const location = useLocation();
    useEffect(() => {
    new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });
    if (location.hash === '#contact') {
      // Use setTimeout to ensure the page is fully loaded before scrolling
      setTimeout(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth'
        });
      }, 100);
    }
  }, [location]);
  
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