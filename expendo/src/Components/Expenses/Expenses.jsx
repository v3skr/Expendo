import React from "react";
import "./Expenses.css";
import ExpenseList from "./ExpenseList";
import Footer from "../Footer/Footer";
import AddExpense from "./AddExpense";

const Expenses = () => {
  return (
    <div className="expenses-con">
      <div className="expenses">
        <h1 className="main-title">Your Expenses</h1>
        <AddExpense />
        <ExpenseList style={{ overflow: "hidden" }} />
      </div>
      <Footer />
    </div>
  );
};

export default Expenses;
