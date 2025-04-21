// TestimonialsAndNews.jsx
import React, { useState, useEffect } from 'react';
import styles from '../styles/testimonialsAndNews.module.css';

const TestimonialsAndNews = () => {
  const [news, setNews] = useState([]);

  // Testimonials data
  const testimonials = [
    {
      quote: "Madhura's alternators have proven to be extremely reliable in our power generation systems. Their technical support team is always responsive and helpful.",
      author: "Rajesh Kumar",
      position: "Chief Engineer, Kirloskar Oil Engines Ltd."
    },
    {
      quote: "We've been using Madhura's products for over 5 years and have never faced any major issues. Their quality control is impeccable.",
      author: "Sunil Mehta",
      position: "Technical Director, Cummins India Ltd."
    },
    {
      quote: "The custom solutions provided by Madhura for our specific requirements have helped us improve efficiency by 15%.",
      author: "Priya Sharma",
      position: "Operations Head, Tata Motors"
    }
  ];

  // Simulated API call for news
  useEffect(() => {
    const mockNews = [
      {
        title: "Madhura to Exhibit at Powergen India Expo",
        excerpt: "Madhura will showcase its latest innovations at the Powergen India Expo in New Delhi.",
        link: "/news/136"
      },
      {
        title: "Alternator Export to Europe",
        excerpt: "Madhura successfully exported 40kva & 100 Kva AC Alternators from India to Europe.",
        link: "/news/136"
      },
      {
        title: "Positive Response to Madhura's Stall at El-Asia 2024 Expo",
        excerpt: "Madhura's innovative stall received an excellent response at the El-Asia Expo in Bangalore.",
        link: "/news/136"
      },
      {
        title: "Madhura to Exhibit at EL-ASIA 2024 Power & Electrical Expo",
        excerpt: "Visit Madhura's stall at the El-Asia 2024 International Expo to explore our industrial product range.",
        link: "/news/136"
      }
    ];
    setNews(mockNews);
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.testimonialsSection}>
        <h2 className={styles.sectionTitle}>Client Testimonials</h2>
        <div className={styles.testimonialCards}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>❝</div>
              <p className={styles.quote}>{testimonial.quote}</p>
              <div className={styles.author}>
                <strong>{testimonial.author}</strong>
                <span className={styles.position}>{testimonial.position}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className={styles.newsSection}>
        <h2 className={styles.sectionTitle}>Latest News</h2>
        <div className={styles.newsGrid}>
          {news.map((item, index) => (
            <article key={index} className={styles.newsCard}>
              <h3 className={styles.newsTitle}>{item.title}</h3>
              <p className={styles.newsExcerpt}>{item.excerpt}</p>
              <a href={item.link} className={styles.readMore}>
                Read More →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsAndNews;
