import React, { useContext, useEffect } from "react";
import "./Navbar.css";
import ExpenseContext from "../../../Context/ExpenseContext/ExpenseContext";
import { REMOVE_TOKEN } from "../../../types";

const Navbar = () => {
  const expenseContext = useContext(ExpenseContext);
  const { setAdd, setType, togglePrompt } = expenseContext;
  return (
    <div className="nav">
      <h1>EXPENDO</h1>
      {localStorage.token && (
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
            className="fas fa-plus "
            style={{ zoom: 2 }}
            onClick={() => setAdd()}
          ></i>
        </div>
      )}
    </div>
  );
};

export default Navbar;
