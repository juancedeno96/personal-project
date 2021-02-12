import React, {useState} from "react";
import axios from 'axios'
import { connect } from "react-redux";
import {Link} from 'react-router-dom'
import { updateUser, logoutUser } from "../../redux/userReducer";
import "./Profile.scss";

const Profile = (props) =>  {
const {customer_id, first_name, last_name, email, profile_pic} = props.userReducer
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [emailInput, setEmailInput] = useState('')
const [editView, setEditView] = useState(false)

const updateInfo =(e)=>{
  e.preventDefault()

  axios.put(`/api/update-info/${customer_id}`, {firstName, lastName, emailInput})
  .then(res=>{
    props.updateUser(res.data)
    setEditView(!editView)
  })
  .catch(err=>console.log(err))
}


  console.log(props)

    return (
      <div className='profile-main'>
      <section>
        {editView
        ?(
          <section className='edit'>
            
              <section >
                <h2>Edit Profile</h2>
              </section>

              <input
              type='text'
              placeholder='First Name'
              value = {firstName}
              onChange={e=>setFirstName(e.target.value)}
              />

              <input
              type='text'
              placeholder='Last Name'
              value={lastName}
              onChange={e=>setLastName(e.target.value)}
              />

              <input
              type='text'
              placeholder ='Email'
              value={emailInput}
              onChange={e=>setEmailInput(e.target.value)}
              />
              <button onClick={e=>updateInfo(e)}>Submit</button> <br/>
              <button onClick={()=>setEditView(!editView)}>Cancel</button>
          </section>
        ) : null
        }


      <section className='profile-box'>
      <img className='profile_pic' src={profile_pic} alt = {first_name}/>
       <h2>{first_name} {last_name}</h2>
       <h2>{email}</h2> <br/>
       <button onClick={()=>setEditView(!editView)}>Edit Info</button>
       <Link to="/" style={{ textDecoration: 'none' }}>
            <button onClick={logoutUser}>Sign Out</button>
          </Link>
       </section>
      </section>

      <section className='favorites'>
        <h2>Favorites: (Under Construction!)</h2>
      </section>

      <section className='order-history'>
        <h2>Past Orders: (Under Construction)</h2>
      </section>
      </div>
    );
  
}


const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { updateUser, logoutUser })(Profile);
