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
            <h2>Overview</h2>
            <p>
              The application features a home page that highlights my skills, the programming languages I am proficient in, and the software tools I have experience using. Additionally, there is a projects page where I display a curated list of projects that I am particularly proud of. Each project entry allows you to explore further and gain deeper insights into the work involved.
            </p>
          </section>

          <section className="examples-section">
            <h2>Examples</h2>
            <p>
              As you are currently browsing this website, there is no need for examples; you can explore and experience all the features and projects directly!
            </p>
          </section>
        </div>
      </div>
      <div className="spacer"></div>
    </div>
  );
};

export default ZenonTechIo;