import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import './ProjectsView.css';

const ProjectsView = () => {
  const location = useLocation();
  const { category, projects } = location.state || {};
  
  // Get unique tags from all projects
  const allTags = [...new Set(projects.flatMap(project => project.technologies))];
  
  const [selectedTags, setSelectedTags] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (selectedTags.length === 0) {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project =>
        selectedTags.some(tag => project.technologies.includes(tag))
      );
      setFilteredProjects(filtered);
    }
  }, [selectedTags, projects]);

  const toggleTag = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <>
      <Helmet>
        <title>{`${category} Projects - Visualter`}</title>
      </Helmet>
      <div className="projects-view-page">
        <div className="projects-header">
          <h1>{category.charAt(0).toUpperCase() + category.slice(1)} <span className="gradient-text">Projects</span></h1>
          <p>Filter projects by technology</p>
        </div>

        <div className="filter-tags">
          {allTags.map(tag => (
            <button
              key={tag}
              className={`filter-tag ${selectedTags.includes(tag) ? 'active' : ''}`}
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="filtered-projects-grid">
          {filteredProjects.map((project) => (
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
      </div>
    </>
  );
};

export default ProjectsView; 