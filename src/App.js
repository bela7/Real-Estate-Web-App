import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import News from './components/News';
import AboutUs from './components/AboutUs';
import Rentals from './components/Rentals';
import Sales from './components/Sales'; 
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/noutati" element={<News />} />
        <Route path="/despre-noi" element={<AboutUs />} />
        <Route path="/inchirieri" element={<Rentals />} />
        <Route path="/vanzari" element={<Sales />} /> 
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
 
  );
}

export default App;
