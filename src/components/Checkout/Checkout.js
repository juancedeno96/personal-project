import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { updateUser } from "../../redux/userReducer";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import "./Checkout.scss";

const Cart = (props) => {
  const [userCart, setUserCart] = useState([]);
  const [total, setTotal] = useState([]);

  useEffect(() => {
    getUserItems();
    getTotal();
  }, [props]);

  const getUserItems = () => {
    const customer_id = props.customer_id;
    axios
      .get(`/api/cart/${customer_id}`)
      .then((res) => {
        setUserCart(res.data);
      })
      .catch((err) => console.log(err));
  };

  const getTotal = () => {
    const customer_id = props.customer_id;
    axios.get(`/api/total/${customer_id}`).then((res) => {
      setTotal(res.data);
    });
  };

  const mappedUserItems = userCart.map((prod) => {
    return (
      <div className="cartItem" key={prod.product_id}>
        <p>{prod.name}</p>
        <img src={prod.img_url} alt={prod.name} />
        <p>x{prod.quantity}</p>
        <p>total: ${prod.total}</p>
      </div>
    );
  });

  const mappedTotal = total.map((e) => {
    console.log(+e.sum);
    return (
      <div>
        <p>Delivery Method: Curbside Pick-Up</p>
        <p>Total Cost: ${e.cost}</p>
        <p>Number of Items: {e.quantity}</p>

        <Link to="/confirmation">
          <button>Pay for Order</button>
        </Link>
      </div>
    );
  });

  return (
    <div>
      {mappedUserItems}
      <p>{mappedTotal}</p>
    </div>
  );
};

const mapStateToProps = (reduxState) => reduxState.userReducer;

export default withRouter(connect(mapStateToProps, { updateUser })(Cart));
