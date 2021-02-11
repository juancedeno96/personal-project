import React, {useState} from "react";
import axios from 'axios'
import { connect } from "react-redux";
import { updateUser } from "../../redux/userReducer";
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
      <section>
        {editView
        ?(
          <section>
            
              <section>
                <h2>Edit Profile</h2>
                <h3 onClick={()=>setEditView(!editView)}>X</h3>
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
              <button onClick={e=>updateInfo(e)}>Submit</button>
          </section>
        ) : null
        }


      <section> <p>{customer_id}</p>
       <p>{first_name}</p>
       <p>{last_name}</p>
       <p>{email}</p>
       <img className='profile_pic' src={profile_pic} alt = {first_name}/>
       </section>
       <button onClick={()=>setEditView(!editView)}>Edit Info</button>
      </section>
    );
  
}


const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { updateUser })(Profile);
