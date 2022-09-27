import React,{useState} from "react";
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {auth} from '../firebaseConfi/firebaseConfig'
import {createUserWithEmailAndPassword} from 'firebase/auth';


function SignUp(props){

    const [Username, setUsername] = useState ('');
    const [Email, setEmail] = useState ('');
    const [Phone, setContact] = useState ('');
    const [Password, setPassword] = useState ('');
    const [ConfPassword, setConfPassword] = useState ('');

    

    
  const Add = ((e)=>{
    e.preventDefault();

    console.log(Username)
    console.log(Email)
    console.log(Phone)
    console.log(Password)
    console.log(ConfPassword)
    

    props.AddMember(Email,Phone,Password,)

  
    
  })
    const btn = {
        marginTop:'3px',
         background:"orange",
         borderradius:"3px solid orange",
         height:"30px",
         width:"100px",
     }
 
     let history= useNavigate ();
 
     const Register =(e) => {
    
         createUserWithEmailAndPassword(auth,Email,Password).then (() => {
             history("/");
             alert("Got it")
         }).catch ((error) => {
             console.log(error)
             throw error;
         })
 
     };


return(
    <div>
        
        <form>
        <h1>REGISTER</h1>
            <input type="text" placeholder="enter your username" onChange={(e) => setUsername(e.target.value)}/>
            <br></br>
            <br></br>
            <input type="email" placeholder="enter your email" onChange={(e) => setEmail(e.target.value)}/>
            <br></br>
            <br></br>
            <input type="contact" placeholder="enter your contact" onChange={(e) => setContact(e.target.value)} />
            <br></br>
            <br></br>
            <input type="password" placeholder="enter your password" onChange={(e) => setPassword(e.target.value)}/>
            <br></br>
            <br></br>
            <input type="confirmpassword" placeholder="confirm password" onChange={(e) => setConfPassword(e.target.value)} />
            <br></br>
            <br></br>

            <span>Already Have Account</span>{" "}
                <span>
                    <Link to="/">Click Here</Link>
                </span>
                <br></br>
                <br></br>
                < Link to="/" ><button onClick={Register}>SignUp</button></Link>
          

        </form>

    </div>
)
}
export default SignUp;