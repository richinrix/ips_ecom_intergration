import { combineReducers, createStore } from "redux";
import cartReducer from "./cart/cartReducer";
import loginUserReducer from "./user/userReducer";
import wishlistReducer from "./wishlist/wishlistReducer";

const rootReducer = combineReducers({
  cartReducer: cartReducer,
  wishlistReducer: wishlistReducer,
  loginUserReducer: loginUserReducer,
});
const store = createStore(rootReducer);

export default store;
