import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { updateUser } from "../../redux/userReducer";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      profile_pic: "",
    };
    this.register = this.register.bind(this);
    this.login = this.login.bind(this)
  }

  handleChange(prop, val) {
    this.setState({
      [prop]: val,
    });
  }

  login() {
      axios.post('/api/login', this.state)
      .then(res => {
          this.props.updateUser(res.data)
          this.props.history.push('/home')
      })
      .catch(err=>console.log(err))
  }

  register() {
    axios
      .post("/api/register", this.state)
      .then((res) => {
        this.props.updateUser(res.data);
        this.props.history.push("/home");
      })
      .catch((err) => console.log(err));
  }

  render() {
    
    return (
      <div>
        Auth
        <div>
          <input
            value={this.state.first_name} onChange={(e) => this.handleChange("first_name", e.target.value)}/>

          <input value={this.state.last_name} onChange={(e) => this.handleChange("last_name", e.target.value)}/>

          <input value={this.state.email} onChange={(e) => this.handleChange("email", e.target.value)}/>

          <input value={this.state.password} onChange={(e) => this.handleChange("password", e.target.value)}/>

          <input value={this.state.profile_pic} onChange={(e) => this.handleChange("profile_pic", e.target.value)}/>
          <button onClick={this.register}>register</button>
        </div>
        Login
        <input value={this.state.email} onChange={(e) => this.handleChange("email", e.target.value)}/>
        <input value={this.state.password} onChange={(e) => this.handleChange("password", e.target.value)}/>
        <button onClick={this.login}>login</button>
      </div>
    );
  }
}

export default connect(null, { updateUser })(Auth);
