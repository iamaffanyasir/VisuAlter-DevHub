import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './Clientele.css';

const Clientele = () => {
  return (
    <>
      <Helmet>
        <title>Clientele - Visualter</title>
      </Helmet>
      <div className="clientele-page">
        {/* Hero Section */}
        <section className="clientele-hero">
          <div className="hero-content">
            <h1>Our <span className="gradient-text">Clientele</span></h1>
            <p className="hero-subtitle">Trusted by leading companies worldwide</p>
          </div>
        </section>

        {/* Clients Grid Section */}
        <section className="clients-section">
          <div className="section-header">
            <h2>Companies That <span className="gradient-text">Trust Us</span></h2>
            <p>We've worked with diverse clients across various industries</p>
          </div>
          <div className="clients-grid">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((client) => (
              <div key={client} className="client-card">
                <div className="client-logo">
                  <img src={`/images/client${client}.png`} alt={`Client ${client}`} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <div className="section-header">
            <h2>Client <span className="gradient-text">Testimonials</span></h2>
            <p>What our clients say about working with us</p>
          </div>
          <div className="testimonials-grid">
            {[
              {
                quote: "Working with Visualter has been an incredible experience. Their team's expertise and dedication transformed our vision into reality.",
                author: "John Smith",
                position: "CEO",
                company: "Tech Solutions Inc."
              },
              {
                quote: "The level of professionalism and technical expertise at Visualter is outstanding. They delivered beyond our expectations.",
                author: "Sarah Johnson",
                position: "CTO",
                company: "Digital Innovations"
              },
              {
                quote: "Visualter's innovative approach and attention to detail made them the perfect partner for our digital transformation journey.",
                author: "Michael Brown",
                position: "Product Manager",
                company: "Future Systems"
              }
            ].map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="quote-icon">
                  <i className="fas fa-quote-left"></i>
                </div>
                <div className="testimonial-content">
                  <p>{testimonial.quote}</p>
                  <div className="testimonial-author">
                    <div className="author-info">
                      <h4>{testimonial.author}</h4>
                      <p>{testimonial.position}</p>
                      <p className="company">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="clientele-cta">
          <div className="cta-content">
            <h2>Ready to Join Our <span className="gradient-text">Success Stories ?</span></h2>
            <p>Let's discuss how we can help transform your business</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Get Started
                <i className="fas fa-arrow-right"></i>
              </Link>
              <Link to="/portfolio" className="btn btn-secondary">
                View Our Work
                <i className="fas fa-eye"></i>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Clientele; 