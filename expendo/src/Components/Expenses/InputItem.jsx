import React from "react";
import "./Expenses.css";

const InputItem = ({ type, name }) => {
  return (
    <div className="expense-input-item">
      <div>
        <label htmlFor={name}>{name[0].toUpperCase() + name.slice(1)}</label>
      </div>
      <input type={type} name={name} />
    </div>
  );
};

export default InputItem;
