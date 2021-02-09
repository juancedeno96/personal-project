import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { updateUser, logoutUser } from "../../redux/userReducer";
import "./Header.scss";

const Header = (props) => {
  useEffect(() => {
    getUser();
  }, [props]);

  const getUser = () => {
    axios
      .get("/api/me")
      .then((res) => {
        props.updateUser(res.data);
      })
      .catch((err) => console.log(err));
  };
  const logoutUser = () => {
    axios
      .post("/api/logout")
      .then((_) => props.logoutUser())
      .catch((err) => console.log(err));
  };

  return (
    props.location.pathname !== "/" && (
      <header className="header">
        <img src="https://thumbs.dreamstime.com/b/smiling-flag-ecuador-as-chef-food-cartoon-style-design-smiling-flag-ecuador-as-chef-food-cartoon-style-design-vector-166353496.jpg" />

        <nav className = 'nav-bar'>
          <Link to="/home">
            <span>Home</span>{" "}
          </Link>{" "}
          <Link to="/profile">
            <span>Profile</span>{" "}
          </Link>
          <Link to="/cart">
            <span>Shopping Cart</span>
          </Link>
          <Link to="/">
            <span onClick={logoutUser}>Logout</span>
          </Link>
        </nav>
      </header>
    )
  );
};

const mapStateToProps = (reduxState) => reduxState.userReducer;

export default withRouter(
  connect(mapStateToProps, { updateUser, logoutUser })(Header)
);
