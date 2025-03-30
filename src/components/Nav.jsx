import React from 'react';
import "../css/nav.css"
import logo from "../assets/images/logo.png"

const Nav = () => {
  return (
    <>
      <nav>
        <img src={logo} alt="" className='logo' />
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Crypto News</a></li>
          <li><a href="#">Trending Projects</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <a href="#" className='nav-btn'>Get Started</a>
      </nav>
    </>
  )
}

export default Nav
