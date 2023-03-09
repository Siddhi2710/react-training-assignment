import React from "react";
import { Routes, Route } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import { useSelector } from "react-redux";
const Routing = () => {
  var loggedInUser = useSelector((state) => {
    // console.log("registered user",state.loginReducer);
    return state.loginReducer.LoggedinUser.username;
  });
  if (!loggedInUser) {
    loggedInUser = window.localStorage.getItem("Login");
    // console.log("inside route",loggedInUser)
  }
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {loggedInUser ? <Route path="/blogs" element={<Blog />} /> : ""}
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default Routing;
