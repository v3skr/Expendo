import React, { useContext, useState } from "react";
import InputItem from "./InputItem";
import ExpenseContext from "../../Context/ExpenseContext/ExpenseContext";

const AddExpense = () => {
  let today = new Date().toISOString().slice(0, 10);
  const initalState = {
    name: "",
    amount: "",
    date: today,
    isEdit: false,
  };
  const expenseContext = useContext(ExpenseContext);
  const { isAdd, setAdd, addExpense } = expenseContext;
  const [expense, setExpense] = useState(initalState);
  const onChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };
  const onClick = () => {
    addExpense(expense);
    setExpense(initalState);
  };
  return (
    isAdd && (
      <div className="add-expense">
        <header>
          <i className="fas fa-times" onClick={setAdd}></i>
        </header>
        <h1 className="title">Add Your Expsenses Here</h1>
        <InputItem
          type="text"
          name="name"
          onChange={onChange}
          value={expense.name}
        />
        <InputItem
          type="text"
          name="amount"
          onChange={onChange}
          value={expense.amount}
        />
        <InputItem
          type="date"
          name="date"
          onChange={onChange}
          value={expense.date}
        />
        <div className="btn-con">
          <button className="btn" onClick={onClick}>
            Add Expense
          </button>
        </div>
      </div>
    )
  );
};

export default AddExpense;
