import React from 'react'
import "../css/trending.css"
import image1 from "../assets/images/1.png"
import image2 from "../assets/images/2.png"
import image3 from "../assets/images/3.png"
import image4 from "../assets/images/4.png"
import image5 from "../assets/images/5.png"
import image6 from "../assets/images/6.png"
import image7 from "../assets/images/7.png"
import image8 from "../assets/images/8.png"
import image9 from "../assets/images/9.png"
import image10 from "../assets/images/10.png"
import arrow from "../assets/images/arrow.png"
// import bluesquares from "../assets/images/bluesquares.png"
import trending from "../assets/images/quality.png"
import smalleclipse from "../assets/images/smalleclipse.png"





const Trending = () => {
  return (
    <>
      <section className='trending' id='trending'>
        <div className='trending_top'>
          <div>
          <img src={trending} alt="Trending" style={{ width: '50px' }} />
          <h2>Trending Projects</h2>
          </div>
          <p>Top 10 trending projects in the Cryptomarket</p>
        </div>

        <div className='trending_container'>
          <div className='trending_list_outer_left_container'>
            <div className='trending_list_inner_left_container'>
              <div className='trending_item'>
                <h3 className='trending_number'>#1</h3>
                <div>
                  <img src={image1} alt="" />
                  <h4>Bitcoin</h4>
                </div>
                <div>
                  <p>Price</p>
                  <p>$89,123</p>
                </div>
                <div>
                  <p>24H Change</p>
                  <p>+3.1%</p>
                  <img src={arrow} alt="" />
                </div>
                <div>
                  <p>Market cap</p>
                  <p>$1,712,903,332,204</p>
                </div>
                <div>
                  <p>Volume (24H)</p>
                  <p>$39,308,912,402</p>
                </div>
              </div>
              <div className='trending_item'>
                <h3 className='trending_number'>#2</h3>
                <div>
                  <img src={image2} alt="" />
                  <h4>Ethereum</h4>
                </div>
                <div>
                  <p>Price</p>
                  <p>$89,123</p>
                </div>
                <div>
                  <p>24H Change</p>
                  <p>+3.1%</p>
                  <img src={arrow} alt="" />
                </div>
                <div>
                  <p>Market cap</p>
                  <p>$1,712,903,332,204</p>
                </div>
                <div>
                  <p>Volume (24H)</p>
                  <p>$39,308,912,402</p>
                </div>
              </div>
              <div className='trending_item'>
                <h3 className='trending_number'>#3</h3>
                <div>
                  <img src={image3} alt="" />
                  <h4>Tether</h4>
                </div>
                <div>
                  <p>Price</p>
                  <p>$89,123</p>
                </div>
                <div>
                  <p>24H Change</p>
                  <p>+3.1%</p>
                  <img src={arrow} alt="" />
                </div>
                <div>
                  <p>Market cap</p>
                  <p>$1,712,903,332,204</p>
                </div>
                <div>
                  <p>Volume (24H)</p>
                  <p>$39,308,912,402</p>
                </div>
              </div>
              <div className='trending_item'>
                <h3 className='trending_number'>#4</h3>
                <div>
                  <img src={image4} alt="" />
                  <h4>Xrp</h4>
                </div>
                <div>
                  <p>Price</p>
                  <p>$89,123</p>
                </div>
                <div>
                  <p>24H Change</p>
                  <p>+3.1%</p>
                  <img src={arrow} alt="" />
                </div>
                <div>
                  <p>Market cap</p>
                  <p>$1,712,903,332,204</p>
                </div>
                <div>
                  <p>Volume (24H)</p>
                  <p>$39,308,912,402</p>
                </div>
              </div>
              <div className='trending_item'>
                <h3 className='trending_number'>#5</h3>
                <div>
                  <img src={image5} alt="" />
                  <h4>BNB</h4>
                </div>
                <div>
                  <p>Price</p>
                  <p>$89,123</p>
                </div>
                <div>
                  <p>24H Change</p>
                  <p>+3.1%</p>
                  <img src={arrow} alt="" />
                </div>
                <div>
                  <p>Market cap</p>
                  <p>$1,712,903,332,204</p>
                </div>
                <div>
                  <p>Volume (24H)</p>
                  <p>$39,308,912,402</p>
                </div>
              </div>
            </div>
          </div>



          <div className='trending_list_outer_right_container'>
            <div className='trending_list_inner_right_container'>
              <div className='trending_item'>
                <h3 className='trending_number'>#6</h3>
                <div>
                  <img src={image6} alt="" />
                  <h4>Solana</h4>
                </div>
                <div>
                  <p>Price</p>
                  <p>$89,123</p>
                </div>
                <div>
                  <p>24H Change</p>
                  <p>+3.1%</p>
                  <img src={arrow} alt="" />
                </div>
                <div>
                  <p>Market cap</p>
                  <p>$1,712,903,332,204</p>
                </div>
                <div>
                  <p>Volume (24H)</p>
                  <p>$39,308,912,402</p>
                </div>
              </div>
              <div className='trending_item'>
                <h3 className='trending_number'>#7</h3>
                <div>
                  <img src={image7} alt="" />
                  <h4>ChainLink</h4>
                </div>
                <div>
                  <p>Price</p>
                  <p>$89,123</p>
                </div>
                <div>
                  <p>24H Change</p>
                  <p>+3.1%</p>
                  <img src={arrow} alt="" />
                </div>
                <div>
                  <p>Market cap</p>
                  <p>$1,712,903,332,204</p>
                </div>
                <div>
                  <p>Volume (24H)</p>
                  <p>$39,308,912,402</p>
                </div>
              </div>
              <div className='trending_item'>
                <h3 className='trending_number'>#8</h3>
                <div>
                  <img src={image8} alt="" />
                  <h4>DogeCoin</h4>
                </div>
                <div>
                  <p>Price</p>
                  <p>$89,123</p>
                </div>
                <div>
                  <p>24H Change</p>
                  <p>+3.1%</p>
                  <img src={arrow} alt="" />
                </div>
                <div>
                  <p>Market cap</p>
                  <p>$1,712,903,332,204</p>
                </div>
                <div>
                  <p>Volume (24H)</p>
                  <p>$39,308,912,402</p>
                </div>
              </div>
              <div className='trending_item'>
                <h3 className='trending_number'>#9</h3>
                <div>
                  <img src={image9} alt="" />
                  <h4>Cardano</h4>
                </div>
                <div>
                  <p>Price</p>
                  <p>$89,123</p>
                </div>
                <div>
                  <p>24H Change</p>
                  <p>+3.1%</p>
                  <img src={arrow} alt="" />
                </div>
                <div>
                  <p>Market cap</p>
                  <p>$1,712,903,332,204</p>
                </div>
                <div>
                  <p>Volume (24H)</p>
                  <p>$39,308,912,402</p>
                </div>
              </div>
              <div className='trending_item'>
                <h3 className='trending_number'>#10</h3>
                <div>
                  <img src={image10} alt="" />
                  <h4>Tron</h4>
                </div>
                <div>
                  <p>Price</p>
                  <p>$89,123</p>
                </div>
                <div>
                  <p>24H Change</p>
                  <p>+3.1%</p>
                  <img src={arrow} alt="" />
                </div>
                <div>
                  <p>Market cap</p>
                  <p>$1,712,903,332,204</p>
                </div>
                <div>
                  <p>Volume (24H)</p>
                  <p>$39,308,912,402</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="#">View All</a>
        <img src={smalleclipse} alt="" />
      </section>
    </>
  )
}

export default Trending
