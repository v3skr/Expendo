import React from "react";
import "../../App.css";
import "../Logincard/LoginCard.css";

const SignUpCard = () => {
  return (
    <div className="login-card">
      <h1>Sign Up</h1>
      <div className="input-con">
        <div className="input-item">
          <label htmlFor="Email">Email</label>
          <input type="text" name="Email" placeholder="user@example.com" />
        </div>
        <div className="input-item">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="********" />
        </div>
        <div className="input-item">
          <label htmlFor="phone">Phone Number</label>
          <input type="text" name="phone" placeholder="1234567890" />
        </div>
      </div>
      <div className="btn-con">
        <button className="btn">Sign Up</button>
      </div>
    </div>
  );
};

export default SignUpCard;
