import React from 'react'
import "../css/hero.css"
import curve from "../assets/images/curve.png"
// import litecoin from "../assets/images/litecoin.png"
import bigeclipse from "../assets/images/bigeclipse.png"
import litecoin2 from "../assets/images/litecoin.svg"
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
            <h1 className='text-6xl'>Stack Liquidity, Build Wealth</h1>
            <img src={curve} alt="" />
          </div>
          <p>
            Liquid Block is a Defi-powered liquidity provisioning System that allows users to amplify their capital by borrowing funds, providing liquidity and earning passive income through trading fees and yield rewards
          </p>
          <div className='hero-btn'>
            <a href="#" className='text-[10px] md:text-base px-3 py-2'>Sign Up</a>
            <a href="#" className='text-[10px] md:text-base px-3 py-2'>Explore Trending</a>
          </div>
        </div>

        <div className=''>
          <img src={litecoin2} alt="" />
        </div>
        <img src={bigeclipse} alt="" className='hero-big-eclipse' />
      </main>

      <div className='cards'>
        <div>
          <img src={laptop} alt="" />
          <div>
            <h3>Crypto Lending</h3>
            <p className='text-base'>
              Easy-to-use borrowing interface that allows users to access liquidity in various cryptocurrencies, flexible loan terms, and instant access to funds for trading, staking, or other investment activities.
            </p>
          </div>
        </div>
        <div>
          <img src={bulb} alt="" />
          <div>
            <h3>Liquidity Provision</h3>
            <p>
              Earning passive income by providing liquidity in selected pairs (with rewards), real-time metrics and performance tracking for liquidity providers, and secure and transparent trannsactions on-chain.
            </p>
          </div>
        </div>
        <div>
          <img src={candle} alt="" />
          <div>
            <h3>Security & Transparency</h3>
            <p>
              Use of blockchain technology for secure trannsactions and auditability, encrypted wallets, 2FA and KYC processes for users protection <br></br>Transparent fee structures and clear loan terms.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
