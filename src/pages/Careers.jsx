// src/pages/Careers.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JobCard from '../components/JobCard';
import styles from '../styles/careers.module.css';

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: null,
    cover_letter: '',
    linkedin: '',
    portfolio: ''
  });

  const [errors, setErrors] = useState({});
  const [activeTab, setActiveTab] = useState('openings');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);

  // Sample job listings data - in a real app, this would come from an API
  const jobListings = [
    {
      id: 1,
      title: 'Electrical Engineers-Pune (Marketing)',
      department: 'Marketing',
      location: 'Pune, India',
      type: 'Full-time',
      experience: '3-5 years',
      postedDate: '2025-04-10',
      description: 'Candidate with BE degree in Electricals with 3 to 5 years experience is required to promote company products all over India and in neighboring countries. Candidate must have worked in marketing dept.',
      responsibilities: [
        'Promote company products to OEMs and end-users',
        'Develop and maintain client relationships',
        'Identify new market opportunities',
        'Provide technical support to customers',
        'Prepare sales reports and forecasts'
      ],
      requirements: [
        'BE in Electrical Engineering',
        '3-5 years of experience in marketing',
        'Strong technical knowledge of electrical systems',
        'Excellent communication skills',
        'Willingness to travel'
      ],
      benefits: [
        'Competitive salary package',
        'Health insurance',
        'Performance bonuses',
        'Professional development opportunities',
        'Collaborative work environment'
      ]
    },
    {
      id: 2,
      title: 'Electrical Engineer (Service)',
      department: 'Technical Support',
      location: 'Pune, India',
      type: 'Full-time',
      experience: '5-7 years',
      postedDate: '2025-04-15',
      description: 'Diploma or Graduate electrical engineer required with 5 to 7 years experience in Electrical panels, generator panels. Job is to support company products during commissioning.',
      responsibilities: [
        'Install and commission electrical control systems',
        'Troubleshoot technical issues at customer sites',
        'Provide technical support to customers',
        'Conduct product training for customers',
        'Document service reports and technical solutions'
      ],
      requirements: [
        'Diploma or BE in Electrical Engineering',
        '5-7 years of experience with electrical panels',
        'Knowledge of generator control systems',
        'Problem-solving skills',
        'Customer service orientation'
      ],
      benefits: [
        'Competitive salary package',
        'Health insurance',
        'Travel allowances',
        'Technical training opportunities',
        'Career advancement path'
      ]
    },
    {
      id: 3,
      title: 'Software Developer (IoT Systems)',
      department: 'R&D',
      location: 'Pune, India',
      type: 'Full-time',
      experience: '2-4 years',
      postedDate: '2025-04-18',
      description: 'Software developer with experience in IoT systems and embedded programming for our next-generation control systems.',
      responsibilities: [
        'Develop firmware for embedded control systems',
        'Create IoT connectivity solutions',
        'Implement data collection and analysis features',
        'Collaborate with hardware engineers',
        'Maintain and improve existing software'
      ],
      requirements: [
        'BE/BTech in Computer Science or Electronics',
        '2-4 years experience in embedded systems',
        'Proficiency in C/C++ and Python',
        'Experience with IoT protocols (MQTT, CoAP)',
        'Knowledge of cloud platforms (AWS/Azure)'
      ],
      benefits: [
        'Competitive salary package',
        'Health insurance',
        'Flexible work hours',
        'Learning budget',
        'Modern development environment'
      ]
    }
  ];

  useEffect(() => {
    // Filter jobs based on search query
    if (searchQuery.trim() === '') {
      setFilteredJobs(jobListings);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = jobListings.filter(job => 
        job.title.toLowerCase().includes(query) || 
        job.department.toLowerCase().includes(query) || 
        job.location.toLowerCase().includes(query) ||
        job.description.toLowerCase().includes(query)
      );
      setFilteredJobs(filtered);
    }
  }, [searchQuery]);

  // Initialize filtered jobs on component mount
  useEffect(() => {
    setFilteredJobs(jobListings);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0]
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Required fields validation
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.position) newErrors.position = 'Please select a position';
    if (!formData.experience) newErrors.experience = 'Experience is required';
    if (!formData.resume) newErrors.resume = 'Resume is required';
    
    // Email validation
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Phone validation
    if (formData.phone && !/^\d{10}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    // LinkedIn URL validation (if provided)
    if (formData.linkedin && !formData.linkedin.includes('linkedin.com')) {
      newErrors.linkedin = 'Please enter a valid LinkedIn URL';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // Simulate API call with a delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Form submission success
        setSubmitSuccess(true);
        setIsSubmitting(false);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            position: '',
            experience: '',
            resume: null,
            cover_letter: '',
            linkedin: '',
            portfolio: ''
          });
          
          // Reset file input
          const fileInput = document.getElementById('resume');
          if (fileInput) fileInput.value = '';
        }, 3000);
      } catch (error) {
        setIsSubmitting(false);
        alert('There was an error submitting your application. Please try again.');
      }
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <Header />
      
      {/* Hero Section for Careers */}
      <motion.div 
        className={styles.heroSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.heroContent}>
          <h1>Join Our Team</h1>
          <p>Build your career with a company that values innovation, growth, and excellence</p>
          <button 
            className={styles.heroCta}
            onClick={() => {
              document.getElementById('openPositions').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View Open Positions
          </button>
        </div>
      </motion.div>

      {/* Career Values Section */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Why Work With Us?</h2>
          
          <div className={styles.valueCards}>
            <motion.div 
              className={styles.valueCard}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
            >
              <div className={styles.valueIcon}>
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Innovation</h3>
              <p>We encourage creative thinking and innovative solutions to complex engineering challenges.</p>
            </motion.div>
            
            <motion.div 
              className={styles.valueCard}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
            >
              <div className={styles.valueIcon}>
                <i className="fas fa-users"></i>
              </div>
              <h3>Teamwork</h3>
              <p>Collaboration is at our core. We believe great ideas come from diverse perspectives.</p>
            </motion.div>
            
            <motion.div 
              className={styles.valueCard}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
            >
              <div className={styles.valueIcon}>
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Growth</h3>
              <p>We invest in our employees' professional development and career advancement.</p>
            </motion.div>
            
            <motion.div 
              className={styles.valueCard}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
            >
              <div className={styles.valueIcon}>
                <i className="fas fa-balance-scale"></i>
              </div>
              <h3>Work-Life Balance</h3>
              <p>We promote a healthy balance between professional responsibilities and personal well-being.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content - Careers Section */}
      <main className={styles.content}>
        <section className={styles.careersSection} id="openPositions">
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Career Opportunities</h2>
            
            <div className={styles.tabsContainer}>
              <div className={styles.tabs}>
                <button 
                  className={`${styles.tabButton} ${activeTab === 'openings' ? styles.activeTab : ''}`}
                  onClick={() => setActiveTab('openings')}
                >
                  Open Positions
                </button>
                <button 
                  className={`${styles.tabButton} ${activeTab === 'apply' ? styles.activeTab : ''}`}
                  onClick={() => setActiveTab('apply')}
                >
                  Apply Now
                </button>
                <button 
                  className={`${styles.tabButton} ${activeTab === 'culture' ? styles.activeTab : ''}`}
                  onClick={() => setActiveTab('culture')}
                >
                  Our Culture
                </button>
              </div>
              
              <div className={styles.tabContent}>
                {activeTab === 'openings' && (
                  <div className={styles.openingsTab}>
                    <div className={styles.searchContainer}>
                      <input
                        type="text"
                        placeholder="Search positions by title, department, or location..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className={styles.searchInput}
                      />
                      <i className={`fas fa-search ${styles.searchIcon}`}></i>
                    </div>
                    
                    {filteredJobs.length === 0 ? (
                      <div className={styles.noJobsFound}>
                        <i className="fas fa-search"></i>
                        <p>No positions found matching your search criteria.</p>
                        <button 
                          className={styles.resetButton}
                          onClick={() => setSearchQuery('')}
                        >
                          View All Positions
                        </button>
                      </div>
                    ) : (
                      <div className={styles.jobCards}>
                        {filteredJobs.map(job => (
                          <JobCard 
                            key={job.id} 
                            job={job} 
                            onApply={() => {
                              setActiveTab('apply');
                              setFormData({
                                ...formData,
                                position: job.title
                              });
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                )}
                
                {activeTab === 'apply' && (
                  <div className={styles.applyTab}>
                    <div className={styles.applicationForm}>
                      <h3>Apply Online</h3>
                      {submitSuccess ? (
                        <div className={styles.successMessage}>
                          <i className="fas fa-check-circle"></i>
                          <h4>Application Submitted Successfully!</h4>
                          <p>Thank you for your interest in joining Madhura International. Our HR team will review your application and contact you soon.</p>
                        </div>
                      ) : (
                        <form id="careerForm" onSubmit={handleSubmit}>
                          <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                              <label htmlFor="name">Full Name <span className={styles.required}>*</span></label>
                              <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={formData.name}
                                onChange={handleChange}
                                className={errors.name ? styles.errorInput : ''}
                                required 
                              />
                              {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
                            </div>
                            <div className={styles.formGroup}>
                              <label htmlFor="email">Email Address <span className={styles.required}>*</span></label>
                              <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email}
                                onChange={handleChange}
                                className={errors.email ? styles.errorInput : ''}
                                required 
                              />
                              {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
                            </div>
                          </div>
                          
                          <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                              <label htmlFor="phone">Phone Number <span className={styles.required}>*</span></label>
                              <input 
                                type="tel" 
                                id="phone" 
                                name="phone" 
                                value={formData.phone}
                                onChange={handleChange}
                                className={errors.phone ? styles.errorInput : ''}
                                required 
                              />
                              {errors.phone && <span className={styles.errorMessage}>{errors.phone}</span>}
                            </div>
                            <div className={styles.formGroup}>
                              <label htmlFor="linkedin">LinkedIn Profile (Optional)</label>
                              <input 
                                type="url" 
                                id="linkedin" 
                                name="linkedin" 
                                placeholder="https://www.linkedin.com/in/yourprofile"
                                value={formData.linkedin}
                                onChange={handleChange}
                                className={errors.linkedin ? styles.errorInput : ''}
                              />
                              {errors.linkedin && <span className={styles.errorMessage}>{errors.linkedin}</span>}
                            </div>
                          </div>
                          
                          <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                              <label htmlFor="position">Position Applied For <span className={styles.required}>*</span></label>
                              <select 
                                id="position" 
                                name="position" 
                                value={formData.position}
                                onChange={handleChange}
                                className={errors.position ? styles.errorInput : ''}
                                required
                              >
                                <option value="">Select Position</option>
                                {jobListings.map(job => (
                                  <option key={job.id} value={job.title}>{job.title}</option>
                                ))}
                                <option value="Other">Other/Not Listed</option>
                              </select>
                              {errors.position && <span className={styles.errorMessage}>{errors.position}</span>}
                            </div>
                            <div className={styles.formGroup}>
                              <label htmlFor="experience">Years of Experience <span className={styles.required}>*</span></label>
                              <input 
                                type="number" 
                                id="experience" 
                                name="experience" 
                                min="0" 
                                value={formData.experience}
                                onChange={handleChange}
                                className={errors.experience ? styles.errorInput : ''}
                                required 
                              />
                              {errors.experience && <span className={styles.errorMessage}>{errors.experience}</span>}
                            </div>
                          </div>
                          
                          <div className={styles.formGroup}>
                            <label htmlFor="portfolio">Portfolio/Website URL (Optional)</label>
                            <input 
                              type="url" 
                              id="portfolio" 
                              name="portfolio" 
                              placeholder="https://yourportfolio.com"
                              value={formData.portfolio}
                              onChange={handleChange}
                            />
                          </div>
                          
                          <div className={styles.formGroup}>
                            <label htmlFor="resume">Upload Resume (PDF/DOC) <span className={styles.required}>*</span></label>
                            <div className={styles.fileUploadWrapper}>
                              <input 
                                type="file" 
                                id="resume" 
                                name="resume" 
                                accept=".pdf,.doc,.docx" 
                                onChange={handleChange}
                                className={errors.resume ? styles.errorInput : ''}
                                required 
                              />
                              <div className={styles.fileUploadInfo}>
                                <i className="fas fa-cloud-upload-alt"></i>
                                <span>
                                  {formData.resume ? formData.resume.name : 'Drag & drop or click to upload'}
                                </span>
                              </div>
                            </div>
                            {errors.resume && <span className={styles.errorMessage}>{errors.resume}</span>}
                          </div>
                          
                          <div className={styles.formGroup}>
                            <label htmlFor="cover_letter">Cover Letter (Optional)</label>
                            <textarea 
                              id="cover_letter" 
                              name="cover_letter" 
                              rows="5"
                              placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                              value={formData.cover_letter}
                              onChange={handleChange}
                            ></textarea>
                          </div>
                          
                          <div className={styles.formActions}>
                            <button 
                              type="button" 
                              className={styles.secondaryBtn}
                              onClick={() => {
                                // Reset form
                                setFormData({
                                  name: '',
                                  email: '',
                                  phone: '',
                                  position: '',
                                  experience: '',
                                  resume: null,
                                  cover_letter: '',
                                  linkedin: '',
                                  portfolio: ''
                                });
                                setErrors({});
                                
                                // Reset file input
                                const fileInput = document.getElementById('resume');
                                if (fileInput) fileInput.value = '';
                              }}
                            >
                              Reset Form
                            </button>
                            <button 
                              type="submit" 
                              className={styles.primaryBtn}
                              disabled={isSubmitting}
                            >
                              {isSubmitting ? (
                                <>
                                  <span className={styles.spinner}></span>
                                  Submitting...
                                </>
                              ) : 'Submit Application'}
                            </button>
                          </div>
                        </form>
                      )}
                    </div>
                    
                    <div className={styles.contactInfo}>
                      <h3>Alternatively, Email your Resume to:</h3>
                      <div className={styles.address}>
                        <p><strong>Madhura International</strong></p>
                        <p>International Convention Centre,</p>
                        <p>A 202, Trade Tower, Senapati Bapat Road,</p>
                        <p>Pune - 411016, Maharashtra - INDIA.</p>
                        <p><strong>E-mail:</strong> <a href="mailto:careers@madhura.net">careers@madhura.net</a></p>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'culture' && (
                  <div className={styles.cultureTab}>
                    <div className={styles.cultureContent}>
                      <div className={styles.cultureImageWrapper}>
                        <img src="/Images/office-culture.jpg" alt="Madhura Office Culture" className={styles.cultureImage} />
                      </div>
                      <div className={styles.cultureText}>
                        <h3>Life at Madhura International</h3>
                        <p>At Madhura International, we believe that our success is built on the talents and dedication of our team. We foster a culture of innovation, collaboration, and continuous learning.</p>
                        
                        <h4>What to Expect</h4>
                        <ul className={styles.cultureList}>
                          <li>
                            <i className="fas fa-check-circle"></i>
                            <span>Collaborative environment where your ideas are valued</span>
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>
                            <span>Opportunities for professional growth and skill development</span>
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>
                            <span>Regular team-building activities and company events</span>
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>
                            <span>Recognition programs to celebrate achievements</span>
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>
                            <span>Work-life balance with flexible policies</span>
                          </li>
                        </ul>
                        
                        <div className={styles.testimonial}>
                          <div className={styles.testimonialContent}>
                            <p>"Working at Madhura has been an incredible journey. The company truly invests in its employees and provides opportunities to grow both professionally and personally."</p>
                          </div>
                          <div className={styles.testimonialAuthor}>
                            <img src="/Images/employee.jpg" alt="Employee" />
                            <div>
                              <h5>Rajesh Sharma</h5>
                              <p>Senior Engineer, 5 years at Madhura</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className={styles.benefitsSection}>
                      <h3>Employee Benefits</h3>
                      <div className={styles.benefitsGrid}>
                        <div className={styles.benefitCard}>
                          <i className="fas fa-heartbeat"></i>
                          <h4>Health Insurance</h4>
                          <p>Comprehensive medical coverage for you and your family</p>
                        </div>
                        <div className={styles.benefitCard}>
                          <i className="fas fa-graduation-cap"></i>
                          <h4>Learning & Development</h4>
                          <p>Training programs and educational assistance</p>
                        </div>
                        <div className={styles.benefitCard}>
                          <i className="fas fa-plane-departure"></i>
                          <h4>Paid Time Off</h4>
                          <p>Generous vacation policy and paid holidays</p>
                        </div>
                        <div className={styles.benefitCard}>
                          <i className="fas fa-chart-line"></i>
                          <h4>Performance Bonuses</h4>
                          <p>Rewards for exceptional contributions</p>
                        </div>
                        <div className={styles.benefitCard}>
                          <i className="fas fa-users"></i>
                          <h4>Team Events</h4>
                          <p>Regular social activities and team outings</p>
                        </div>
                        <div className={styles.benefitCard}>
                          <i className="fas fa-hand-holding-usd"></i>
                          <h4>Retirement Plans</h4>
                          <p>Long-term financial security options</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className={styles.faqSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            
            <div className={styles.faqContainer}>
              <div className={styles.faqItem}>
                <div className={styles.faqQuestion}>
                  <h4>What is the hiring process like?</h4>
                  <i className="fas fa-chevron-down"></i>
                </div>
                <div className={styles.faqAnswer}>
                  <p>Our hiring process typically includes an initial application review, a phone screening, technical assessment (if applicable), and in-person or virtual interviews. The entire process usually takes 2-3 weeks depending on the position.</p>
                </div>
              </div>
              
              <div className={styles.faqItem}>
                <div className={styles.faqQuestion}>
                  <h4>Do you offer internship opportunities?</h4>
                  <i className="fas fa-chevron-down"></i>
                </div>
                <div className={styles.faqAnswer}>
                  <p>Yes, we offer internship programs for students and recent graduates. Internships are typically posted at the beginning of each quarter. Please check our careers page regularly for updates.</p>
                </div>
              </div>
              
              <div className={styles.faqItem}>
                <div className={styles.faqQuestion}>
                  <h4>What if I don't see a position that matches my skills?</h4>
                  <i className="fas fa-chevron-down"></i>
                </div>
                <div className={styles.faqAnswer}>
                  <p>We're always looking for talented individuals. You can submit your resume for general consideration, and we'll contact you if a suitable position becomes available.</p>
                </div>
              </div>
              
              <div className={styles.faqItem}>
                <div className={styles.faqQuestion}>
                  <h4>Are there opportunities for remote work?</h4>
                  <i className="fas fa-chevron-down"></i>
                </div>
                <div className={styles.faqAnswer}>
                  <p>Some positions offer flexible work arrangements including remote or hybrid options. This information is typically included in the job description. If not specified, you can discuss this during the interview process.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;
