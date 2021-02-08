const initialState = {
    order:{
        order_id: 0,
    total: 0,
    customer_id: 0,
    quantity: 0
    },
    
};

const ADD_ORDER = 'ADD_ORDER'

export function addOrder(orderObj) {
    return {
        type: ADD_ORDER,
        payload: orderObj,
    }
}

export default function orderReducer(state=initialState, action) {
    const {type, payload} = action;

    switch(type){
        case ADD_ORDER:
        const {order_id, total, customer_id, quantity} = payload;
        return {...state, order: {order_id, total, customer_id, quantity}};

        default:
            return state
    }
}