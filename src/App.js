import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Coins from './components/Coins';
import About from './components/About';
import FAQ from './components/FAQ';
import Subscription from './components/Subscription';
import Channel from './components/Channel';
import './App.css'; // Стили приложения

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coins" element={<Coins />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/channel" element={<Channel />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
