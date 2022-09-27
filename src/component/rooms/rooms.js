import React from 'react'
import { Navigate, useHistory, Link } from 'react-router-dom';
import family from '../images/Rooms/FamilyQuad.jpg'
import single from '../images/Rooms/single.jpg'
import presidential from '../images/Rooms/Presidential-Guest.jpg'
import '../rooms/rooms.css'
import twitter from '../images/Rooms/twitter.png'
import facebook from '../images/Rooms/facebook.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
// import {faPhone} from "@fortawesome/free-solid-svg-icons"



const Rooms = () => {
    return (
        <div className="container">
            <div className="top-part">
                <h1 className="logo">Hopewell's Garden</h1>
                <div className='menu-part '>
                <a className="menu"><Link to="/">Home</Link></a>
                    <a className="menu"><Link to="/About">About Us</Link></a>
                    <a className="menu"><Link to="/Rooms">Rooms</Link></a>
                    <a className="menu"><Link to="/Contacts">Reviews</Link></a>
                    <a className="menu"><Link to="/Services">Services</Link></a>
                </div>
            </div>
            <section className='content1'>
                
            </section>
            <div className='col-md-12 text-center'>
                <h3 className='main-heading'>Rooms</h3>
                <div className="underline mx-auto"></div>
            </div>
            
        
            <div className='mid-div'>
                <p className='info'>You've found the ideal spot if you're looking for useful and inexpensive hotel lodging in Durban.<br></br>
                    The Hopewell's Gardens provides guests with contemporary, practical, and comfortable lodging at a great bargain.<br></br>
                    We provide our customers with the ideal amenities to accompany a business, stopover, or short stay vacation in each of our modestly sized rooms.<br></br>
                    Our accommodations have been specifically created so that we can host both business and leisure guests, including singles, couples, and families.<br></br>
                    There are 125 spacious rooms available. You may reserve a room online or by speaking with one of our incredibly helpful experts right away.
                </p>
                <button id='read-more-btn'>Read More</button>
            </div>

            <div className="images-div">

                <div className="spa_div" >
                    <img src={family} alt="" />
                    <div id='price1'>FamilyQuad<span>R1200.00</span></div>
                    <h3>Family Quad</h3>
                    <p id='rooms-info'>There is no better place to hunt for the ideal short-term lodging for your family.
                       Compared to our other hotel rooms, our family hotel rooms are a little bit larger.
                       ese accommodations, which sleep up to four people, have a double bed and a full-size bunk bed.
                   

                    </p>
                    <button id='book-btn'>Read More</button>
                </div>
                

                <div className="spa_div" >
                    <img src={presidential} alt="" />
                    <div id='price'>Presidential Suite<span>R2500.00</span></div>
                    <h3>Presidential</h3>
                    <p id='rooms-info'>
                        The Presidential Suites, which are in a class of their own, are prominently located on the 18th, 19th, and 20th floors and provide the most luxurious amenities, deep bathrooms with city views, and the highest degree of individualized service.
                    </p> <button id='book-btn'>Read More</button>
                </div>

                <div className="spa_div" >
                    <img src={single} alt="" />
                    <div id='price3'>Single <span>R1500.00</span></div>
                    <h3>Single</h3>
                    <p id='rooms-info'>We offer standard double rooms, which are suitable for up to two guests per room.
                       These rooms are ideal for brief stays and offer complete comfort and privacy for both leisure and business guests.
                    </p> <button id='book-btn'>Read More</button>
                </div>
            </div>

            <div className='rooms-specs'>
                <h3>Facilites in our rooms are:</h3>
                <div className='facilites'>
                    <li>Air Conditioning</li>
                    <li>En-suite bathroom</li>
                    <li>Small flat screen TV with FREE NETFLIX</li>
                    <li>Tea and Coffee Station</li>
                    <li>Vanity counter with mirror</li>
                    <li>Landline telephone</li>
                    <li>Electronic safe</li>
                    <li>Free Wi-Fi</li>
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




    )
}

export default Rooms
