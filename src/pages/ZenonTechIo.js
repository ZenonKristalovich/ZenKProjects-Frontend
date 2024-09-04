import React from 'react';
import './css/zenkprojects.css';

const ZenonTechIo = () => {
  return (
    <div>
      <div className="zenkprojects-container">
        <h1 className="title">ZenonTech.io</h1>
        <div className="content">
          <section className="summary-section">
            <h2>Summary</h2>
            <p>
                ZenonTech.io is a React and Django application that enables an admin user to create and delete blog posts. 
                The application includes custom Django authentication to ensure secure data management and protect the integrity of the database.
            </p>
          </section>

          <section className="tools-section">
            <h2>Tools</h2>
            <p>
              This project was built using the following tools and technologies:
            </p>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML</li>
            </ul>
          </section>

          <section className="overview-section">
            <h2>Backend</h2>
            <p>
              The backend is built with Django and is configured to enforce CSRF token validation for all POST and DELETE requests. It includes robust user authentication to ensure that non-GET requests are only processed if the user is properly logged in. The backend provides functionality for user login, logout, blog creation, deletion, and more, offering a secure environment for managing content.
            </p>
            <h2>Frontend</h2>
            <p>
            The frontend of my project is built with React and features a homepage that functions as a digital resume. It highlights the programming languages I've worked with, the software I've used, and other key details. The site includes a user-friendly navbar at the top for seamless navigation. There are two pages dedicated to the content I've posted: one for software reviews and another for posts detailing challenges I've faced and how I overcame them. Both pages are equipped with search bars for easy access to specific information. For logged-in admins, there is a dedicated page where they can manage all posts, including the ability to delete them as needed.
            </p>
          </section>

          <section className="examples-section">
            <h2>Images</h2>
            <p>
              
            </p>
          </section>
        </div>
      </div>
      <div className="spacer"></div>
    </div>
  );
};

export default ZenonTechIo;