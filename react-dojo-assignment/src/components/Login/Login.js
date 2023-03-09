import React, { useState } from "react";
import "../Register/Register.css";
import { Link } from "react-router-dom";
import { useSelector, connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/actions/loginActions";

const Login = (props) => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [noMatch, setnoMatch] = useState(false);
  const navigate = useNavigate();

  const registeredUser = useSelector((state) => {
    console.log("registered user", state.registerReducer);

    return state.registerReducer;
  });

  let SignIn = (event) => {
    event.preventDefault();
    console.log("before if", props.registeredUser);
    if (
      props.registeredUser.find(
        (user) => user.username === username && user.password === password
      )
    ) {
      props.logginUser({ username: username });
      window.localStorage.setItem(
        "Login",
        JSON.stringify({ username: username })
      );
      navigate("/blogs");
    } else {
      setnoMatch(true);
    }
  };

  return (
    <div className="form">
      <h2>Login</h2>
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
              setnoMatch(false);
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
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
              setnoMatch(false);
            }}
            required
          />
        </div>
      </div>
      <div className="footer">
        <button type="submit" className="btn btn-primary" onClick={SignIn}>
          Sign In
        </button>
      </div>
      {noMatch ? (
        <span className="text-danger">Invaild Username or Password</span>
      ) : (
        ""
      )}
      <p className="text-center">
        Not a member?
        <Link data-toggle="tab" to="/Register">
          Sign Up
        </Link>
      </p>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    loginDetails: state.loginReducer.loggedInUser,
    registeredUser: state.registerReducer.registeredUser,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logginUser: (data) => dispatch(loginUser(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
