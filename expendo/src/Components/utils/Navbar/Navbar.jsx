import React, { useContext } from "react";
import "./Navbar.css";
import ExpenseContext from "../../../Context/ExpenseContext/ExpenseContext";
import { REMOVE_TOKEN } from "../../../types";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();
  const expenseContext = useContext(ExpenseContext);
  const { setAdd, setType, togglePrompt } = expenseContext;
  return (
    <div className="nav">
      <h1>EXPENDO</h1>
      {localStorage.token && (
        <div className="con">
          <div className="burger">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="links-con">
            <i
              className="fas fa-power-off"
              style={{ zoom: 1.7 }}
              onClick={() => {
                togglePrompt(true);
                setType(REMOVE_TOKEN, "Are You Sure You Want To Log Out");
              }}
            ></i>
            <i
              className="fas fa-user-circle"
              style={{ zoom: 1.8 }}
              onClick={() => history.push("/user/account")}
            ></i>
            <i
              className="fas fa-home"
              style={{ zoom: 1.8 }}
              onClick={() => history.push("/")}
            ></i>
            <i
              className="fas fa-plus "
              style={{ zoom: 2 }}
              onClick={() => setAdd()}
            ></i>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
