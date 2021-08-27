import React from "react";
import "./LoginCard.css";
import "../../App.css";

const LoginCard = () => {
  return (
    <div className="login-card">
      <h1>Login In</h1>
      <div className="input-con">
        <div className="input-item">
          <label htmlFor="Email">Email</label>
          <input type="text" name="Email" placeholder="user@example.com" />
        </div>
        <div className="input-item">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="********" />
        </div>
        <a href="#">Forgotton Password</a>
      </div>
      <div className="btn-con">
        <button className="btn">Login</button>
      </div>
    </div>
  );
};

export default LoginCard;
