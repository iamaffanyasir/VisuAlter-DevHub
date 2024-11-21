import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Clientele from './pages/Clientele';
import Portfolio from './pages/Portfolio';
import Students from './pages/Students';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import ProjectsView from './pages/ProjectsView';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/clientele" element={<Clientele />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/students" element={<Students />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/:category" element={<ProjectsView />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 