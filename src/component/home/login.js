
import React,{useState} from "react";
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {auth} from '../firebaseConfi/firebaseConfig'
import {signInWithEmailAndPassword} from 'firebase/auth';
import SignUp from "../home/signup";
import ForgotPassword from '../verification/forgotPassword'
import '../css/login.css'

function SignIn(props){

    const [email, setEmail] = useState ('');
    const [Password, setPassword] = useState ('');

    const btn = {
        marginTop:'3px',
         background:" #f76c2f",
         borderradius:"3px solid orange",
         height:"30px",
         width:"100px",
         height:'5vh'
     }

     const Add = ((e)=>{
        e.preventDefault();
    
        
        console.log(email)
        console.log(Password)

        props.AddCust(email,Password)

     })

 
     let history= useNavigate ();
 
     const login =(() => {
        signInWithEmailAndPassword(auth,email,Password).then (() => {
             history("/");
         }).catch ((error) => {
             console.log(error);
         })
 
     });
    return(
        <div className="main-container">

            <div id="main-form">
                
                    <h1>LOGIN</h1>
                    <div id="input-fields">
                        <input text="emmail" placeholder="enter email" onChange={(e) => setEmail(e.target.value)}/>
                        
                        <input text="password" placeholder="enter your password" onChange={(e) => setPassword(e.target.value)}/>
                        <div className="link">
                            <span>Don't Have Account</span>{""}
                            <span>
                                <Link to="/SignUp">Create Account</Link>
                            </span>
                            <br></br>
                            
                            <span>Forgot Password</span>{""}
                            <span>
                                <Link to="/ForgetPassword">Reset Password</Link>
                        
                            </span>
                            <br></br>
                            <br></br>
                            <br></br>
                            < Link to="/" ><button onClick={login}>LogIn</button></Link>
                        </div>
                
                    </div>
                
            </div>
            
            
        </div>
    )
}

export default SignIn;