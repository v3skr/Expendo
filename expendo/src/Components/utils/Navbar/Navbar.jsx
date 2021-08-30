import React, { useContext, useEffect } from "react";
import "./Navbar.css";
import { useHistory } from "react-router-dom";
import ExpenseContext from "../../../Context/ExpenseContext/ExpenseContext";

const Navbar = () => {
  const history = useHistory();
  useEffect(() => {
    // if (!localStorage.token) history.push("/");
  }, []);
  const expenseContext = useContext(ExpenseContext);
  const { setAdd } = expenseContext;
  return (
    <div className="nav">
      <h1>EXPENDO</h1>
      {localStorage.token && (
        <div className="links-con">
          <i
            className="fas fa-plus"
            style={{ zoom: 2 }}
            onClick={() => setAdd()}
          ></i>
        </div>
      )}
    </div>
  );
};

export default Navbar;
