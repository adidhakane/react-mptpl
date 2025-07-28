import React, { useState, useEffect } from 'react';
import styles from '../styles/newsTicker.module.css';

const NewsTicker = () => {
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    // Mock latest news data - in real app, this would come from an API
    const mockLatestNews = [
      {
        id: 1,
        title: "Madhura Unveils Next-Gen AI-Powered Smart Grid Solutions for Sustainable Energy Management",
        date: "2 days ago"
      },
      {
        id: 2,
        title: "Partnership with Tesla: Madhura to Supply Advanced Battery Management Systems for Indian Market",
        date: "5 days ago"
      },
      {
        id: 3,
        title: "Industry First: Madhura's Zero-Emission Generator Technology Wins National Innovation Award",
        date: "1 week ago"
      },
      {
        id: 4,
        title: "Breaking: Madhura Secures ₹500 Cr Contract for Smart City Power Infrastructure Project",
        date: "1 week ago"
      }
    ];
    setLatestNews(mockLatestNews);
  }, []);

  const handleNewsClick = (e) => {
    e.preventDefault();
    // Scroll to the TestimonialsAndNews section which contains news
    const newsSection = document.querySelector('[data-section="testimonials-news"]');
    if (newsSection) {
      newsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // Fallback: scroll to approximate position where news section is
      window.scrollTo({
        top: window.innerHeight * 4,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={styles.newsTickerWrapper}>
      <div className={styles.newsTickerContainer}>
        <div className={styles.newsLabel}>
          <span>Latest Updates</span>
        </div>
        <div className={styles.scrollingContainer}>
          <div className={styles.scrollingContent}>
            {latestNews.map((news, index) => (
              <div 
                key={`${news.id}-${index}`} 
                className={styles.newsItem}
                onClick={handleNewsClick}
              >
                <span className={styles.newsTitle}>{news.title}</span>
                <span className={styles.newsDate}>{news.date}</span>
              </div>
            ))}
            {/* Duplicate items for seamless loop */}
            {latestNews.map((news, index) => (
              <div 
                key={`${news.id}-duplicate-${index}`} 
                className={styles.newsItem}
                onClick={handleNewsClick}
              >
                <span className={styles.newsTitle}>{news.title}</span>
                <span className={styles.newsDate}>{news.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
