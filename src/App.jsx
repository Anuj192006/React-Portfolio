import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import LogBook from './Components/LogBook/LogBook';
import './App.css';
import About from './Components/About/About';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <video autoPlay loop muted playsInline className="background-video">
          <source src='bgm1.mp4' type="video/mp4" />
        </video>
        <div className="overlay">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logbook" element={<LogBook />} />
            <Route path="/about" element={<About/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
