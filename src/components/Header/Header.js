import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { updateUser, logoutUser } from "../../redux/userReducer";
import "./Header.scss";
import menu from '../../menu.svg'
import cart from '../../shopping-cart.svg'
// import logout from '../../logout.svg'

const Header = (props) => {

const [dropView, setDropView] = useState(false)
console.log(props)

const toggleDropdown = () => {
  setDropView(!dropView)
}


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
      <Link to='/home' style={{ textDecoration: 'none' }}
      ><h1 style={{color: "white"}}>Ecuadorian Food</h1></Link> 

        <nav className = 'nav-bar'>
          <Link to="/home" style={{ textDecoration: 'none' }}>
            <span>Home</span>{" "}
          </Link>{" "}
          <Link to="/profile" style={{ textDecoration: 'none' }}>
            <span><img id="pic" src={props.profile_pic}/></span>{" "}
          </Link>
          <Link to="/cart" style={{ textDecoration: 'none' }}>
            <span><img src={cart}/></span>
          </Link>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <span onClick={logoutUser}>Sign Out</span>
          </Link>
        </nav>
          <span className="dropdown-btn"  onClick={toggleDropdown}><img src={menu} alt='menu button'/></span>

        {dropView ? (
        <nav className='mobile-menu'>
          <Link to="/profile" style={{ textDecoration: 'none' }}>
            <span>Profile</span>
          </Link>
          <Link to="/cart" style={{ textDecoration: 'none' }}>
            <span><img src={cart}/></span>
          </Link>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <span onClick={logoutUser}>Logout</span>
          </Link>
        </nav>
        
         ): null }
      </header>
    )
  );
};

const mapStateToProps = (reduxState) => reduxState.userReducer;

export default withRouter(
  connect(mapStateToProps, { updateUser, logoutUser })(Header)
);
