import React from "react";
import "./ExpsenseItem.css";
const ExpsenseItem = () => {
  return (
    <div className="expsense-item">
      <main>
        <div className="main-info">
          <h1 className="expense-item-name">Expense : Name</h1>
          <h1 className="expense-item-amount">Amount : £10</h1>
          <h1 className="expense-item-date">Date : 21/21/2021</h1>
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
