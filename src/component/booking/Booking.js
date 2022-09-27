import { initializeApp } from "firebase/app";
import { ref, set } from "firebase/database";
import { db } from "../firebaseConfi/firebaseConfig";
import family from "../images/Rooms/FamilyQuad.png"
import single from '../images/Rooms/single.jpg'
import presidential from '../images/Rooms/Presidential-Guest.jpg'
import './Book.css'

const Book = () => {

    let Rooms = [

        {
            name: "Family",
            price: "1200.00",
            image: family,
        },
        {
            name: "Presidential",
            price: "2500.00",
            image: presidential,

        },
        {
            name: "Single",
            price: "1500.00",
            image: single,
        },
    ]
    const roomFamily = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Rooms[0].image;
        nameTarget.innerHTML = Rooms[0].name;
        priceTarget.innerHTML = 'R' + Rooms[0].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = db();
            set(ref(db, 'booking/'), {
                HotelImage: Rooms[0].image,
                HotelName: Rooms[0].name,
                HotelPrice: 'R' + Rooms[0].price,
            });
        }

    }

    const roomPresidential = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Rooms[1].image;
        nameTarget.innerHTML = Rooms[1].name;
        priceTarget.innerHTML = 'R' + Rooms[1].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = db();
            set(ref(db, 'booking/'), {
                HotelImage: Rooms[1].image,
                HotelName: Rooms[1].name,
                HotelPrice: 'R' + Rooms[1].price,
            });
        }

    }

    const roomSingle = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Rooms[2].image;
        nameTarget.innerHTML = Rooms[2].name;
        priceTarget.innerHTML = 'R' + Rooms[2].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = db();
            set(ref(db, 'booking/'), {
                HotelImage: Rooms[2].image,
                HotelName: Rooms[2].name,
                HotelPrice: 'R' + Rooms[2].price,
            });
        }

    }

    const request = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const request = document.querySelector(".request");
        const cards = document.querySelector(".cards_box");
        request.style.display = "none";
        cards.style.display = "block";
        alert("Your request has been sent");

        imageTarget.src = '';
        nameTarget.innerHTML = '';
        priceTarget.innerHTML = '';

        
    }
    const back = (event) =>{
            
        }
    return (
        <div className="box">
             <div className="content">
                <div className="text">Find best Room</div>
                <div className="target">
                    <div className="trgt">
                    <div className="card">
                        <img src="" id='targetImage' alt="" />

                        <div className="targetImage"  id='targetImage'></div>
                         <div className="hotel_name" id='targetName'></div>
                        <div className="price" id='targetPrice'></div>
                        </div>
                    </div>
                </div>
                <div className="cards">
                    <div className="cards_box">
                        <div className="card" onClick={roomFamily}>
                            <img src={Rooms[0].image}  alt="hotel1" />
                            <div className="hotel_name">{Rooms[0].name}</div>
                            <div className="price">{'R' + Rooms[0].price}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={roomPresidential}>
                            <img src={Rooms[1].image} alt="hotel2" />
                            <div className="hotel_name">{Rooms[1].name}</div>
                            <div className="price">{'R' + Rooms[1].price}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={roomSingle}>
                            <img src={Rooms[2].image} alt="hotel3" />
                            <div className="hotel_name">{Rooms[2].name}</div>
                            <div className="price">{'R' + Rooms[2].price}</div>
                        </div>
                    </div>
                    <div className="request">
                        <button className="btn" onClick={request}>Request</button>
                        <br></br>
                        <br></br>
                        {/* <button className="btn" >Go Back</button> */}
                    </div>
                    <br></br>
                    <br></br>
                    <hr></hr>
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
            </div>
        </div>
    )
}
export default Book;
        
    

