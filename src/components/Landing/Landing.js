import React, { Component } from "react";
import axios from "axios";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
        product: []
    };
  }

  componentDidMount() {
    this.getProduct();
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

  render() {
    
     const mappedProduct = this.state.product.map((e)=>{
         return(
             <div key = {e.product_id}>
                 <img src = {e.img_url} alt={e.name}/>
                 <p>{e.name}</p>
                 <p>${e.unit_price}</p>
             </div>
         )
     })
    console.log(this.state.product);
    return <div>Landing
        {mappedProduct}
    </div>;
  }
}

export default Landing;
