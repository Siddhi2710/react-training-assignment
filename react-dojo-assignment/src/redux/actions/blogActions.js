import {
  ADD_BLOG,
  ADD_USER_BLOG,
  ADD_USER_COMMENT,
  ADD_COMMENT,
} from "../types/blogTypes";
export const addBlog = (blog) => {
  return {
    type: ADD_BLOG,
    payload: blog,
  };
};
export const addUserBlog = (blog) => {
  return {
    type: ADD_USER_BLOG,
    payload: blog,
  };
};
export const addComment = (comments) => {
  return {
    type: ADD_COMMENT,
    payload: comments,
  };
};
export const addUserComment = (comment) => {
  return {
    type: ADD_USER_COMMENT,
    payload: comment,
  };
};
