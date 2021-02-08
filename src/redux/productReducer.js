import axios from "axios";
const initialState = {
  product: {},
};

const GET_PRODUCT = "GET_PRODUCT";

export function getAllProduct() {
  const product = axios.get("api/all");
  return {
    type: GET_PRODUCT,
    payload: product,
  };
}

export default function productReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCT:
      return { ...state, product: { payload } };

    default:
      return state;
  }
}
