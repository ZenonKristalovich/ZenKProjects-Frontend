import React from 'react';
import './css/zenkprojects.css';

import antcolonyImage from '../images/antcolonysim.png';
import astarImage from '../images/Astar.png';
import connect4Image from '../images/connect4.png';
import icelakeImage from '../images/icelake.png';
import escapeImage from '../images/escape.png';

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
                <p>Human images represent the Ants</p>
            </div>
            <p>
              This game uses a combination of a wandering algorithm and A* Pathfinding. When the 'ants' are exploring the map
               they move randomly until they encounter, either water, poison or food. Water has no change on movement pattenrs, 
               poison kills and removes the ant from the simulation, but when it encounters food it will want to return to the nest. 
               The ant will use A* Pathfinding to find its way back to the nest in the most efficent way possible.
            </p>

            <h2>A*PathFinding</h2>
            <p>
            The game is a basic top down game, You can make a map for an AI "Ant" to find its 
            way through to the goal position or use one of the premade maps. Once initiated, the 
            game shows the tiles it looks at and the final path.
            The display of showing the path finding is not in real time. After the ant makes it 
            home the game will display the time it took. 
            </p>
            <div className="image-item">
                <img src={astarImage} alt="Pathing algorithm" />
                <p>Red shows tiles already been observed in search algorithm</p>
            </div>
            <p>
              The game makes use of A*Pathfinding and using a heuristic approach of selecting the
               closest tile to the goal tile. A simple game meant to visualize how pathfinding works. 
               The game also takes into account terrain difficulty, each different type of ground has a 
               different cost to travel trhough, this makes it so that even the direct approach with no 
               obstacles may be the wrong approach.
            </p>

            <h2>Connect 4</h2>
            <p>
            Everyone has heard of the classic connect 4 game. You play against an AI opponent and whoever 
            puts 4 chips in the row is the victor. 
            </p>
            <div className="image-item">
                <img src={connect4Image} alt="Connect 4 Game" />
                <p>An outcome where the bot wins</p>
            </div>
            <p>
            Connect 4 utilizes a Minimax algorithm, enhanced with alpha-beta pruning, to determine 
            the optimal move. The current implementation is designed to evaluate potential outcomes 
            up to four moves ahead, using alpha-beta pruning to efficiently reduce the number of 
            branches explored and improve decision-making speed.
            </p>

            <h2>Ice Escape</h2>
            <p>
            The ice is fracturing beneath your feet, leaving the bot with no option 
            but to adapt and survive for as long as possible by skillfully avoiding the 
            crumbling ice. 
            </p>
            <div className="image-item">
                <img src={icelakeImage} alt="Ice Game" />
                <p>Bot avoiding the cracked ice</p>
            </div>
            <p>
            This game employs reinforcement learning, where the bot is rewarded based 
            on its actions. For instance, the bot earns the highest rewards for remaining 
            on solid ice, receives penalties for falling into the water, and is assigned 
            varying points for navigating cracked ice. There is also a chance of forced randomness 
            where the bot makes a random decision to discover new possibilities, after each round, 
            the randomness chance decreases.
            </p>

            <h2>ValleyEscape</h2>
            <p>
            The game is a simple top-down adventure where the objective is to escape the area while 
            avoiding roaming skeletons. To succeed, the player must collect a key to unlock the gate 
            and make their escape. However, picking up the key triggers all the skeletons to become 
            aware of the player's location, causing them to hunt the player as a unified group. 
            After escaping, the player advances to the next level, which features the same objective
            </p>
            <div className="image-item">
                <img src={escapeImage} alt="Valley Escape Game" />
                <p>player being chased by skeletons</p>
            </div>
            <p>
            The games goal is display different forms of enemy AI movement. In this case we have a 
            wandering movement, where they just walk around. We have a seeking movement, where when the 
            player gets close enough, the skeletons begin to chase. And we have an item that will scare 
            away skeletons for a short period, so a flee movement. There is alsoa  group coordiantion 
            movement that occurs when the player grabs the key. Where the skeletons move together in a 
            triangle formation to the player. 
            </p>

            <h2>GitHub Link</h2>
            <p>
            If you wish to test out these programs yourself. You can view and download them from my github, 
            link provided down below. They do require you to have java installed though! 
            </p>
            <a href="https://github.com/ZenonKristalovich/AI_Java_Games" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </section>
        </div>
      </div>
      <div className="spacer"></div>
    </div>
  );
};

export default JavaGames;