
import {useState} from 'react'
import '../css/Contact.css';

function ContactBody(props){


 const [Email, setEmail] = useState('')
 const [FullName, setFullName] = useState('')
 const [ContactNumber, setContactNumber] = useState('')
 const  [message,setMessage] = useState('')


 

  const Add = ((e)=>{
    e.preventDefault();

    console.log(Email)
    console.log(FullName)
    console.log(ContactNumber)
    console.log(message)
    

    props.AddReview(Email, FullName, ContactNumber, message)

  
    
  })
    

//   console.log(props);

    return(
        <div>

                    <div style={{display: 'flex', justifyContent: 'space-around', padding:'20px'}}>
                                    {/* <div>
                                        <p>What we offer</p>

                                    </div> */}
                                    <div>
                                        <h2>Contact Details</h2>
                                        <h2>Address:</h2>
                                        376 airlie st.
                                        <br></br>Durban,
                                        <br></br> KwaZulu Natal,
                                        <br></br> South Africa
                                    
                                  
                                        <h4>Tell:(011)325-2022</h4>
                                        <h4>Fax:086 6086 731</h4>
                                        <h4>Queries:</h4>
                                        <p>Social Media Links:</p>
                                        
                                    </div>
                                    <div>
                                        <form>
                                            <input type="text" placeholder="Full Name"  style={{ padding:'10px', margin:'10px', width: '400px'}} onChange={(e)=>setFullName(e.target.value)} required/><br></br>
                                            <input type="email" placeholder="Email"  style={{ padding:'10px', margin:'10px', width: '400px'}} onChange={(e)=>setEmail(e.target.value)} required/><br>
                                            </br>
                                            <input type="text" placeholder="Contact Number"  style={{ padding:'10px', margin:'10px', width: '400px'}} onChange={(e)=>setContactNumber(e.target.value)}/><br>
                                            </br>
                                            <textarea type="text" placeholder="Message"  style={{ padding:'20px', margin:'10px', width: '400px'}} onChange={(e)=>setMessage(e.target.value)} required/><br></br>
                                            <button style={{ padding:'10px', margin:'10px', width: '400px'}} onClick={Add}>Send</button>
                                        </form>
                                    </div>
                        </div>


        </div>
    )
}

export default ContactBody;