import React, { useState } from 'react';
import "../css/nav.css"
import navlogo from "../assets/images/liquidnav.png"
import hamburger from "../assets/images/hamburger.png"
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)



  return (
    <>
      <nav className=''>
        <img src={navlogo} alt="" className='logo' />
        <div className={`mobile_nav ${isOpen ? "open" : ""}`}>
          <ul>
            <li><a className="text-base" href="#">Home</a></li>
            <li><a className="text-base" href="#news">Crypto News</a></li>
            <li><a className="text-base" href="#trending">Trending Projects</a></li>
            <li><a className="text-base" href="#about">About Us</a></li>
            <li><a className="text-base" href="#contact">Contact</a></li>
          </ul>
          <Link to="/dashboard" className="nav-btn">Get Started</Link>
        </div>
        <img src={hamburger} alt="" className='hamburger' onClick={() => setIsOpen(!isOpen)} />
      </nav>
    </>
  )
}

export default Nav
