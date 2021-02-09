import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { updateUser } from "../../redux/userReducer";
import {getAllProduct} from '../../redux/productReducer'
import {addToCart} from '../../redux/cartReducer'
import "../Landing/Landing.css";

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


  handleChange=(prop, value)=>{
this.setState({
  [prop]: value,
})}

addToCart=(product_id)=>{
  console.log(product_id)
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
    console.log(this.props)
    console.log(this.state)
    const {product} = this.props.productReducer

    const mappedProduct = product.map((prod) => {
      console.log(prod)
      return (
        <div className="product" key={prod.product_id}>
          <img src={prod.img_url} alt={prod.name} />
          <p>{prod.name}</p>
          <p>${prod.unit_price}</p>
          <button onClick={(e)=>{
            this.addToCart(prod.product_id)}}>add to cart</button>
          <input type="number" onChange={e=>this.handleChange('quantity', +e.target.value)} />
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

export default connect(mapStateToProps, { updateUser, getAllProduct, addToCart })(Landing);
