import React, { useContext } from "react";
import ExpenseContext from "../../Context/ExpenseContext/ExpenseContext";
import "../../App.css";

const Overlay = () => {
  const expenseContext = useContext(ExpenseContext);
  const { isAdd, setAdd } = expenseContext;
  return isAdd && <div className="overlay" onClick={setAdd} />;
};

export default Overlay;
