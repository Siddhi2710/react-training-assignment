import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { registerUser } from "../../redux/actions/registerActions";
// import { registerUser } from "../../redux/index";

const Register = (props) => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [Nomatch, setNomatch] = useState(false);
  const [message, setmessage] = useState("");
  const navigate = useNavigate();
  const registeredUser = useSelector((state) => {
    return state.registerReducer.registeredUser;
  });
  let handleSubmit = (event) => {
    event.preventDefault();
    if (registeredUser.find((user) => user.username === username)) {
      setNomatch(true);
      setmessage("User already exists");
    } else {
      if (password === confirmpassword) {
        let logindata = {
          username: username,
          password: password,
        };
        props.registerUser(logindata);
        navigate("/login");
      } else {
        setNomatch(true);
        setmessage("Password & Confirm Password does not match");
      }
    }
  };
  return (
    <div className="form">
      <h2>Sign Up</h2>
      <div className="form-body">
        <div className="username">
          <label className="form__label" htmlFor="name">
            Username
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setusername(e.target.value);
              setNomatch(false);
            }}
            required
          />
        </div>
        <div className="password">
          <label className="form__label" htmlFor="password">
            Password
          </label>
          <input
            className="form-control"
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
              setNomatch(false);
            }}
            required
          />
        </div>
        <div className="confirm-password">
          <label className="form__label" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="form-control"
            type="password"
            placeholder="Confirm Password"
            value={confirmpassword}
            onChange={(e) => {
              setconfirmpassword(e.target.value);
            }}
            required
          />
        </div>
      </div>
      <div className="footer">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
      </div>
      {Nomatch ? <span className="text-danger">{message}</span> : ""}
      <p className="text-center">
        Already a member?
        <Link data-toggle="tab" to="/login">
          Sign In
        </Link>
      </p>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    loginDetails: state.registerReducer.registeredUser,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (data) => dispatch(registerUser(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
