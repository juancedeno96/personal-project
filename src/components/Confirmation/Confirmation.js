import React, {useState} from 'react';
import { updateUser } from "../../redux/userReducer";
import { connect } from "react-redux";
import axios from 'axios';
import { Link, withRouter } from "react-router-dom";




const Confirmation =(props)=>{
    
    console.log(props)
    // const [order, setOrder] = useState

const deleteOrder=(customer_id)=>{
    
    axios.delete(`/api/delete-order/${customer_id}`)
    .catch((err) => console.log(err));
}


    return(
        <div><h1>Thank you for shopping with us!</h1> <br/><br/>
            <Link to ='/home'>
            <button onClick={()=>deleteOrder(props.customer_id)}>Close</button>
            </Link>
        </div>
        
        
    )
    
}




const mapStateToProps= reduxState=>reduxState.userReducer

export default withRouter(connect(mapStateToProps, {updateUser})(Confirmation));