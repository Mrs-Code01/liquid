import React from 'react'
import "../css/aboutus.css"
import bluesquares from "../assets/images/bluesquares.png"
import smalleclipse from "../assets/images/smalleclipse.png"
import bigeclipse from "../assets/images/bigeclipse.png"




const AboutUs = () => {
  return (
    <>
      <section className='about_us' id='about'>
        <div>
          <h2>About Us</h2>
          <img src={bluesquares} alt="" />
        </div>
        <h3>What we do</h3>
        <p>
          At LiquidBlock, we're passionate about bringing transparency and insights to the ever-evolving world of cryptocurrency. Founded by a team of crypto enthusiasts and market experts, our platform is dedicated to helping you navigate the complexities of the blockchain ecosystem. We provide real-time market data, detailed analysis, and expert opinions on the latest and most promising crypto projects. Whether you're a seasoned investor or a curious newcomer, Block Review offers the tools and resources you need to stay informed and ahead of the curve. Our mission is simple: to empower individuals and businesses with the knowledge and insights needed to make informed decisions in the crypto market. We believe in the potential of blockchain technology and its ability to reshape industries, and we're here to guide you through this exciting journey
        </p>
        <img src={bigeclipse} alt="" />
        <img src={smalleclipse} alt="" />
      </section>
    </>
  )
}

export default AboutUs
