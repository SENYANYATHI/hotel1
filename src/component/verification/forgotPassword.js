import  {useState} from 'react'
import { useHistory} from  'react-router-dom';
import {Link} from "react-router-dom"
import {sendPasswordResetEmail} from 'firebase/auth';
import {ToastContainer,toast} from 'react-toastify';
import {auth} from '../firebaseConfi/firebaseConfig'

// import  ArrowRightIcon from '../assets/Right.png'

function ForgotPassword() {
    const [email, setEmail] = useState('')
    const [confirm, setConfirm] = useState('')

    const onChange = (e) => setEmail(e.target.value)

    

    const onSubmit = async (e) =>{
        e.preventDefault()
        // console.log('hi there');
        
        try {
            // const auth =() =>{
                  sendPasswordResetEmail(auth,email)
            toast.success('Email was sent')
        // } 
            } 
          
     catch (error) {
        console.log(error)
    }
    }
    const btn ={
        width: '150px',
        height: '30px',
        marginTop:"3%"
    }
return (
    <div className='pageContainer'>
        <header>
           <p className="pageHeader">Forgot Password</p> 
        </header>

        <main>
            <form onSubmit={onSubmit}>
                <input type="email" className='emailInput'
                 placeholder='Email' id='email'
                  value={email}
                  onChange={onChange} />
                  <Link className='forgetPasswordLink' to= '/sign-up'>
                    Sign Up
                  </Link>

                  <div className="signInBar">
                    <div className="signInText"> Send Rest Link</div>
                    
                        {/* <img src={ArrowRightIcon} fill='#ffffff' width='34px'
                        height='34px' /> */}
                        <button style={btn} >Send Email </button>
                   <ToastContainer/>
                  </div>
            </form>
        </main>
    </div>
)
}

export default ForgotPassword