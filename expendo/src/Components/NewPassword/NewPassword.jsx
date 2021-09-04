import React, { Fragment, useState, useContext, useEffect } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import { useHistory } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./NewPassword.css";

const NewPassword = (props) => {
  const { id, token } = props.match.params;
  const history = useHistory();
  useEffect(() => {
    async function fetchData() {
      const res = await validateLink(id, token);
      if (res === false) return history.push("/");
    }
    fetchData();
    //eslint-disable-next-line
  }, []);
  const authContext = useContext(AuthContext);
  const { changePass, validateLink } = authContext;
  const [state, setState] = useState({
    password: "",
    password2: "",
  });
  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <Fragment>
      <div className="new-password-con">
        <div className="new-password">
          <div className="title">
            <h1>Change Password</h1>
          </div>
          <div className="input-item">
            <div className="label-con">
              <label htmlFor="password">Enter New Password</label>
            </div>
            <input
              type="password"
              name="password"
              value={state.password}
              onChange={onChange}
            />
          </div>
          <div className="input-item">
            <div className="label-con">
              <label htmlFor="password2">Confirm Password</label>
            </div>
            <input
              type="password"
              name="password2"
              value={state.password2}
              onChange={onChange}
            />
          </div>
          <div className="btn-con">
            <button
              className="btn"
              onClick={() => changePass(state, id, token)}
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default NewPassword;
