import React, { useContext } from "react";
import ExpsenseItem from "../ExpenseItem/ExpsenseItem";
import ExpenseContext from "../../Context/ExpenseContext/ExpenseContext";

const ExpenseList = () => {
  const expsenseContext = useContext(ExpenseContext);
  const { expenses } = expsenseContext;
  return expenses.length > 0 ? (
    <div className="expsenses-list">
      {expenses.map((expense, id) => (
        <ExpsenseItem expense={expense} key={id} id={id} />
      ))}
    </div>
  ) : (
    <h1 className="main-title">No Expenses...</h1>
  );
};

export default ExpenseList;
