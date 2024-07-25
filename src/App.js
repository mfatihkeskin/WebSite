import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';
import Contact from './components/Contact';
import profilePicture from './assets/pp.jpg';
import linkedinIcon from './assets/linkedin.png';
import gmailIcon from './assets/gmail.png';
import githubIcon from './assets/github.png';
import mediumIcon from './assets/medium.png';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <div className="sidebar">
          <img src={profilePicture} alt="Profile" className="profile-picture" />
          <h1>M.Fatih KESKİN</h1>
          <h2>Yazılım Mühendisi</h2>
          <nav>
            <ul>
              <li><Link to="/">Ana Sayfa</Link></li>
              <li><Link to="/projects">Projeler</Link></li>
              <li><Link to="/about">Sertifikalar</Link></li>
              <li><Link to="/contact">İletişim</Link></li>
            </ul>
          </nav>
          <div className="links">
            <img src={linkedinIcon} alt="LinkedIn" className="link-icon" onClick={() => window.open('https://www.linkedin.com/in/fatih-keskin-/', '_blank')} />
            <img src={gmailIcon} alt="Gmail" className="link-icon" onClick={() => window.open('mailto:mfatihkeskinnn@gmail.com')} />
            <img src={githubIcon} alt="GitHub" className="link-icon" onClick={() => window.open('https://github.com/MFatihKeskin', '_blank')} />
            <img src={mediumIcon} alt="Medium" className="link-icon" onClick={() => window.open('https://mfatihkeskin.medium.com/', '_blank')} />
          </div>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects/*" element={<Projects />}>
              <Route path="project1" element={<Project1 />} />
              <Route path="project2" element={<Project2 />} />
              <Route path="project3" element={<Project3 />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
