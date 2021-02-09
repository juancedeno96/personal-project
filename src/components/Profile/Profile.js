import React from "react";
import { connect } from "react-redux";
import { updateUser } from "../../redux/userReducer";
import "./Profile.scss";

const Profile = props =>  {

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
