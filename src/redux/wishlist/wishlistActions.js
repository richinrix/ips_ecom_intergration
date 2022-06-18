import { ADD_TO_WISHLIST } from "./wishlistTypes";

export const addToWishlist = (wishProductInfo = []) => {
  return {
    type: ADD_TO_WISHLIST,
    payload: wishProductInfo,
  };
};
