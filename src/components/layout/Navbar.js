import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <span className="brand-text">Visualter</span>
          <span className="brand-dot">.</span>
        </Link>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li>
              <div onClick={() => handleNavigation('/')}>Home</div>
            </li>
            <li>
              <div onClick={() => handleNavigation('/about')}>About</div>
            </li>
            <li>
              <div onClick={() => handleNavigation('/clientele')}>Clientele</div>
            </li>
            <li>
              <div onClick={() => handleNavigation('/portfolio')}>Portfolio</div>
            </li>
            <li>
              <div onClick={() => handleNavigation('/students')}>Students</div>
            </li>
            <li>
              <div onClick={() => handleNavigation('/careers')}>Careers</div>
            </li>
            <li>
              <div onClick={() => handleNavigation('/contact')}>Contact Us</div>
            </li>
          </ul>
        </div>

        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 