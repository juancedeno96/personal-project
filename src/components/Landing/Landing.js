import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { updateUser } from "../../redux/userReducer";
import "../Landing/Landing.css";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: []
    };
  }

  componentDidMount =()=> {
    this.getProduct();
  }

  handleChange=(prop, value)=>{
this.setState({
  [prop]: value
})
  }


  getProduct = () => {
    axios
      .get("/api/all")
      .then((res) => {
        this.setState({
          product: res.data
        });
      })
      .catch((err) => console.log(err));
  };

 
  addOrder = ()=>{
    const {total, customer_id, quantity} = this.state
    axios.post('/api/add', {total, customer_id, quantity})
    .then(res=>{
      this.props.addOrder(res.data)
    })
    .catch((err) => console.log(err));
  }

 
  render() {
    console.log(this.props);
    const mappedProduct = this.state.product.map((e) => {
      return (
        <div className="product" key={e.product_id}>
          <img src={e.img_url} alt={e.name} />
          <p>{e.name}</p>
          <p>${e.unit_price}</p>
          <button>add to cart</button>
          <input type="number"/>
        </div>
      );
    });
    console.log(this.state.product);
    return <div className="product-container">{mappedProduct}</div>;
  }
}

const mapStateToProps = (reduxState) => ({
  orderReducer: reduxState.orderReducer,
  userReducer: reduxState.userReducer,
});

export default connect(mapStateToProps, { updateUser })(Landing);
