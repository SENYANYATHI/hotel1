
import React,{useState} from "react";
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {auth} from '../config/firebase'
import {signInWithEmailAndPassword} from 'firebase/auth';


function SignIn(){

    const [email, setEmail] = useState ('');
    const [Password, setPassword] = useState ('');

    const btn = {
        marginTop:'3px',
         background:"orange",
         borderradius:"3px solid orange",
         height:"30px",
         width:"100px",
     }
 
     let history= useNavigate ();
 
     const login =(() => {
        signInWithEmailAndPassword(auth,email,Password).then (() => {
             history("/home");
         }).catch ((error) => {
             console.log(error);
         })
 
     });
    return(
        <div>
            
            <form>
            <h1>LOGIN</h1>
                <input text="emmail" placeholder="enter email" onChange={(e) => setEmail(e.target.value)}/>
                <br></br>
                <br></br>
                <input text="password" placeholder="enter your password" onChange={(e) => setPassword(e.target.value)}/>
                <br></br>
                <br></br>
                <span>Don't Have Account</span>{""}
                <span>
                    <Link to="/signup">Create Account</Link>
                </span>
                <br></br>
                <span>Forget Password</span>{""}
                <span>
                    <Link to="/forgetpassword">Create Password</Link>
                </span>
                <br></br>
                <br></br>
                <button style={btn} onClick={login}>LogIn</button>

            </form>
        </div>
    )
}

export default SignIn;