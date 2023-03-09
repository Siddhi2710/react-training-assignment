import { USER_SIGNUP } from "../types/registerTypes";
export const registerUser = (loginData) => {
  return {
    type: USER_SIGNUP,
    payload: loginData,
  };
};
