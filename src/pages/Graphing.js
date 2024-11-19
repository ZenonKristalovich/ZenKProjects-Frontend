import React, { useState } from 'react';
import './css/zenkprojects.css';

import graphImage from '../images/graph_page.png';
import inputImage from '../images/input_page.png';

const Graphing = () => {
  // State to track full-screen mode
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null); // State to store the current image URL for full screen

  const toggleFullScreen = (image) => {
    setCurrentImage(image);  // Set the image to display in full screen
    setIsFullScreen(!isFullScreen);  // Toggle full screen
  };

  return (
    <div>
      <div className="zenkprojects-container">
        <h1 className="title">ZenonTech.io</h1>
        <div className="content">
          <section className="summary-section">
            <h2>Summary</h2>
            <p>                
                This Graphing Application leverages Python's Matplotlib library to generate and display a variety of
                 graphs through an intuitive user interface. The UI offers seamless options for importing data files
                  and provides user-friendly controls to customize graphs effortlessly. Additionally, it features a 
                  simple, efficient way to export and download graph images for your convenience.
            </p>
          </section>

          <section className="tools-section">
            <h2>Tools</h2>
            <p>
              This project was built using the following tools and technologies:
            </p>
            <ul>
              <li>Python</li>
              <li>Matplotlib</li>
              <li>PYQT5</li>
            </ul>
          </section>

          <section className="overview-section">
            <h2>File Insertion</h2>
            <p>
            The program is packaged as an executable icon created using PyInstaller, 
            making it easy to launch and use. Upon starting, you are greeted with a file 
            selection page, where you can either drag and drop your data files or manually 
            browse through folders to select them. Once you've added your files, you can click 
            the "Graph" button to proceed to the graphing page. If no files have been selected, 
            an error message will appear, prompting you to add at least one file to continue.
            </p>
            <div className="image-item">
                <img
                  src={inputImage}
                  alt="Graphing Input Page"
                  onClick={() => toggleFullScreen(inputImage)} 
                />
                <p>A Picture of the input page</p>
            </div>
            <h2>Graphing Options</h2>
            <p>
            The graphing functionality supports two main approaches. If a single file is selected, 
            the application generates six separate graphs, each representing different components 
            and their data from the file. However, when multiple files are selected, the application 
            creates a series of graphs—six for each component across the files—enabling a comprehensive 
            comparison of data between the components across all selected files.
            </p>
            <div className="image-item">
                <img
                  src={graphImage}
                  alt="Graphing Page"
                  onClick={() => toggleFullScreen(graphImage)} // Toggle full screen on click
                />
                <p>A Picture of the graph page</p>
            </div>
            <h2>Graph Page</h2>
            <p>
            The graphing page is thoughtfully organized for user convenience. The left half of the screen 
            is dedicated to filters and options, where you can customize various aspects of the graph, such 
            as font, style, graph title, and component properties like shape, size, and color. On the right 
            side, the top section displays the total number of graphs and indicates which graph you are 
            currently viewing. Below this, the main graph is prominently displayed, with "Next" and "Previous" 
            buttons underneath, allowing you to navigate between graphs. At the bottom of the right side, 
            there is a download feature that lets you export your graph as either a PNG or PDF file.
            </p>
          </section>
        </div>
      </div>

      {/* Full-screen image modal */}
      {isFullScreen && (
        <div className="full-screen-overlay" onClick={() => setIsFullScreen(false)}>
          <div className="full-screen-container">
            <img src={currentImage} alt="Full-screen view" />
          </div>
        </div>
      )}

      <div className="spacer"></div>
    </div>
  );
};

export default Graphing;
