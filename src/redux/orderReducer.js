const intialState= {
    total: 0,
    quantity: 0,
    date_created: ''
}

const UPDATE_ORDER = 'UPDATE_ORDER'

export function updateOrder(productObj) {
    return {
        type: UPDATE_ORDER,
        payload: productObj
    };
}

export default function productReducer(state=intialState, action) {
  const { type, payload } = action;

    switch(type) {
        case UPDATE_ORDER: 
        const {total, quantity, date_created} = payload;
        return {...state, total, quantity, date_created}

        default:
            return state
    }

    
}