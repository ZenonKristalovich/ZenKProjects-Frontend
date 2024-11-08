import React from 'react';
import './css/zenkprojects.css';

import antcolonyImage from '../images/antcolonysim.png';
import adminImage from '../images/admin.png';
import postPageImage from '../images/postpage.png';
import postsImage from '../images/posts.png';

const JavaGames = () => {
  return (
    <div>
      <div className="zenkprojects-container">
        <h1 className="title">Java AI Games</h1>
        <div className="content">
          <section className="summary-section">
            <h2>Summary</h2>
            <p>
                The collection includes a series of basic Java game examples developed for the purpose of 
                practicing and refining various programming techniques. The objectives span a range of concepts, 
                including enemy interactions, pathfinding, optimization strategies, and algorithm implementation.
            </p>
            
          </section>

          <section className="tools-section">
            <h2>Games</h2>
            <p>
              The collection includes these 5 games:
            </p>
            <ul>
              <li>AntColonySim</li>
              <li>A*PathFinder</li>
              <li>Connect 4</li>
              <li>Ice Lake</li>
              <li>ValleyEscape</li>
            </ul>
          </section>

          <section className="overview-section">
            <h2>AntColonySim</h2>
            <p>
                AntColonySim is a basic top-down simulation game in which an ant nest is positioned near the center of the map. 
                Food, water, and poison are randomly distributed throughout the environment. The ants roam the map, searching for 
                resources. Once an ant finds food, it returns to the nest to drop it off, satisfying its hunger and spawning a new ant. 
                Afterward, the ant becomes thirsty and must locate a water source before gathering more food. The presence of poison adds 
                a hazard: if an ant encounters poison, it dies immediately.
            </p>
            <div className="image-item">
                <img src={antcolonyImage} alt="Human images represent the Ants" />
                <p>Image displays the login page of the website</p>
              </div>
            <h2>Frontend</h2>
            <p>
            The frontend of my project is built with React and features a homepage that functions as a digital resume. It highlights the programming languages I've worked with, the software I've used, and other key details. The site includes a user-friendly navbar at the top for seamless navigation. There are two pages dedicated to the content I've posted: one for software reviews and another for posts detailing challenges I've faced and how I overcame them. Both pages are equipped with search bars for easy access to specific information. For logged-in admins, there is a dedicated page where they can manage all posts, including the ability to delete them as needed.
            </p>
          </section>
        </div>
      </div>
      <div className="spacer"></div>
    </div>
  );
};

export default JavaGames;