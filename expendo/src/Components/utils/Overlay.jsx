import React, { useContext } from "react";
import ExpenseContext from "../../Context/ExpenseContext/ExpenseContext";
import "../../App.css";

const Overlay = () => {
  const expenseContext = useContext(ExpenseContext);
  const { toggleOverlay, isShown } = expenseContext;
  return (
    isShown && <div className="overlay" onClick={() => toggleOverlay(false)} />
  );
};

export default Overlay;
