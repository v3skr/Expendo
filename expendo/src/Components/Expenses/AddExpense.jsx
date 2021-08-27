import React, { useContext, useState } from "react";
import InputItem from "./InputItem";
import ExpenseContext from "../../Context/ExpenseContext/ExpenseContext";

const AddExpense = () => {
  let today = new Date().toISOString().slice(0, 10);
  console.log(today);
  const expenseContext = useContext(ExpenseContext);
  const { isAdd, setAdd, addExpense } = expenseContext;
  const [expense, setExpense] = useState({
    name: "",
    amount: "",
    date: today,
  });
  const onChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
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
          <button className="btn" onClick={() => addExpense(expense)}>
            Add Expense
          </button>
        </div>
      </div>
    )
  );
};

export default AddExpense;
