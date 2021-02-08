import React from "react";
import axios from "axios";
import {useEffect} from 'react'
import { connect } from "react-redux";
import { updateUser } from "../../redux/userReducer";
import "./Profile.css";

const Profile = props =>  {

  useEffect(()=>{
    getUser()
  }, [props])

  const getUser = () => {
    axios
      .get("/api/me")
      .then((res) => props.updateUser(res.data))
      .catch((err) => console.log(err));
  };

  
    return (
      <div>
        <img
          className="profile_pic"
          src={props.profile_pic}
          alt={props.first_name}
        />
        <div>
          {props.first_name} {props.last_name}
        </div>
      </div>
    );
  
}

const mapStateToProps = (reduxState) => reduxState.userReducer;

export default connect(mapStateToProps, { updateUser })(Profile);
