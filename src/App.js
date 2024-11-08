import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import ProjectsList from './pages/ProjectsList';
import ZenKProjects from './pages/ZenKProjects';
import ZenonTechIo from './pages/ZenonTechIo';
import JavaGames from './pages/JavaGames';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<ProjectsList />} />
      <Route path="/zenkproject" element={<ZenKProjects />} />
      <Route path="/zenontechio" element={<ZenonTechIo />} />
      <Route path="/javagames" element={<JavaGames />} />
    </Routes>
  </Router>
);

export default App;