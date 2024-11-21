import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    projectType: 'website'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Visualter</title>
      </Helmet>
      <div className="contact-page">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="hero-content">
            <h1>Get In <span className="gradient-text">Touch</span></h1>
            <p className="hero-subtitle">Let's discuss your project and explore how we can help</p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="contact-info-section">
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <h3>Call Us</h3>
              <p>We're available Mon-Fri, 9am-6pm</p>
              <a href="tel:+1234567890" className="info-link">+1 (234) 567-8900</a>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>Email Us</h3>
              <p>We'll respond within 24 hours</p>
              <a href="mailto:info@visualter.com" className="info-link">info@visualter.com</a>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>Visit Us</h3>
              <p>Our office location</p>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="info-link">
                123 Tech Street, Digital City
              </a>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="contact-form-section">
          <div className="section-header">
            <h2>Send Us a <span className="gradient-text">Message</span></h2>
            <p>Fill out the form below and we'll get back to you shortly</p>
          </div>
          <div className="form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="projectType">Project Type *</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                  >
                    <option value="website">Website Development</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="software">Software Development</option>
                    <option value="design">UI/UX Design</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group full-width">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Enter message subject"
                  />
                </div>
                <div className="form-group full-width">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project"
                    rows="6"
                  ></textarea>
                </div>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <div className="section-header">
            <h2>Frequently Asked <span className="gradient-text">Questions</span></h2>
            <p>Find quick answers to common questions</p>
          </div>
          <div className="faq-grid">
            {[
              {
                question: "What is your typical project timeline?",
                answer: "Project timelines vary depending on complexity. A typical website project takes 4-8 weeks, while larger applications may take 3-6 months."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes, we offer various maintenance and support packages to ensure your project continues to run smoothly after launch."
              },
              {
                question: "What are your payment terms?",
                answer: "We typically require a 50% upfront deposit, with the remaining balance due upon project completion. We also offer flexible payment plans."
              },
              {
                question: "Can you help with existing projects?",
                answer: "Yes, we can help maintain, upgrade, or redesign existing projects. We'll first assess the current state and provide recommendations."
              }
            ].map((faq, index) => (
              <div key={index} className="faq-card">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Social Links */}
        <section className="social-section">
          <div className="section-header">
            <h2>Connect With <span className="gradient-text">Us</span></h2>
            <p>Follow us on social media for updates and insights</p>
          </div>
          <div className="social-links">
            {[
              { platform: 'linkedin', icon: 'linkedin', url: 'https://linkedin.com' },
              { platform: 'twitter', icon: 'twitter', url: 'https://twitter.com' },
              { platform: 'instagram', icon: 'instagram', url: 'https://instagram.com' },
              { platform: 'github', icon: 'github', url: 'https://github.com' }
            ].map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className={`fab fa-${social.icon}`}></i>
                <span>{social.platform}</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact; 