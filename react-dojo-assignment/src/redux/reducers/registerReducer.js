import { USER_SIGNUP } from "../types/registerTypes";
const initialState = {
  registeredUser: [
    {
      username: "siddhi",
      password: "siddhi",
    },
  ],
};
const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNUP:
      state.registeredUser.push(action.payload);
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default registerReducer;
