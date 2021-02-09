import React, {useEffect, useState} from 'react'
import axios from "axios";
import { connect } from "react-redux";
import { updateUser } from "../../redux/userReducer";
import { Link, withRouter } from "react-router-dom";


const Cart =(props)=> {
    
    const [userCart, setUserCart] = useState([])
    

    useEffect(()=>{
        getUserItems()
    }, [props])

    const getUserItems=()=> {
        const customer_id = props.customer_id
        axios.get(`/api/cart/${customer_id}`)
        .then(res=>{
            setUserCart(res.data)
        })
    }

    
        console.log(props)
        console.log(userCart)

        const mappedUserItems = userCart.map((e)=>{
            return(
                <div className='cartItem' key = {e.product_id}>
                    <p>{e.name}</p>
                    <img src={e.img_url} alt = {e.name}/>
                    <p>x{e.quantity}</p>
                    <p>total: ${e.total}</p>

                </div>
            )
        })
        return(
            <div>
                {mappedUserItems}
               <Link to='/checkout' ><button>Go to Checkout</button></Link> 
            </div>
        )
    }


const mapStateToProps = reduxState => reduxState.userReducer

export default withRouter(connect(mapStateToProps, {updateUser})(Cart))