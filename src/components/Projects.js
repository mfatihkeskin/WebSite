import React from 'react';
import { Link, Outlet } from 'react-router-dom';
//import './Projects.css'; // Yeni CSS stillerini eklemek için

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-sidebar">
        <h3>Projeler</h3>
        <ul>
          <li><Link to="project1">1. Proje</Link></li>
          <li><Link to="project2">2. Proje</Link></li>
          <li><Link to="project3">3. Proje</Link></li>
        </ul>
      </div>
      <div className="project-details">
        <Outlet />
      </div>
    </div>
  );
};

export default Projects;
