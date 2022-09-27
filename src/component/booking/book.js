import React, {useState} from "react"
import {db} from '../firebaseConfi/firebaseConfig'
import { addDoc,collection } from 'firebase/firestore'


function Book(props){

    const [checkin, setCheckin] = useState('')
    const [checkout, setCheckout] = useState('')
    // const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [numberOfChildren, setnumberOfChildren] = useState('')
    const [numberOfAdults, setnumberOfAdults] = useState('')
    const [rooms, setRooms] = useState('')


    const add = ((e)=>{
        e.preventDefault();

        console.log(checkin)
        console.log(checkout)
        // console.log(name)
        console.log(email)
        console.log(numberOfChildren)
        console.log(numberOfAdults)
        console.log(rooms)
        
    
        props.AddBooking(checkin,checkout,email,numberOfChildren,numberOfAdults,rooms)
    })

    const addBooking= ((e)=>{

        e.preventDefault();
      
        const collectionRef=collection(db,"Booking");

        const Booking={
            checkin:checkin,
          checkout:checkout,
        //   name:name,
        //   email:email,
          numberOfChildren:numberOfChildren,
          numberOfAdults: numberOfAdults,
          rooms:rooms
        };
        addDoc(collectionRef,Booking). then(()=>{
            alert("Booking Successfull")
        }).catch((err)=>{
            console.log(err);
        })
        props.add(checkin,checkout,numberOfChildren,numberOfAdults,rooms);
      })  
    



    return(

       
        <div>

            
<div className="book">
                <form className="book-form">
                    <div className="form-item">
                        <label for="checkin-date">Check In Date:</label>
                        <input type="date" id="checkin-date" onChange={(e)=>setCheckin(e.target.value)}/>
                    </div>
                    <div className="form-item">
                        <label for="checkout-date">Check Out Date:</label>
                        <input type="date" id="checkout-date" onChange={(e)=>setCheckout(e.target.value)}/>
                    </div>
                    <div className="form-item">
                        <label for="adult">Adult: </label>
                        <input type="number" min="1"  max="5" id="adult" onChange={(e)=>setnumberOfAdults(e.target.value)}/>
                    </div>
                    <div className="form-item">
                        <label for="children">Children: </label>
                        <input type="number" min="1" max="5" id="children" onChange={(e)=>setnumberOfChildren(e.target.value)}/>
                    </div>
                    <div className="form-item">
                        <label for="rooms">Rooms: </label>
                        <input type="number" min="1" max="10" id="rooms" onChange={(e)=>setRooms(e.target.value)} />
                    </div>
                    <div className="form-item">
                        
                        <input type="submit" className="btn" value="Book Now" onClick={addBooking}/>
                        
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Book