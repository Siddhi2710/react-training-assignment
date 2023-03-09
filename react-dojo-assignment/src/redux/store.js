import { createStore, combineReducers } from "redux";
import registerReducer from "./reducers/registerReducer";
import loginReducer from "./reducers/loginReducer";

const rootReducer = combineReducers({
  loginReducer: loginReducer,
  registerReducer: registerReducer,
});
const store = createStore(rootReducer);
export default store;
