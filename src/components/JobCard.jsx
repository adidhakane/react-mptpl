// src/components/JobCard.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/jobCard.module.css';

const JobCard = ({ job, onApply }) => {
  const [expanded, setExpanded] = useState(false);
  
  // Calculate days since posting
  const calculateDaysAgo = (postedDate) => {
    const posted = new Date(postedDate);
    const today = new Date();
    const diffTime = Math.abs(today - posted);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    return `${diffDays} days ago`;
  };
  
  return (
    <motion.div 
      className={styles.jobCard}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
    >
      <div className={styles.jobHeader}>
        <h3 className={styles.jobTitle}>{job.title}</h3>
        <span className={styles.jobType}>{job.type}</span>
      </div>
      
      <div className={styles.jobMeta}>
        <div className={styles.metaItem}>
          <i className="fas fa-map-marker-alt"></i>
          <span>{job.location}</span>
        </div>
        <div className={styles.metaItem}>
          <i className="fas fa-briefcase"></i>
          <span>{job.department}</span>
        </div>
        <div className={styles.metaItem}>
          <i className="fas fa-clock"></i>
          <span>{job.experience}</span>
        </div>
        <div className={styles.metaItem}>
          <i className="fas fa-calendar-alt"></i>
          <span>Posted {calculateDaysAgo(job.postedDate)}</span>
        </div>
      </div>
      
      <p className={styles.jobDescription}>{job.description}</p>
      
      <div className={styles.jobActions}>
        <button 
          className={styles.expandButton} 
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Show Less' : 'Show More'}
          <i className={`fas fa-chevron-${expanded ? 'up' : 'down'}`}></i>
        </button>
        <button 
          className={styles.applyButton}
          onClick={onApply}
        >
          Apply Now
        </button>
      </div>
      
      {expanded && (
        <motion.div 
          className={styles.expandedContent}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <div className={styles.jobSection}>
            <h4>Key Responsibilities</h4>
            <ul className={styles.jobList}>
              {job.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          
          <div className={styles.jobSection}>
            <h4>Requirements</h4>
            <ul className={styles.jobList}>
              {job.requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          
          <div className={styles.jobSection}>
            <h4>Benefits</h4>
            <ul className={styles.jobList}>
              {job.benefits.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default JobCard;
