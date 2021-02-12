import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import './Contact.scss';
import { connect } from "react-redux";
import { updateUser} from "../../redux/userReducer";

const Contact = props => {
console.log(props)

    let [firstName, setFirstName] = useState(''),
        [lastName, setLastName] = useState(''),
        [email, setEmail] = useState(''),
        [subject, setSubject] = useState(''),
        [message, setMessage] = useState(''),
        [messageSent, setMessageSent] = useState(false);



    const sendMessage = (e) => {
        e.preventDefault();

        axios.post('/api/email', {firstName, lastName, email, subject, message})
        .then(() => {
            setMessageSent(true);
            setSubject('');
            setMessage('');
        })
        .catch(err => console.log(err))
    }
    return(
        
        <main className='contact-main'>
          
           
            {!messageSent
                ? (
                    <form className='contact-form'>
                          <h2>Questions/Special Requests? Shoot us an email</h2>
                            <section className='name-input'>
                                <input value={firstName} placeholder='First Name *'
                                 required onChange={e => setFirstName(e.target.value)}/>
                            </section>
                            <section className='name-input'>
                               
                                <input value={lastName}
                                placeholder = 'Last Name *' 
                                required onChange={e => setLastName(e.target.value)}/>
                            </section>
                        
                        <input value={email} placeholder='Email *' required onChange={e => setEmail(e.target.value)}/>
                        <input value={subject} placeholder='Subject' required onChange={e => setSubject(e.target.value)}/>
                        <label className= 'message'>Message:</label> <br/>
                        <textarea value={message} placeholder='Write a message here' required autoComplete = 'off' onChange={e => setMessage(e.target.value)}/> <br/>
                        <button className= 'submit-button' onClick={sendMessage}>Submit</button>
                    </form>
                ) 
                : (
                    <section>
                        <h2>Your message has been sent!</h2>
                        <div ><Link to = '/home'><button classname= 'home-btn'>Continue Shopping</button></Link></div>
                    </section>
                )}
        </main>
    )
}

const mapStateToProps = reduxState => reduxState.userReducer

export default connect(mapStateToProps, {updateUser})(Contact);