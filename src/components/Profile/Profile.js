import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { updateUser } from "../../redux/userReducer";
import "./Profile.css";

class Profile extends Component {
  componentDidMount = () => {
    this.getUser();
  };

  getUser = () => {
    axios
      .get("/api/me")
      .then((res) => this.props.updateUser(res.data))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <img
          className="profile_pic"
          src={this.props.profile_pic}
          alt={this.props.first_name}
        />
        <div>
          {this.props.first_name} {this.props.last_name}{" "}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { updateUser })(Profile);
