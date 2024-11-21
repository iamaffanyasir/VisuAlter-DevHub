import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About - Visualter</title>
      </Helmet>
      <div className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-content">
            <h1>We Are <span className="gradient-text">Visualter</span></h1>
            <p className="hero-subtitle">Transforming ideas into exceptional digital experiences</p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="about-section story-section">
          <div className="section-header">
            <h2>Our <span className="gradient-text">Story</span></h2>
            <p>A journey of innovation and excellence</p>
          </div>
          <div className="story-content">
            <div className="story-text">
              <p>Founded in 2019, Visualter has grown from a small team of passionate developers into a full-service digital solutions provider. Our mission is to help businesses thrive in the digital age through innovative technology solutions and exceptional design.</p>
              <p>Today, we're proud to have served over 100 clients worldwide, delivering projects that not only meet but exceed expectations. Our commitment to quality and innovation remains at the heart of everything we do.</p>
            </div>
            <div className="story-stats">
              <div className="stat-card">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years of Excellence</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">100+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">50+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="about-section values-section">
          <div className="section-header">
            <h2>Our <span className="gradient-text">Values</span></h2>
            <p>The principles that guide our work</p>
          </div>
          <div className="values-grid">
            {[
              {
                icon: 'star',
                title: 'Excellence',
                description: 'We strive for excellence in every project we undertake.'
              },
              {
                icon: 'handshake',
                title: 'Integrity',
                description: 'We believe in honest and transparent relationships with our clients.'
              },
              {
                icon: 'lightbulb',
                title: 'Innovation',
                description: 'We stay at the forefront of technological advancement.'
              },
              {
                icon: 'users',
                title: 'Collaboration',
                description: 'We work closely with our clients to achieve their goals.'
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

        {/* Team Section */}
        <section className="team-section">
          <div className="section-header">
            <div className="section-badge">Meet Our Team</div>
            <h2>The <span className="gradient-text">Experts</span></h2>
            <p>Passionate professionals driving innovation and excellence</p>
          </div>
          <div className="team-grid">
            {[
              {
                name: 'Mohammad Affan Yasir',
                role: 'Lead Software Developer',
                image: '/images/team1.jpg',
                bio: 'Expert in full-stack development with 5+ years of experience in building scalable applications.',
                skills: ['React', 'Node.js', 'Python', 'AWS'],
                social: {
                  linkedin: 'https://linkedin.com/in/mohammad-affan-yasir-6a1976179/',
                  github: 'https://github.com/iamaffanyasir',
                  twitter: 'https://x.com/wolverine1k999'
                }
              },
              {
                name: 'Faizeen Saba Naz',
                role: 'Software Developer',
                image: '/images/team2.jpg',
                bio: 'Dedicated to ensuring client success and maintaining strong relationships.',
                skills: ['Java', 'Python', 'SQL', 'SpringBoot'],
                social: {
                  linkedin: 'https://www.linkedin.com/in/faizeen-s-779012237/',
                  twitter: 'https://twitter.com'
                }
              
              },
              {
                name: 'Saheb Alam',
                role: 'Data Analyst and Marketing Expert',
                image: '/images/team3.jpg',
                bio: 'Specializes in data-driven marketing strategies and business analytics.',
                skills: ['Data Analysis', 'Digital Marketing', 'SEO', 'Market Research'],
                social: {
                  linkedin: 'https://www.linkedin.com/in/saheb-alam-632712286/',
                  twitter: 'https://twitter.com'
                }
              },
              {
                name: 'Kabeer Rana',
                role: 'Lead UI/UX Designer',
                image: '/images/team4.jpg',
                bio: 'Creative designer focused on crafting intuitive and engaging user experiences.',
                skills: ['UI Design', 'UX Research', 'Prototyping', 'Design Systems'],
                social: {
                  linkedin: 'https://www.linkedin.com/in/kabrana1999/',
                  dribbble: 'https://dribbble.com/kab1999',
                  behance: 'https://www.behance.net/kabeerrana1'
                }
              },
              
            ].map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-member-image">
                  <img src={member.image} alt={member.name} />
                  <div className="member-overlay">
                    <div className="member-social">
                      {Object.entries(member.social).map(([platform, link]) => (
                        <a 
                          key={platform} 
                          href={link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="social-icon"
                        >
                          <i className={`fab fa-${platform}`}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="team-member-info">
                  <h3>{member.name}</h3>
                  <span className="member-role">{member.role}</span>
                  <p className="member-bio">{member.bio}</p>
                  <div className="member-skills">
                    {member.skills.map((skill, idx) => (
                      <span key={idx} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta">
          <div className="cta-content">
            <h2>Ready to Start Your <span className="gradient-text">Project</span>?</h2>
            <p>Let's create something amazing together</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                <i className="fas fa-paper-plane"></i>
                <span>Get in Touch</span>
              </Link>
              <Link to="/portfolio" className="btn btn-secondary">
                <i className="fas fa-eye"></i>
                <span>View Our Work</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About; 