import React, { useState, useContext } from "react";
import "../../App.css";
import "../Logincard/LoginCard.css";
import AuthContext from "../../Context/AuthContext/AuthContext";

const SignUpCard = () => {
  const [state, setState] = useState({
    Email: "",
    password: "",
    phone: "",
  });
  const authContext = useContext(AuthContext);
  const { userRegister } = authContext;
  const onSubmit = (e) => {
    e.preventDefault();
    userRegister(state);
  };
  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="login-card">
        <h1>Sign Up</h1>
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
          <div className="input-item">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="1234567890"
              value={state.phone}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="btn-con">
          <button className="btn" onClick={onSubmit}>
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignUpCard;
