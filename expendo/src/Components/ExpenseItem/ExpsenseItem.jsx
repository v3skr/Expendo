import React from "react";
import "./ExpsenseItem.css";
const ExpsenseItem = ({ expense: { name, amount, date } }) => {
  return (
    <div className="expsense-item">
      <main>
        <div className="main-info">
          <h1 className="expense-item-name">Expense : {name}</h1>
          <h1 className="expense-item-amount">Amount : £{amount}</h1>
          <h1 className="expense-item-date">Date : {date}</h1>
        </div>
        <div className="btn-con">
          <button className="btn">Edit</button>
          <button className="btn">Delete</button>
        </div>
      </main>
    </div>
  );
};

export default ExpsenseItem;
