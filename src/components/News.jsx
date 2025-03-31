import React from 'react'
import "../css/news.css"
import person1 from "../assets/images/person1.png"
import person2 from "../assets/images/person2.png"
import person3 from "../assets/images/person3.png"
import person4 from "../assets/images/person4.png"
import person5 from "../assets/images/person5.png"
import coin from "../assets/images/coin.png"
import binance from "../assets/images/binance.png"
import kucoin from "../assets/images/kucoin.png"
import bluesquares from "../assets/images/bluesquares.png"

const News = () => {
  return (
    <>
      <section className='news' id='news'>
        <div className='news_top'>
          <div>
            <h2>Crypto News</h2>
            <img src={bluesquares} alt="" />
          </div>
          <p>Find articles on current Cryptomarket happenings; listings, delistings and trends</p>
        </div>

        <div className='news-cards'>
          <div className='card_list'>
            <div className='card_list_top'>
              <img src={coin} alt="" />
              <div>
                <h3>Coinbase Set to Launch a New Coin in Q2</h3>
                <div className='author'>
                  <img src={person5} alt="" />
                  <div>
                    <h5>Author</h5>
                    <p>Samantha</p>
                  </div>
                </div>
              </div>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere recusandae esse earum voluptatem quasi dicta quas molestias provident asperiores delectus quod at suscipit libero maiores nihil aut, quis dolores ea.
              Nam harum totam officia quod reiciendis accusantium, fuga blanditiis eos natus andae laborum maxime repudiandae?.
            </p>
            <div className='card_list_bottom'>
              <div className='readers'>
                <div>
                  <img src={person1} alt="" />
                  <img src={person2} alt="" />
                  <img src={person3} alt="" />
                  <img src={person4} alt="" />
                </div>
                <p>+ 32 other readers</p>
              </div>
              <a href="#">Read</a>
            </div>
          </div>
          {/* FIRST CARD */}
          <div className='card_list'>
            <div className='card_list_top'>
              <img src={binance} alt="" />
              <div>
                <h3>Binance Set to List 10 New Utility-Backed Projects in Q2</h3>
                <div className='author'>
                  <img src={person3} alt="" />
                  <div>
                    <h5>Author</h5>
                    <p>Louis</p>
                  </div>
                </div>
              </div>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere recusandae esse earum voluptatem quasi dicta quas molestias provident asperiores delectus quod at suscipit libero maiores nihil aut, quis dolores ea.
              Nam harum totam officia quod reiciendis accusantium, fuga blanditiis eos natus andae laborum maxime repudiandae?
            </p>
            <div className='card_list_bottom'>
              <div className='readers'>
                <div>
                  <img src={person1} alt="" />
                  <img src={person2} alt="" />
                  <img src={person3} alt="" />
                  <img src={person4} alt="" />
                </div>
                <p>+ 32 other readers</p>
              </div>
              <a href="#">Read</a>
            </div>
          </div>
          {/* SECOND CARD */}
          <div className='card_list'>
            <div className='card_list_top'>
              <img src={kucoin} alt="" />
              <div>
                <h3>KuCoin Under Legal Sanctions; Privacy Concerns</h3>
                <div className='author'>
                  <img src={person2} alt="" />
                  <div>
                    <h5>Author</h5>
                    <p>Stevenson</p>
                  </div>
                </div>
              </div>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere recusandae esse earum voluptatem quasi dicta quas molestias provident asperiores delectus quod at suscipit libero maiores nihil aut, quis dolores ea.
              Nam harum totam officia quod reiciendis accusantium, fuga blanditiis eos natus andae laborum maxime repudiandae?
            </p>
            <div className='card_list_bottom'>
              <div className='readers'>
                <div>
                  <img src={person1} alt="" />
                  <img src={person2} alt="" />
                  <img src={person3} alt="" />
                  <img src={person4} alt="" />
                </div>
                <p>+ 32 other readers</p>
              </div>
              <a href="#">Read</a>
            </div>
          </div>
          {/* END OF THIRD CARD */}
        </div>
      </section>
    </>
  )
}

export default News
