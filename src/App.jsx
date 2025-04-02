import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav'
import Hero from './components/Hero'
import Trending from './components/Trending'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
import "./global.css"
import Dashboard from './dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div>
            <Nav />
            <Hero />
            <Trending />
            <AboutUs />
            <Footer />
          </div>
        } />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App