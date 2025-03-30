import React from 'react'
import "../css/hero.css"
import curve from "../assets/images/curve.png"
import litecoin from "../assets/images/litecoin.png"
import bigeclipse from "../assets/images/bigeclipse.png"
import smalleclipse from "../assets/images/smalleclipse.png"
import laptop from "../assets/images/laptop.png"
import bulb from "../assets/images/bulb.png"
import candle from "../assets/images/candle.png"

const Hero = () => {
  return (
    <>
      <main>
        <img src={smalleclipse} alt="" className='hero-small-eclipse' />
        <div className='hero-left'>
          <div>
            <h1>Stay Ahead Of The Crypto Curve</h1>
            <img src={curve} alt="" />
          </div>
          <p>
            Unlock the full potential of your crypto portfolio—borrow the digital assets you need instantly with flexible terms, or earn passive income by providing liquidity to leading crypto exchanges, all while maintaining complete control and security over your assets.
          </p>
          <div className='hero-btn'>
            <a href="#">Sign Up</a>
            <a href="#">Explore Trending</a>
          </div>
        </div>

        <div className='hero-right'>
          <img src={litecoin} alt="" />
        </div>
        <img src={bigeclipse} alt="" className='hero-big-eclipse' />
      </main>

      <div className='cards'>
        <div>
          <img src={laptop} alt="" />
          <div>
            <h3>Crypto Lending</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius alias hic veritatis fuga nulla tempore atque ullam, animi corporis! Illo consectetur inventore nesciunt, vero hic natus eum assumenda!
            </p>
          </div>
        </div>
        <div>
          <img src={bulb} alt="" />
          <div>
            <h3>Liquidity Provision</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius alias hic veritatis fuga nulla tempore atque ullam, nesciunt, vero hic natus eum assumenda! Consectetur, eveniet! tur inventore nesciunt, vero hic natus eum assumenda! Consect
            </p>
          </div>
        </div>
        <div>
          <img src={candle} alt="" />
          <div>
            <h3>Security & Transparency</h3>
            <p>
              Lorem ipsum dolor sit amet alias hic veritatis fuga nulla tempore atque ullam, animi corporis! Illo consectetur inventore nesciunt, vero hic natus eum assumenda!  eveniet! tur inventore nesciunt, vero hic natus eum assumenda! Consect
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
