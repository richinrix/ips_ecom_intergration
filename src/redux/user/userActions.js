import { LOGIN_USER } from "./userTypes";

export const loginUser = (username = "") => {
  return {
    type: LOGIN_USER,
    payload: username,
  };
};
