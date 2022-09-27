import React from 'react'
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Home from '../src/component/homepage/home'
 import LeftSection from '../src/component/admin/leftSection'
 import MiddleSection from '../src/component/admin/middleSection'
 import RightSection from '../src/component/admin/rightSection'
import About from './component/about/About'
import Book from './component/booking/book'
import Contact from './component/contact/Contact'
import Rooms from './component/rooms/rooms'
import Services from './component/services/services'
import Login from './component/home/login'
import SignUp from './component/home/signup';
import ForgotPassword from './component/verification/forgotPassword';
import {useState , useEffect} from 'react'
import { collection,getDocs } from 'firebase/firestore';
// import {Book} from "./component/booking/book"

function App () {


const [review, setReview] = useState([]);//defining a use state 
// const [review, setReview] = useState([])

const AddReview = ((Email, FullName, ContactNumber, message)=>{

  setReview((items)=>[...items,{
      Email:Email,
      FullName:FullName,
      ContactNumber:ContactNumber,
      message:message
  }])

  console.log(review)
})
useEffect(()=>{



})
const [member,SetMember] = useState([])

const AddMemeber = ((Username,Email,Phone,Password,ConfPassword) =>{

  SetMember((items)=> [...items,{
    Username:Username,
    Email:Email,
    Phone:Phone,
    Password:Password,
    ConfPassword:ConfPassword
  }])

  console.log(member)
}) 

const [customer, setCustomer] = useState([])

const AddCust = ((Email,password)=>{

  setCustomer((items)=>[...items,{
      Email:Email,
      password:password,
    
  }])

  console.log(customer)
})


// Booking function

const [book, setBooking] = useState()

const addBooking = ((checkin,checkout,name,email,numberOfChildren,numberOfAdults,rooms)=>{
  setBooking((items)=>[...items,{
    checkin:checkin,
    checkout:checkout,
    name:name,
    email:email,
    numberOfChildren:numberOfChildren,
    numberOfAdults: numberOfAdults,
    rooms:rooms
  }])
 
})

useEffect(()=>{
  console.log(book)
})


// variable AddReview is passed a method that adds and set transaction for the use state defined above

  return (
    <div>
  
      
      <Router>
      <Routes>
        <Route exact path='/' element= {<Home addBooking={addBooking}/>}/>
        <Route path="/About" element={<About/>} />

        <Route path="/Contacts" element={ <Contact addReview={AddReview}/>}  />
        <Route path="/Rooms" element={<Rooms/>} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/ForgotPassword" element={<ForgotPassword/>} />
        <Route path="/Login" element={<Login AddCust={AddCust}/>} />
        <Route path="/SignUp" element={<SignUp  AddMemeber={AddMemeber}/>} />
        <Route path="/Booking" element={<Book/>} />
        {/* <Book/> */}
      </Routes>
    
     </Router> 
    

 
    
      
    </div>
  );
}

export default App
