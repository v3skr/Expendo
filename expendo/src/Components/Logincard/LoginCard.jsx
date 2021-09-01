import React, { useState, useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import "./LoginCard.css";
import "../../App.css";

const LoginCard = () => {
  const [state, setState] = useState({
    Email: "",
    password: "",
  });
  const authContext = useContext(AuthContext);
  const { userLogin } = authContext;
  const onSubmit = (e) => {
    e.preventDefault();
    userLogin(state);
  };
  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="login-card">
        <h1>Login In</h1>
        <div className="input-con">
          <div className="input-item">
            <label htmlFor="Email">Email</label>
            <input
              type="text"
              name="Email"
              placeholder="user@example.com"
              value={state.Email}
              onChange={onChange}
            />
          </div>
          <div className="input-item">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="********"
              value={state.password}
              onChange={onChange}
            />
          </div>
          <a href="/user/passwordreset">Forgotton Password</a>
        </div>
        <div className="btn-con">
          <button className="btn" onClick={onSubmit}>
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginCard;
