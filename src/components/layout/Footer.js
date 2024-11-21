import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Main Footer */}
        <div className="footer-main">
          {/* Brand Section */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="brand-text">Visualter</span>
              <span className="brand-dot">.</span>
            </Link>
            <p className="brand-description">
              Transforming ideas into exceptional digital experiences. We craft innovative solutions for web, mobile, and software development.
            </p>
            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <div className="footer-section">
              <h3>Company</h3>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/portfolio">Our Work</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Services</h3>
              <ul>
                <li><Link to="/services/web">Web Development</Link></li>
                <li><Link to="/services/mobile">Mobile Apps</Link></li>
                <li><Link to="/services/software">Software Development</Link></li>
                <li><Link to="/services/design">UI/UX Design</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Resources</h3>
              <ul>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/case-studies">Case Studies</Link></li>
                <li><Link to="/documentation">Documentation</Link></li>
                <li><Link to="/support">Support</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="footer-contact">
            <h3>Get in Touch</h3>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <p>123 Tech Street, Digital City<br />Innovation State, 12345</p>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <p>+1 (234) 567-8900<br />Mon-Fri, 9:00 AM - 6:00 PM</p>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <p>info@visualter.com<br />support@visualter.com</p>
              </div>
            </div>
            <Link to="/contact" className="contact-btn">
              Contact Us
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="footer-newsletter">
          <div className="newsletter-content">
            <h3>Subscribe to Our Newsletter</h3>
            <p>Stay updated with our latest news and insights</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {new Date().getFullYear()} Visualter. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/cookies">Cookie Policy</Link>
              <Link to="/sitemap">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 