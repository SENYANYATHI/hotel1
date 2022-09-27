import React from "react"
import '../services/services.css'
import {Link} from 'react-router-dom'
import image1 from '../images/Spa.jpg'
import image2 from '../images/Tennis Court.jpg'
import image3 from '../images/Gym.jpg'
import image4 from '../images/Laundry.jpg'
import image5 from '../images/Buffet.jpg'
import image6 from '../images/Conference Room.jpg'

import twitter from '../images/Rooms/twitter.png'
import facebook from '../images/Rooms/facebook.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
// import {faPhone} from "@fortawesome/free-solid-svg-icons"

function Services() {
    return (
        <div className="main-container">
            <div className="top-part">
                <h1 className="logo">Hopewell's Garden</h1>
                <div className="menu-part">
                    
                    <a className="menu"><Link to="/">Home</Link></a>
                    <a className="menu"><Link to="/About">About Us</Link></a>
                    <a className="menu"><Link to="/Rooms">Rooms</Link></a>
                    <a className="menu"><Link to="/Contacts">Reviews</Link></a>
                    <a className="menu"><Link to="/Services">Services</Link></a>
                    
                </div>
            </div>

            <div className="content">
                <div >
                    <h1>Services</h1>
                    <p>Explore some of our awesome services at the Garden</p>
                </div>

                <div className="images">
                    <div className="spa-div">
                        <img src={image1} className="spa"></img>
                        <h3>Spa</h3>
                        <div className="underline"></div>
                        <p className="service-info">At the Garden we understand that the best way to get away and relax is through a nice treat at a spa so as a guest you are entitled a free spa treat at one of our luxury massage center.</p>
                    </div>
                    <div className="spa-div">
                        <img src={image2} className="tennis-court"></img>
                        <h3>Tennis Court</h3>
                        <div className="underline"></div>
                        <p className="service-info">The Garden offers 4 state of the arts tennis courts which are available anytime of the day for our guests, also we offer two 5 aside soccer fields.  </p>
                    </div>
                    <div className="spa-div">
                        <img src={image3} className="gym"></img>
                        <h3>Gym</h3>
                        <div className="underline"></div>
                        <p className="service-info">One of our pride offering is our fitness center which comes with a personal trainer, 8 showers, a swimming pool and a beach view</p>
                    </div>
                </div>
                <h1 className="other"><span>Other </span>Services</h1>
                <div className="underline2" />
                <div className="bottom-images">
                    <div className="left-info">

                        <li>Conference Room</li>
                        <li>Free WI-FI</li>
                        <li>Free Laundry Services</li>
                        <li>Buffet</li>
                    </div>
                    <div className="right-info">
                        <img src={image4} className="image"></img>
                        <img src={image5} className="image"></img>
                        <img src={image6} className="image"></img>
                        <img src={image4} className="image"></img>
                    </div>
                </div>
                
            <div className="footer">
                <div className="social">
                <div className="border"></div>
                  <div className="twitter-part"><img src={twitter} className="twitter" />Twitter : @Hopewell_s_Garden</div>
                  <div className="facebook-part"><img src={facebook} className="twitter" />facebook : Hopewell's Garden</div>
                  {/* <div className="facebook-part"><FontAwesomeIcon icon={faEnvelope} className="email" /><span>Email-Address : Hopewell's Garden</span></div>
                  <div className="facebook-part"><FontAwesomeIcon icon={faPhone} className="phone" /><span>Phone :0672722080 / 0656683604</span></div> */}
                </div>

            </div>
            </div>
            

        </div>
    )
}

export default Services