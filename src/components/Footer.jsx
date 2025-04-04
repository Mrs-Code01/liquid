import React from 'react'
import "../css/footer.css"
// import logo2 from "../assets/images/logo2.png"
import litefooter from "../assets/images/litefooter.png"
// import twitter from "../assets/images/twitter.png"
import newtwitter from "../assets/images/new-twitter.png"


const Footer = () => {
  return (
    <>
      <footer id='contact'>
        <div className='footer_container'>
          <h2 className='text-3xl'>Contact Us</h2>
          <div className='footer_item_container'>
            <div>
              <img src={litefooter} alt="" className='footer_logo' />
              <div className='socials'>
                <a href="#"><img src={newtwitter} alt="" /></a>
                <p> contact@liquidblock.xyz </p>
              </div>
            </div>
            <div>
              <h3 className='text-xl'>Our Company</h3>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Invesor Relations</a></li>
              </ul>
            </div>
            <div>
              <h3 className='text-xl'>Services</h3>
              <ul>
                <li><a href="#">Financial Market Updates</a></li>
                <li><a href="#">Investment Advice</a></li>
                <li><a href="#">Trade Analysis</a></li>
                <li><a href="#">Market Information</a></li>
              </ul>
            </div>
            <div>
              <h3 className='text-xl'>Subscribe to Newsletter</h3>
              <p className='mt-3'>Submit email address to receive notifications on updates</p>
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
