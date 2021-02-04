const initialState = {
  customer_id: 0,
  first_name: "",
  last_name: "",
  email: "",
  profile_pic: "",
};

const UPDATE_USER = "UPDATE_USER";
const LOGOUT_USER = "LOGOUT_USER";
const UPDATE_ORDER = 'UPDATE_ORDER'

export function updateOrder(productObj) {
  return {
      type: UPDATE_ORDER,
      payload: productObj
  };
}

export function updateUser(userObj) {
  return {
    type: UPDATE_USER,
    payload: userObj,
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
    payload: {}
  };
}

export default function userReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_USER:
      const { customer_id, first_name, last_name, email, profile_pic } = payload;
      return { ...state, customer_id, first_name, last_name, email, profile_pic};

    case LOGOUT_USER:
      return state;

      case UPDATE_ORDER: 
      const {total, quantity, date_created} = payload;
      return {...state, total, quantity, date_created}

    default:
      return state;
  }
}
