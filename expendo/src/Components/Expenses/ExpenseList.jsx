import React, { useContext } from "react";
import ExpsenseItem from "../ExpenseItem/ExpsenseItem";
import ExpenseContext from "../../Context/ExpenseContext/ExpenseContext";

const ExpenseList = () => {
  const expsenseContext = useContext(ExpenseContext);
  const { expenses } = expsenseContext;
  return (
    <div className="expsenses-list">
      {expenses.map((expense, id) => (
        <ExpsenseItem expense={expense} key={id} />
      ))}
    </div>
  );
};

export default ExpenseList;
