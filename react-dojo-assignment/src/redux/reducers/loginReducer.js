import { USER_LOGIN } from "../types/loginTypes";
const initialState = {
  LoggedinUser: {},
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      state.LoggedinUser = action.payload;
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default loginReducer;
