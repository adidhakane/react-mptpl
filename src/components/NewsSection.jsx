import React, { useState, useEffect } from 'react';
import styles from '../styles/newsSection.module.css';

const NewsSection = () => {
  const [news, setNews] = useState([]);

  // Simulated API call
  useEffect(() => {
    const mockNews = [
      {
        title: "Madhura to Exhibit at Powergen India Expo",
        date: "4 September 2024",
        excerpt: "Showcasing latest innovations...",
        link: "/news/136"
      },
      // Add other news items
    ];
    setNews(mockNews);
  }, []);

  return (
    <section className={styles.newsSection}>
      <h2>Latest News</h2>
      <div className={styles.newsGrid}>
        {news.map((item, index) => (
          <article key={index} className={styles.newsCard}>
            <div className={styles.dateBadge}>{item.date}</div>
            <h3>{item.title}</h3>
            <p>{item.excerpt}</p>
            <a href={item.link} className={styles.readMore}>
              Read More →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;