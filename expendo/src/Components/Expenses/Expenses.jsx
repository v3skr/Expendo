import React from "react";
import InputItem from "./InputItem";
import "./Expenses.css";
import ExpenseList from "./ExpenseList";
import Footer from "../Footer/Footer";

const Expenses = () => {
  return (
    <div className="expenses">
      {/* <div className="add-expense">
        <h1 className="title">Add Your Expsenses Here</h1>
        <InputItem type="text" name="expense" />
        <InputItem type="text" name="amount" />
        <InputItem type="date" name="date" />
        <div className="btn-con">
          <button className="btn">Add Expense</button>
        </div>
      </div> */}
      <h1 className="main-title">Your Expenses</h1>
      <ExpenseList style={{ overflow: "hidden" }} />
      <Footer />
    </div>
  );
};

export default Expenses;
