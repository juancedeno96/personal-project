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

const updateInfo =(e)=>{
  e.preventDefault()

  axios.put(`/api/update-info/:${customer_id}`, {firstName, lastName, emailInput})
  .then(res=>{
    props.updateUser(res.data)
  })
}




  console.log(props)

    return (
      <div>
       <p>{customer_id}</p>
       <p>{first_name}</p>
       <p>{last_name}</p>
       <p>{email}</p>
       <img className='profile_pic' src={profile_pic} alt = {first_name}/>

      </div>
    );
  
}


const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { updateUser })(Profile);
