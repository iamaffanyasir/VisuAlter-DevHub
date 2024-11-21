import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './Careers.css';

const Careers = () => {
  return (
    <>
      <Helmet>
        <title>Careers - Visualter</title>
      </Helmet>
      <div className="careers-page">
        {/* Hero Section */}
        <section className="careers-hero">
          <div className="hero-content">
            <h1>Join Our <span className="gradient-text">Team</span></h1>
            <p className="hero-subtitle">Build the future of digital innovation with us</p>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <div className="section-header">
            <h2>Our <span className="gradient-text">Values</span></h2>
            <p>What drives us forward</p>
          </div>
          <div className="values-grid">
            {[
              {
                icon: 'lightbulb',
                title: 'Innovation',
                description: 'We embrace new ideas and technologies to push boundaries.'
              },
              {
                icon: 'users',
                title: 'Collaboration',
                description: 'We believe in the power of teamwork and shared success.'
              },
              {
                icon: 'chart-line',
                title: 'Growth',
                description: 'We invest in continuous learning and development.'
              },
              {
                icon: 'heart',
                title: 'Passion',
                description: 'We love what we do and it shows in our work.'
              }
            ].map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <i className={`fas fa-${value.icon}`}></i>
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="benefits-section">
          <div className="section-header">
            <h2>Employee <span className="gradient-text">Benefits</span></h2>
            <p>What we offer to our team members</p>
          </div>
          <div className="benefits-grid">
            {[
              {
                icon: 'laptop-house',
                title: 'Flexible Work',
                description: 'Remote work options and flexible hours'
              },
              {
                icon: 'graduation-cap',
                title: 'Learning Budget',
                description: 'Annual budget for courses and conferences'
              },
              {
                icon: 'medal',
                title: 'Performance Bonus',
                description: 'Rewards for exceptional contributions'
              },
              {
                icon: 'heartbeat',
                title: 'Health Benefits',
                description: 'Comprehensive health insurance coverage'
              }
            ].map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">
                  <i className={`fas fa-${benefit.icon}`}></i>
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="positions-section">
          <div className="section-header">
            <h2>Open <span className="gradient-text">Positions</span></h2>
            <p>Join our growing team</p>
          </div>
          {[
            {
              category: 'Engineering',
              positions: [
                {
                  title: 'Senior Frontend Developer',
                  type: 'Full-time',
                  location: 'Remote',
                  experience: '5+ years',
                  description: 'Looking for an experienced frontend developer with React expertise.',
                  skills: ['React', 'TypeScript', 'Redux', 'CSS3']
                },
                {
                  title: 'Backend Developer',
                  type: 'Full-time',
                  location: 'Hybrid',
                  experience: '3+ years',
                  description: 'Seeking a backend developer with Node.js and database expertise.',
                  skills: ['Node.js', 'MongoDB', 'AWS', 'API Design']
                }
              ]
            },
            {
              category: 'Design',
              positions: [
                {
                  title: 'UI/UX Designer',
                  type: 'Full-time',
                  location: 'Remote',
                  experience: '3+ years',
                  description: 'Seeking a creative designer with strong user experience skills.',
                  skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research']
                }
              ]
            }
          ].map((category, index) => (
            <div key={index} className="position-category">
              <h3>{category.category}</h3>
              <div className="positions-grid">
                {category.positions.map((position, idx) => (
                  <div key={idx} className="position-card">
                    <div className="position-header">
                      <h4>{position.title}</h4>
                      <span className="position-type">{position.type}</span>
                    </div>
                    <div className="position-details">
                      <p><i className="fas fa-map-marker-alt"></i> {position.location}</p>
                      <p><i className="fas fa-clock"></i> {position.experience}</p>
                    </div>
                    <p className="position-description">{position.description}</p>
                    <div className="position-skills">
                      {position.skills.map((skill, skillIdx) => (
                        <span key={skillIdx} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                    <Link to="/contact" className="apply-btn">
                      Apply Now
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="careers-cta">
          <div className="cta-content">
            <h2>Ready to Start Your <span className="gradient-text">Journey</span>?</h2>
            <p>Join our team and help shape the future of technology</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Apply Now
                <i className="fas fa-arrow-right"></i>
              </Link>
              <Link to="/about" className="btn btn-secondary">
                Learn More
                <i className="fas fa-info-circle"></i>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Careers; 