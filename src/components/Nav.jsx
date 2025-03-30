import React, { useState } from 'react';
import "../css/nav.css"
import logo from "../assets/images/logo.png"
import hamburger from "../assets/images/hamburger.png"

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)



  return (
    <>
      <nav>
        <img src={logo} alt="" className='logo' />
        <div className={`mobile_nav ${isOpen ? "open" : ""}`}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Crypto News</a></li>
            <li><a href="#">Trending Projects</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <a href="#" className='nav-btn'>Get Started</a>
        </div>
        <img src={hamburger} alt="" className='hamburger' onClick={() => setIsOpen(!isOpen)} />
      </nav>
    </>
  )
}

export default Nav
