import { LOGIN_USER } from "./userTypes";

const initialState = {
  username: "",
  //   password: null,
};

export const loginUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
};

export default loginUserReducer;
