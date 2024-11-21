import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './Students.css';

const Students = () => {
  const projectPackages = {
    frontend: {
      basic: {
        title: "Basic Frontend",
        price: "₹14,999",
        stack: ["HTML", "CSS", "JavaScript"],
        features: [
          "Static Website Projects",
          "Portfolio Websites",
          "Landing Pages",
          "Basic Animations",
          "Responsive Design",
          "Project Documentation"
        ]
      },
      advanced: {
        title: "Advanced Frontend",
        price: "₹29,999",
        stack: ["React.js", "Next.js", "Tailwind CSS"],
        features: [
          "Dynamic Web Applications",
          "State Management",
          "API Integration",
          "Advanced Animations",
          "Performance Optimization",
          "Comprehensive Documentation"
        ]
      }
    },
    backend: {
      basic: {
        title: "Basic Backend",
        price: "₹19,999",
        stack: ["Node.js", "Express", "MongoDB"],
        features: [
          "REST API Development",
          "Database Design",
          "Basic Authentication",
          "CRUD Operations",
          "Error Handling",
          "API Documentation"
        ]
      },
      advanced: {
        title: "Advanced Backend",
        price: "₹39,999",
        stack: ["Node.js", "NestJS", "PostgreSQL", "Redis"],
        features: [
          "Microservices Architecture",
          "Advanced Authentication",
          "Real-time Features",
          "Caching Implementation",
          "Security Best Practices",
          "Swagger Documentation"
        ]
      }
    },
    fullstack: {
      basic: {
        title: "Basic Fullstack",
        price: "₹44,999",
        stack: ["MERN Stack", "Redux", "JWT"],
        features: [
          "Complete Web Application",
          "User Authentication",
          "Database Integration",
          "Frontend & Backend",
          "Basic Deployment",
          "Full Documentation"
        ]
      },
      advanced: {
        title: "Advanced Fullstack",
        price: "₹74,999",
        stack: ["Next.js", "NestJS", "PostgreSQL", "AWS"],
        features: [
          "Enterprise Architecture",
          "Cloud Deployment",
          "CI/CD Pipeline",
          "Advanced Security",
          "Performance Optimization",
          "Technical Support"
        ]
      }
    },
    mobile: {
      basic: {
        title: "Mobile App Basic",
        price: "₹49,999",
        stack: ["React Native", "Firebase"],
        features: [
          "Cross-platform App",
          "Basic Features",
          "Firebase Integration",
          "Push Notifications",
          "App Store Deployment",
          "User Documentation"
        ]
      },
      advanced: {
        title: "Mobile App Pro",
        price: "₹99,999",
        stack: ["React Native", "Node.js", "MongoDB", "AWS"],
        features: [
          "Custom Backend",
          "Advanced Features",
          "Real-time Updates",
          "Analytics Integration",
          "Performance Optimization",
          "Technical Support"
        ]
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Students - Visualter</title>
      </Helmet>
      <div className="students-page">
        {/* Hero Section */}
        <section className="students-hero">
          <div className="hero-content">
            <h1>Student <span className="gradient-text">Services</span></h1>
            <p className="hero-subtitle">Empowering students with practical project experience and expert guidance</p>
          </div>
        </section>

        {/* Services Overview */}
        <section className="services-section">
          <div className="section-header">
            <h2>Our <span className="gradient-text">Services</span></h2>
            <p>Comprehensive support for your academic journey</p>
          </div>
          <div className="services-grid">
            {[
              {
                icon: 'laptop-code',
                title: 'Project Development',
                description: 'Get hands-on experience with real-world projects',
                features: [
                  'Custom Project Development',
                  'Latest Technology Stack',
                  'Industry Best Practices',
                  'Code Reviews & Guidance'
                ]
              },
              {
                icon: 'chalkboard-teacher',
                title: 'Project Understanding',
                description: 'Detailed explanation of project architecture and implementation',
                features: [
                  'Architecture Explanation',
                  'Code Walkthrough',
                  'Best Practices Discussion',
                  'Implementation Details'
                ]
              },
              {
                icon: 'book-reader',
                title: 'Research Support',
                description: 'Assistance with dissertation and research work',
                features: [
                  'Topic Selection Help',
                  'Research Methodology',
                  'Literature Review',
                  'Technical Writing Support'
                ]
              },
              {
                icon: 'users-class',
                title: 'Doubt Sessions',
                description: 'Regular sessions to clear your technical doubts',
                features: [
                  'One-on-One Sessions',
                  'Group Discussions',
                  'Concept Clarification',
                  'Problem Solving'
                ]
              }
            ].map((service, index) => (
              <div key={index} className="service-card">
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
              </div>
            ))}
          </div>
        </section>

        {/* Project Packages */}
        {Object.entries(projectPackages).map(([category, packages]) => (
          <section key={category} className="packages-section">
            <div className="section-header">
              <h2>{category.charAt(0).toUpperCase() + category.slice(1)} <span className="gradient-text">Projects</span></h2>
              <p>Choose the perfect package for your needs</p>
            </div>
            <div className="packages-grid">
              {Object.values(packages).map((pkg, index) => (
                <div key={index} className="package-card">
                  <div className="package-header">
                    <h4>{pkg.title}</h4>
                    <span className="package-price">{pkg.price}</span>
                  </div>
                  <div className="tech-stack">
                    {pkg.stack.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <ul className="package-features">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx}>
                        <i className="fas fa-check"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="package-cta">
                    Get Started
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Why Choose Us */}
        <section className="why-us-section">
          <div className="section-header">
            <h2>Why Choose <span className="gradient-text">Us</span></h2>
            <p>Benefits of working with our team</p>
          </div>
          <div className="benefits-grid">
            {[
              {
                icon: 'code',
                title: 'Industry Experts',
                description: 'Learn from professionals with years of industry experience'
              },
              {
                icon: 'clock',
                title: 'Timely Delivery',
                description: 'Get your projects delivered within the agreed timeline'
              },
              {
                icon: 'comments',
                title: '24/7 Support',
                description: 'Round-the-clock assistance for your queries'
              },
              {
                icon: 'shield-alt',
                title: 'Quality Assurance',
                description: 'High-quality code following industry standards'
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

        {/* CTA Section */}
        <section className="students-cta">
          <div className="cta-content">
            <h2>Ready to Start Your <span className="gradient-text">Project</span>?</h2>
            <p>Get in touch with us to discuss your requirements</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Contact Us
                <i className="fas fa-arrow-right"></i>
              </Link>
              <Link to="/portfolio" className="btn btn-secondary">
                View Projects
                <i className="fas fa-eye"></i>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Students; 