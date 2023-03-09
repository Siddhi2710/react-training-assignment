import { USER_LOGIN } from "../types/loginTypes";
export const loginUser = (loginData) => {
  return {
    type: USER_LOGIN,
    payload: loginData,
  };
};
