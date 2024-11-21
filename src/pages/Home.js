import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      heroRef.current.style.setProperty('--mouse-x', x);
      heroRef.current.style.setProperty('--mouse-y', y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <Helmet>
        <title>Visualter</title>
      </Helmet>
      <div className="home">
        {/* Enhanced Hero Section */}
        <section className="hero" ref={heroRef}>
          <div className="hero-background">
            <div className="hero-overlay"></div>
            <div className="animated-bg"></div>
            <div className="gradient-sphere"></div>
            <div className="particles"></div>
          </div>
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge">
                <span className="badge-icon">✨</span>
                <span>Welcome to Visualter</span>
              </div>
              <h1>
                Transform Your <span className="gradient-text">Digital Vision</span>
                <br />
                <span className="highlight-text">Into Reality</span>
              </h1>
              <p className="hero-description">
                We craft exceptional digital experiences through innovative solutions in
                <span className="typing-text"> web development, mobile apps, and design</span>
              </p>
              <div className="hero-buttons">
                <Link to="/contact" className="btn btn-primary">
                  <span>Start Your Project</span>
                  <i className="fas fa-arrow-right"></i>
                </Link>
                <Link to="/portfolio" className="btn btn-secondary">
                  <span>View Portfolio</span>
                  <i className="fas fa-eye"></i>
                </Link>
              </div>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-icon">
                  <i className="fas fa-rocket"></i>
                </div>
                <span className="stat-number" data-value="100">0</span>
                <span className="stat-label">Projects Delivered</span>
                <span className="stat-desc">Successful digital solutions</span>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <i className="fas fa-smile"></i>
                </div>
                <span className="stat-number" data-value="50">0</span>
                <span className="stat-label">Happy Clients</span>
                <span className="stat-desc">Worldwide satisfaction</span>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <i className="fas fa-award"></i>
                </div>
                <span className="stat-number" data-value="5">0</span>
                <span className="stat-label">Years Experience</span>
                <span className="stat-desc">Industry expertise</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="featured-projects">
          <div className="section-header">
            <div className="section-badge">Our Latest Work</div>
            <h2>Featured <span className="gradient-text">Projects</span></h2>
            <p>Discover our latest success stories and innovative solutions</p>
          </div>
          <div className="project-grid">
            {[1, 2, 3].map((project) => (
              <div key={project} className="project-card">
                <div className="project-image">
                  <img src={`/images/project${project}.jpg`} alt={`Project ${project}`} />
                  <div className="project-overlay">
                    <div className="project-content">
                      <h3>Project Title {project}</h3>
                      <p>Web Development • UI/UX Design</p>
                      <Link to="/portfolio" className="project-link">
                        View Details
                        <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/portfolio" className="btn btn-outline">
              View All Projects
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </section>

        {/* Services Section */}
        <section className="services-overview">
          <div className="section-header">
            <div className="section-badge">What We Do</div>
            <h2>Our <span className="gradient-text">Services</span></h2>
            <p>Comprehensive digital solutions tailored to your needs</p>
          </div>
          <div className="services-grid">
            {[
              {
                icon: 'globe',
                title: 'Web Development',
                description: 'Custom websites and web applications built with cutting-edge technologies.',
                features: ['Responsive Design', 'E-commerce Solutions', 'CMS Integration', 'Performance Optimization'],
                color: '#00a8ff'
              },
              {
                icon: 'mobile-alt',
                title: 'Mobile Apps',
                description: 'Native and cross-platform apps for iOS and Android devices.',
                features: ['iOS Development', 'Android Development', 'Cross-Platform Apps', 'App Store Optimization'],
                color: '#00ff88'
              },
              {
                icon: 'paint-brush',
                title: 'UI/UX Design',
                description: 'User-centered design solutions that enhance digital experiences.',
                features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
                color: '#ff6b6b'
              },
              {
                icon: 'cogs',
                title: 'Software Development',
                description: 'Custom software solutions for business automation and efficiency.',
                features: ['Custom Software', 'API Integration', 'Database Design', 'Cloud Solutions'],
                color: '#ffd93d'
              }
            ].map((service, index) => (
              <div key={index} className="service-card" style={{'--accent-color': service.color}}>
                <div className="service-icon">
                  <i className={`fas fa-${service.icon}`}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <i className="fas fa-check"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/services" className="service-link">
                  Learn More
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="process-section">
          <div className="section-header">
            <div className="section-badge">How We Work</div>
            <h2>Development <span className="gradient-text">Process</span></h2>
            <p>Our proven approach to delivering exceptional results</p>
          </div>
          <div className="process-timeline">
            {[
              {
                phase: 'Discovery',
                icon: 'lightbulb',
                description: 'Understanding your vision and requirements',
                details: [
                  'Initial consultation',
                  'Requirements gathering',
                  'Project scope definition',
                  'Technology stack selection'
                ]
              },
              {
                phase: 'Planning',
                icon: 'tasks',
                description: 'Creating detailed project roadmap',
                details: [
                  'Project timeline creation',
                  'Resource allocation',
                  'Milestone definition',
                  'Risk assessment'
                ]
              },
              {
                phase: 'Design',
                icon: 'pencil-ruler',
                description: 'Crafting the perfect user experience',
                details: [
                  'UI/UX wireframing',
                  'Design prototyping',
                  'User flow mapping',
                  'Visual design'
                ]
              },
              {
                phase: 'Development',
                icon: 'code',
                description: 'Building with cutting-edge technology',
                details: [
                  'Agile development',
                  'Code reviews',
                  'Quality assurance',
                  'Progress tracking'
                ]
              },
              {
                phase: 'Testing',
                icon: 'vial',
                description: 'Ensuring quality and performance',
                details: [
                  'Functionality testing',
                  'Performance testing',
                  'Security testing',
                  'User acceptance testing'
                ]
              },
              {
                phase: 'Launch',
                icon: 'rocket',
                description: 'Deploying your solution',
                details: [
                  'Deployment preparation',
                  'Go-live execution',
                  'Performance monitoring',
                  'Post-launch support'
                ]
              }
            ].map((step, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-content">
                  <div className="timeline-icon">
                    <i className={`fas fa-${step.icon}`}></i>
                  </div>
                  <div className="timeline-info">
                    <span className="timeline-number">{index + 1}</span>
                    <h3>{step.phase}</h3>
                    <p className="timeline-description">{step.description}</p>
                    <ul className="timeline-details">
                      {step.details.map((detail, idx) => (
                        <li key={idx}>
                          <i className="fas fa-check"></i>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="cta-section">
          <div className="cta-background">
            <div className="cta-overlay"></div>
            <div className="cta-pattern"></div>
            <div className="cta-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>
          </div>
          <div className="cta-content">
            <div className="cta-badge">Start Your Journey</div>
            <h2>Ready to Transform Your <span className="gradient-text">Business ?</span></h2>
            <p>Let's discuss your project and explore how we can help you achieve your goals with our innovative solutions.</p>
            <div className="cta-features">
              <div className="cta-feature">
                <i className="fas fa-rocket"></i>
                <span>Quick Response</span>
              </div>
              <div className="cta-feature">
                <i className="fas fa-shield-alt"></i>
                <span>Secure Process</span>
              </div>
              <div className="cta-feature">
                <i className="fas fa-headset"></i>
                <span>24/7 Support</span>
              </div>
            </div>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                <span>Start a Project</span>
                <i className="fas fa-arrow-right"></i>
              </Link>
              <a href="tel:+1234567890" className="btn btn-secondary">
                <span>Schedule a Call</span>
                <i className="fas fa-phone"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home; 