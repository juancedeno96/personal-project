import React, { Component } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { updateUser, logoutUser, updateOrder } from "../../redux/userReducer";
class Header extends Component {

  componentDidMount =()=>{
this.getUser()
  }

  getUser = () => {
    axios.get('/api/me')
    .then(res=>{
        this.props.updateUser(res.data)
    })
    .catch(err=>console.log(err))
  }

  logoutUser = () => {
      axios.post('/api/logout')
      .then(_=>this.props.logoutUser())
      .catch(err=>console.log(err))
  }
  

  render() {
      console.log(this.props)
    return this.props.location.pathname !== '/' &&
    <header>
<Link to ='/home'><span>Home</span> </Link> <br/>
<Link to ='/profile'><span>Profile</span> </Link> <br/>
<Link to ='/cart' ><span>shopping cart</span></Link> <br/>
<p>{this.props.first_name} {this.props.last_name} </p>
<Link to ='/' ><span onClick={this.logoutUser} >logout</span></Link>

    </header>;
    
    
  }
 
}

const mapStateToProps = reduxState => reduxState

export default withRouter(connect(mapStateToProps, { updateUser, logoutUser})(Header));


