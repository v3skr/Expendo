import React, { Fragment, useState, useContext } from "react";
import ExpenseContext from "../../Context/ExpenseContext/ExpenseContext";
import AuthContext from "../../Context/AuthContext/AuthContext";
import Footer from "../Footer/Footer";
import "./PasswordReset.css";
import Loading from "../utils/Loading";

const PasswordReset = () => {
  const expenseContext = useContext(ExpenseContext);
  const { loading } = expenseContext;
  const authContext = useContext(AuthContext);
  const { resetPassword } = authContext;
  const [Email, setEmail] = useState("");
  return loading ? (
    <Loading />
  ) : (
    <Fragment>
      <div className="password-reset-con">
        <div className="password-reset">
          <h2 className="title">
            Enter The Email Assocaited With Your Account
          </h2>
          <div className="input-item">
            <div className="label-con">
              <label className="label" htmlFor="Email">
                Enter Password
              </label>
            </div>
            <input
              type="Email"
              placeholder="Enter Email"
              name="Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="btn-con">
            <button className="btn" onClick={() => resetPassword(Email)}>
              Send Email
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default PasswordReset;
