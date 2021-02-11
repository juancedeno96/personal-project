import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { updateUser } from "../../redux/userReducer";
import {getAllProduct} from '../../redux/productReducer'
import {addToCart} from '../../redux/cartReducer'
import "../Landing/Landing.scss";
import { Link, withRouter } from "react-router-dom";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      customer_id: this.props.userReducer.customer_id,
      quantity: 0
    };
  }

  componentDidMount =()=> {
    this.getProduct();
  }


  handleChange=(prop, value, unit_price)=>{
this.setState({
  [prop]: value,
  total: (value*unit_price)
})}


addToCart=(product_id)=>{
  axios.post(`/api/add/${product_id}`, this.state)
  .then(res=>{
    this.props.addToCart(res.data)
  })
 
 
  .catch(err=>console.log(err))
}
  getProduct = () => {
    axios
      .get("/api/all")
      .then((res) => {
        this.props.getAllProduct(res.data)
      })
      .catch((err) => console.log(err));
  };

  render() {
    const {product} = this.props.productReducer

    const mappedProduct = product.map((prod) => {
      return (
        <div className="product" key={prod.product_id}>
          <img src={prod.img_url} alt={prod.name} />
          <p>{prod.name}</p>
          <p>${prod.unit_price}.00</p>
         <Link to='/home'>
         <button onClick={(e)=>{
            this.addToCart(prod.product_id)}} >add to cart</button>
         </Link> 
          <input type="number" onChange={e=>{this.handleChange('quantity', +e.target.value, prod.unit_price)}}
           />
        </div>
      );
    });
    return <div className='landing-main'>
      <div className="product-container">{mappedProduct}</div>;
    </div>
  }
}

const mapStateToProps = (reduxState) => ({
  
  userReducer: reduxState.userReducer,
  productReducer: reduxState.productReducer,
  cartReducer: reduxState.cartReducer
});

export default withRouter(connect(mapStateToProps, { updateUser, getAllProduct, addToCart })(Landing));
