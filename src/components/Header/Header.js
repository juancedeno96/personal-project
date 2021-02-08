import React from "react";
import axios from "axios";
import {useEffect} from 'react'
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { updateUser, logoutUser } from "../../redux/userReducer";
import "./Header.css"


const Header = props => {

  useEffect(()=>{
    getUser()
  } ,[props])

  const getUser = () => {
    axios.get('/api/me')
    .then(res=>{
        props.updateUser(res.data)
    })
    .catch(err=>console.log(err))
  }
  const logoutUser = () => {
      axios.post('/api/logout')
      .then(_=>props.logoutUser())
      .catch(err=>console.log(err))
  }
  

     
    return (props.location.pathname !== '/' &&
    <header className='header'>
<Link to ='/home'><span>Home</span> </Link> <br/>
<Link to ='/profile'><span>Profile</span> </Link> <br/>
<Link to ='/cart' ><span>shopping cart</span></Link> <br/>
<p>{props.first_name} {props.last_name} </p>
<Link to ='/'><span onClick={logoutUser} >logout</span></Link>
 </header>
)
}

const mapStateToProps = reduxState => reduxState.userReducer

export default withRouter(connect(mapStateToProps, { updateUser, logoutUser})(Header));


