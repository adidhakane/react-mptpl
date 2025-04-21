import React, { useState, useEffect } from 'react';
import styles from '../styles/newsSection.module.css';

const NewsSection = () => {
  const [news, setNews] = useState([]);

  // Simulated API call
  useEffect(() => {
    const mockNews = [
      {
        title: "Madhura to Exhibit at Powergen India Expo",
        // date: "4 September 2024",
        excerpt: "Madhura will showcase its latest innovations at the Powergen India Expo in New Delhi.",
        link: "/news/136"
      },
      {
        title: "Alternator Export to Europe",
        // date: "20 June 2024",
        excerpt: "Madhura successfully exported 40kva & 100 Kva AC Alternators from India to Europe.",
        link: "/news/136"
      },
      {
        title: "Positive Response to Madhura's Stall at El-Asia 2024 Expo",
        date: "",
        excerpt: "Madhura's innovative stall received an excellent response at the El-Asia Expo in Bangalore.",
        link: "/news/136"
      },
      {
        title: "Madhura to Exhibit at EL-ASIA 2024 Power & Electrical Expo, 24-26 May Bangalore",
        date: "",
        excerpt: "Visit Madhura's stall at the El-Asia 2024 International Expo to explore our industrial product range.",
        link: "/news/136"
      }
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