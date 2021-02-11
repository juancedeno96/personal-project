import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { updateUser } from "../../redux/userReducer";
import { Link, withRouter } from "react-router-dom";
import './Cart.scss';

const Cart = (props) => {
  const [userCart, setUserCart] = useState([]);

  useEffect(() => {
    getUserItems();
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

  const deleteItems = (product_id) => {
    axios
      .delete(`/api/delete/${product_id}`)
      .catch((err) => console.log(err));
  };


//   const updateQuantity = (product_id) =>{
//       axios.put(`/api/update/${product_id}`, quantity)
//       .then(res=>res.sendStatus(200))
//       .catch(err=>console.log(err))
//   }
  // console.log(props);
  // console.log(userCart);
//   console.log(quantity)

  const mappedUserItems = userCart.map((prod) => {
    return (
      
      
      <div className="cartItem" key={prod.product_id}>
        <p>{prod.name}</p>
        <img src={prod.img_url} alt={prod.name} />
        <p>x{prod.quantity}</p>
        <p>total: ${prod.total}</p>
        <Link to ='/cart'
        ><button onClick={()=>deleteItems(prod.product_id)}>Delete</button></Link>
        {/* <input  type ='number' onChange={e=>setQuantity(e.target.value)}/> */}
        {/* <button onClick={(e)=>updateQuantity(prod.product_id)}>update quantity</button> */}
      </div>
      
      
    )
  });
  return (
    <div className='cart-main'>
    <div className='cart-container'>
      <div className='gray'>
      {mappedUserItems}
      </div>
    </div>
    <Link to="/checkout">
        <button id='check-btn'>Go to Checkout</button>
      </Link>
    </div>
  );
};

const mapStateToProps = (reduxState) => reduxState.userReducer;

export default withRouter(connect(mapStateToProps, { updateUser })(Cart))
