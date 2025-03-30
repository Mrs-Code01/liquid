import React from 'react'
import "../css/footer.css"
import logo2 from "../assets/images/logo2.png"
import facebook from "../assets/images/facebook.png"
import twitter from "../assets/images/twitter.png"
import instagram from "../assets/images/instagram.png"
import linkedin from "../assets/images/linkedin.png"
import youtube from "../assets/images/youtube.png"





const Footer = () => {
  return (
    <>
      <footer>
        <div className='footer_container'>
          <h2>Contact Us</h2>
          <div className='footer_item_container'>
            <div>
              <img src={logo2} alt="" className='footer_logo' />
              <div className='socials'>
                <a href="#"><img src={facebook} alt="" /></a>
                <a href="#"><img src={twitter} alt="" /></a>
                <a href="#"><img src={instagram} alt="" /></a>
                <a href="#"><img src={linkedin} alt="" /></a>
                <a href="#"><img src={youtube} alt="" /></a>
              </div>
            </div>
            <div>
              <h3>Our Company</h3>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Invesor Relations</a></li>
              </ul>
            </div>
            <div>
              <h3>Services</h3>
              <ul>
                <li><a href="#">Financial Market Updates</a></li>
                <li><a href="#">Investment Advice</a></li>
                <li><a href="#">Trade Analysis</a></li>
                <li><a href="#">Market Information</a></li>
              </ul>
            </div>
            <div>
              <h3>Subscribe to Newsletter</h3>
              <p>Submit email address to receive notifications on updates</p>
              <form action="#">
                <input type="email" />
                <button>Subscribe</button>
              </form>
            </div>
          </div>
          <p>@ 2025 BlockReview Inc.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
