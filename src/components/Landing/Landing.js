import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { updateUser } from "../../redux/userReducer";
import {getAllProduct} from '../../redux/productReducer'
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
        this.props.getAllProduct(res.data)
      })
      .catch((err) => console.log(err));
  };

 
  addOrder = ()=>{
    
    axios.post('/api/add')
    .then(res=>{
      this.props.addOrder(res.data)
    })
    .catch((err) => console.log(err));
  }

 
  render() {
    console.log(this.props)
    const {product} = this.props.productReducer

    const mappedProduct = product.map((e) => {
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
    return <div className='landing-main'>
      <div className="product-container">{mappedProduct}</div>;
    </div>
  }
}

const mapStateToProps = (reduxState) => ({
  
  userReducer: reduxState.userReducer,
  productReducer: reduxState.productReducer
});

export default connect(mapStateToProps, { updateUser, getAllProduct })(Landing);
