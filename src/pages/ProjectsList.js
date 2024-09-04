import React from 'react';
import './css/projectslist.css';

const projects = [
    {
      title: 'ZenKProjects',
      description: 'A React Frontend Application',
      link: '/zenkproject',
    },
    {
      title: 'ZenonTech.io',
      description: 'A React Django application with blog posting and user authentication',
      link: '/zenontechio',
    },
    // Add more projects as needed
  ];
  
  const ProjectsList = () => {
    return (
      <div className="projects-list">
        <h1>My Projects</h1>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <button 
                className="project-button" 
                onClick={() => window.location.href = project.link}
              >
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ProjectsList;