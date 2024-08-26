import React from 'react';
import './css/home.css'; 

const Home = () => {

    return (
        <div>
            <div className="home-container">
                <h1 className="home-title">Zenon Kristalovich</h1>
                
                <section className="intro-section">
                    <h2>About Me</h2>
                    <p className='writing'>Hello! I'm Zenon Kristalovich, a entry level software developer with goals of working on web app and phone applications</p>
                </section>

                <section className="skills-section">
                    <h2>Software Experience</h2>
                    <ul className='writing'>
                        <li>React</li>
                        <li>Django</li>
                        <li>Unity</li>
                        <li>Android Studio</li>
                    </ul>
                    <h2>Languages</h2>
                    <ul className='writing'>
                        <li>JavaScript</li>
                        <li>Python</li>
                        <li>Java</li>
                        <li>Html</li>
                        <li>CSS</li>
                        <li>C++</li>
                        <li>C#</li>
                        <li>C</li>
                        <li>SQL</li>
                    </ul>
                </section>

                <section className="education-section">
                    <h2>Education</h2>
                    <p className='writing'>Nearly Completed Bachelor's Degree in Computer Science from University of Manitoba.</p>
                </section>

                <section className="contact-section">
                    <h2>Contact</h2>
                    <p className='writing'>You can reach me at: <a href="mailto:ZenonKristalovich@gmail.com" target="_blank" rel="noopener noreferrer">ZenonKristalovich@gmail.com</a></p>
                    <p className='writing'> Check out My Work on <a href="https://github.com/ZenonKristalovich" target="_blank" rel="noopener noreferrer"> GitHub</a>.</p>
                </section>
            </div>
            <div className="spacer"></div>
        </div>
    );
}

export default Home;

