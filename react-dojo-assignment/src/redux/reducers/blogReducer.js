import {
  ADD_BLOG,
  ADD_USER_BLOG,
  ADD_COMMENT,
  ADD_USER_COMMENT,
} from "../types/blogTypes";
const initialState = {
  blog: [],
  comment: [],
};
const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BLOG:
      state.blog = [...action.payload];
      return {
        ...state,
      };
    case ADD_USER_BLOG:
      state.blog = [action.payload, ...state.blog];
      return {
        ...state,
      };
    case ADD_COMMENT:
      state.comment = [...action.payload];
      return {
        ...state,
      };
    case ADD_USER_COMMENT:
      state.comment = [...state.comment, action.payload];
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default blogReducer;
