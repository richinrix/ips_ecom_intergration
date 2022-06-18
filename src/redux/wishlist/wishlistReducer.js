import { ADD_TO_WISHLIST } from "./wishlistTypes";

const initialState = {
  productsInWishlist: [],
};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return {
        ...state,
        productsInWishlist: [...state.productsInWishlist, action.payload],
      };
    default:
      return state;
  }
};

export default wishlistReducer;
