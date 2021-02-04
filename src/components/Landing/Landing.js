import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { updateUser, logoutUser, updateOrder } from "../../redux/userReducer";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      quantity: 0,
      total: 0,
      customer_id: 0,
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  handleChange = (prop, val) => {
    this.setState({
      [prop]: val,
    });
  };

  getProduct = () => {
    axios
      .get("/api/all")
      .then((res) => {
        this.setState({
          product: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

  addProduct = () => {
    axios
      .post(
        "api/addProduct",
        this.state.total,
        this.state.quantity,
        this.state.customer_id
      )
      .then((res) => {
        this.props.updateOrder(res.data);
        this.setState({
          total: this.state.product.map(
            (e) => e.unit_price * this.state.quantity
          ),
          customer_id: this.props.customer_id,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const mappedProduct = this.state.product.map((e) => {
      return (
        <div key={e.product_id}>
          <img src={e.img_url} alt={e.name} />
          <p>{e.name}</p>
          <p>${e.unit_price}</p>
          <button onClick={this.addProduct}>add to cart</button>
          <input
            value={this.state.quantity}
            type="number"
            onChange={(e) => this.handleChange("quantity", e.target.value)}
          />
        </div>
      );
    });
    console.log(this.state.product);
    return (
      <div>
        Landing
        {mappedProduct}
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { updateUser, updateOrder })(Landing);
