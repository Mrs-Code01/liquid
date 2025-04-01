import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
// import News from './components/News'
import Trending from './components/Trending'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'

import "./global.css"

const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      {/* <News /> */}
      <Trending />
      <AboutUs />



      <Footer />
    </div>
  )
}

export default App
