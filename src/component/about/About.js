import React from "react";
import '../css/About.css'
import {Link} from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
// import {faPhone} from "@fortawesome/free-solid-svg-icons"
import twitter from '../images/twitter.png'
import facebook from '../images/facebook.png'


function About() {
  return (
    <div className="container">
          <section className="top-part">
              <h1 className="logo">Hopewell's Garden</h1>
              <div className='menu-part'>
              <a className="menu"><Link to="/">Home</Link></a>
                    <a className="menu"><Link to="/About">About Us</Link></a>
                    <a className="menu"><Link to="/Rooms">Rooms</Link></a>
                    <a className="menu"><Link to="/Contacts">Reviews</Link></a>
                    <a className="menu"><Link to="/Services">Services</Link></a>
              </div>
          </section>

          <section className="ImagePart">
               
          </section>
          <div className="col-md-12 text-center">
                <h3 className="main-heading">About Us</h3>
                <div className="underline mx-auto"></div>
                <p className="info">Looking for a place to stay in Durban that is both contemporary and reasonably priced? In that case, Hopewell's Garden is a great option for you.<br></br> We offer practical short-term lodging in the bustling city center of KwaZulu-Natal.<br></br> Make sure to reserve a room at our Award-Winning Express Hotel whether you are visiting Durban for business or pleasure.<br></br>
                    Since 2005, the hotel has established itself as a market niche and a top choice for international tourists, NGOs, corporate travelers, and government officials.<br></br>
                    After a day spent taking advantage of all that Durban has to offer, our hotel is the perfect place to return to for a restful night's sleep, a delicious breakfast, and a peaceful evening as well as taking advantage of our jacuzzi, swimming pool and our ocean view.
                </p>
          </div>
          <div className="footer">
                <div className="social">
                  <div className="border"></div>
                  <div className="twitter-part"><img src={twitter} className="twitter" />Twitter : @Hopewell_s_Garden</div>
                  <div className="facebook-part"><img src={facebook} className="twitter" />facebook : Hopewell's Garden</div>
                  {/* <div className="facebook-part"><FontAwesomeIcon icon={faEnvelope} className="email" /><span>Email-Address : Hopewell's Garden</span></div>
                  <div className="facebook-part"><FontAwesomeIcon icon={faPhone} className="phone" /><span>Phone :0672722080 / 0656683604</span></div> */}
                </div>
                <p className="designer">Designed by Hopewell Maome</p>
          </div>
    </div>
   
   
  )
}
export default About;