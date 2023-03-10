import { createStore, combineReducers } from "redux";
import registerReducer from "./reducers/registerReducer";
import loginReducer from "./reducers/loginReducer";
import blogReducer from "./reducers/blogReducer";

const rootReducer = combineReducers({
  loginReducer: loginReducer,
  registerReducer: registerReducer,
  blogReducer: blogReducer,
});
const store = createStore(rootReducer);
export default store;
