import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import './Portfolio.css';

const Portfolio = () => {
  const navigate = useNavigate();

  const portfolioCategories = [
    {
      title: "Web Development",
      description: "Custom websites and web applications",
      image: "/images/web-dev.jpg",
      projects: [
        {
          id: 1,
          title: "E-commerce Platform",
          description: "A full-featured online shopping platform",
          image: "/images/ecommerce.jpg",
          category: "Web Development",
          technologies: ["React", "Node.js", "MongoDB", "AWS"],
          liveLink: "https://example.com"
        },
        {
          id: 2,
          title: "Social Media Dashboard",
          description: "Analytics and management platform",
          image: "/images/dashboard.jpg",
          category: "Web Development",
          technologies: ["Vue.js", "Firebase", "D3.js"],
          liveLink: "https://example.com"
        }
      ]
    },
    {
      title: "Mobile Development",
      description: "iOS and Android applications",
      image: "/images/mobile-dev.jpg",
      projects: [
        {
          id: 3,
          title: "Fitness Tracking App",
          description: "Health and workout monitoring app",
          image: "/images/fitness-app.jpg",
          category: "Mobile Development",
          technologies: ["React Native", "Firebase", "Redux"],
          liveLink: "https://example.com"
        },
        {
          id: 4,
          title: "Food Delivery App",
          description: "On-demand food ordering platform",
          image: "/images/food-app.jpg",
          category: "Mobile Development",
          technologies: ["Flutter", "Node.js", "MongoDB"],
          liveLink: "https://example.com"
        }
      ]
    },
    {
      title: "UI/UX Design",
      description: "User interface and experience design",
      image: "/images/ui-design.jpg",
      projects: [
        {
          id: 5,
          title: "Banking App Design",
          description: "Modern banking application interface",
          image: "/images/bank-app.jpg",
          category: "UI/UX Design",
          technologies: ["Figma", "Adobe XD", "Prototyping"],
          liveLink: "https://example.com"
        },
        {
          id: 6,
          title: "Travel Platform Design",
          description: "Travel booking platform interface",
          image: "/images/travel-app.jpg",
          category: "UI/UX Design",
          technologies: ["Sketch", "InVision", "User Testing"],
          liveLink: "https://example.com"
        }
      ]
    }
  ];

  const handleCategoryClick = (category, projects) => {
    navigate(`/projects/${category.toLowerCase()}`, { state: { category, projects } });
  };

  return (
    <>
      <Helmet>
        <title>Portfolio - Visualter</title>
      </Helmet>
      <div className="portfolio-page">
        {/* Hero Section */}
        <section className="portfolio-hero">
          <div className="hero-content">
            <h1>Our <span className="gradient-text">Portfolio</span></h1>
            <p className="hero-subtitle">Explore our latest work and success stories</p>
          </div>
        </section>

        {/* Portfolio Categories */}
        {portfolioCategories.map((category, index) => (
          <section key={index} className="portfolio-section">
            <div className="section-header">
              <h2>{category.title} <span className="gradient-text">Projects</span></h2>
              <p>{category.description}</p>
            </div>
            <div className="projects-grid">
              {category.projects.map((project) => (
                <div key={project.id} className="project-card">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <div className="project-details">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="tech-stack">
                          {project.technologies.map((tech, index) => (
                            <span key={index} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="view-project-btn">
                          View Live <i className="fas fa-external-link-alt"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="project-info">
                    <span className="project-category">{project.category}</span>
                    <h4>{project.title}</h4>
                  </div>
                </div>
              ))}
            </div>
            <div className="section-cta">
              <button 
                className="btn btn-outline"
                onClick={() => handleCategoryClick(category.title, category.projects)}
              >
                View All {category.title} Projects
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="portfolio-cta">
          <div className="cta-content">
            <h2>Ready to Start Your <span className="gradient-text">Project</span>?</h2>
            <p>Let's discuss how we can help bring your vision to life</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Start a Project
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

export default Portfolio; 