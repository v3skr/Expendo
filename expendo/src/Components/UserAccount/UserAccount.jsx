import React, { Fragment, useState, useContext, useEffect } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import ExpenseContext from "../../Context/ExpenseContext/ExpenseContext";
import Loading from "../utils/Loading";
import Footer from "../Footer/Footer";
import "./UserAccount.css";

const UserAccount = () => {
  const authContext = useContext(AuthContext);
  const expenseContext = useContext(ExpenseContext);
  const { loading } = expenseContext;
  const { getUserInfo, user, updateAccount } = authContext;
  useEffect(() => {
    async function fetchData() {
      await getUserInfo();
    }
    fetchData();
  }, []);
  const [state, setState] = useState({
    Email: "",
    password: "",
    password2: "",
    phone: "",
    isEdit: false,
    isPasswordChange: false,
  });
  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const onChangeClick = () => {
    setState({ ...state, ...user, isEdit: true });
  };
  const onUpdateClick = async () => {
    const res = await updateAccount(state);
    console.log(res);
    if (res === true)
      setState({ ...state, isEdit: false, isPasswordChange: false });
  };
  return loading ? (
    <Loading />
  ) : (
    <Fragment>
      <div className="user-account-con">
        <div className="user-account">
          <div className="title">
            <h1>Edit Account Details</h1>
          </div>
          <div className="input-item">
            <label htmlFor="Email">Email : </label>
            {!state.isEdit ? (
              <h1>{user ? user.Email : ""}</h1>
            ) : (
              <input
                type="text"
                name="Email"
                onChange={onChange}
                value={state.Email}
              />
            )}
          </div>
          <div className="input-item">
            <label htmlFor="phone">Phone Number : </label>
            {!state.isEdit ? (
              <h1>{user ? user.phone : ""}</h1>
            ) : (
              <input
                type="text"
                name="phone"
                onChange={onChange}
                value={state.phone}
              />
            )}
          </div>
          {state.isEdit && !state.isPasswordChange && (
            <h4
              className="change-pass"
              onClick={() =>
                setState({
                  ...state,
                  isPasswordChange: !state.isPasswordChange,
                })
              }
            >
              Change Password
            </h4>
          )}
          {state.isPasswordChange && (
            <div className="input-item">
              <label htmlFor="password">Current Password : </label>
              <input
                type="password"
                name="password"
                onChange={onChange}
                value={state.password}
              />
            </div>
          )}
          {state.isPasswordChange && (
            <div className="input-item">
              <label htmlFor="password2">New Password : </label>
              <input
                type="password"
                name="password2"
                onChange={onChange}
                value={state.password2}
              />
            </div>
          )}
          {state.isPasswordChange && (
            <h4
              className="change-pass"
              onClick={() =>
                setState({
                  ...state,
                  isPasswordChange: !state.isPasswordChange,
                })
              }
            >
              Change Without Password
            </h4>
          )}
          {state.isEdit ? (
            <div className="btn-con">
              <button className="btn" onClick={onUpdateClick}>
                Update Details
              </button>
              <button
                className="btn"
                onClick={() => {
                  setState({
                    ...state,
                    isEdit: false,
                    isPasswordChange: false,
                  });
                }}
              >
                Cancel
              </button>
            </div>
          ) : (
            <button className="btn" onClick={onChangeClick}>
              Change Details
            </button>
          )}
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default UserAccount;
