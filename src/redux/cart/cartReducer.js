import { ADD_TO_CART } from "./cartTypes";

const initialState = {
  productsInCart: [], // ["abc", "def"],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        productsInCart: [...state.productsInCart, action.payload],
      };

    default:
      return state;
  }
};

export default cartReducer;
