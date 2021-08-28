import React, { useContext } from "react";
import "./Navbar.css";
import ExpenseContext from "../../../Context/ExpenseContext/ExpenseContext";

const Navbar = () => {
  const expenseContext = useContext(ExpenseContext);
  const { isAdd, setAdd } = expenseContext;
  return (
    <div className="nav">
      <h1>EXPENDO</h1>
      <div className="links-con">
        <i
          className="fas fa-plus"
          style={{ zoom: 2 }}
          onClick={() => setAdd()}
        ></i>
      </div>
    </div>
  );
};

export default Navbar;
