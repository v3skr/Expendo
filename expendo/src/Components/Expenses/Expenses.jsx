import React, { useContext } from "react";
import "./Expenses.css";
import ExpenseList from "./ExpenseList";
import Footer from "../Footer/Footer";
import AddExpense from "./AddExpense";
import ExpenseContext from "../../Context/ExpenseContext/ExpenseContext";

const Expenses = () => {
  const expenseContext = useContext(ExpenseContext);
  const { expenses } = expenseContext;
  return (
    <div className="expenses-con">
      <div className="expenses">
        {expenses.length > 0 && <h1 className="main-title">Your Expenses</h1>}
        <AddExpense />
        <ExpenseList style={{ overflow: "hidden" }} />
      </div>
      <Footer />
    </div>
  );
};

export default Expenses;
