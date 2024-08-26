import React from 'react';
import { Link } from 'react-router-dom';
import './css/navbar.css'; 

const Navbar = () => {

  return (
    <nav className="navbar">
      <h1 className="navbar-title">ZenKProjects</h1>
      <div className="navbar-links">
        <Link to="/projects">Projects</Link>
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
};

export default Navbar;