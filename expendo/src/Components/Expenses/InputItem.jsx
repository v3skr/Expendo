import React from "react";
import "./Expenses.css";

const InputItem = ({ type, name, onChange, value }) => {
  return (
    <div className="expense-input-item">
      <div>
        <label htmlFor={name}>{name[0].toUpperCase() + name.slice(1)}</label>
      </div>
      <input type={type} name={name} onChange={onChange} value={value} />
    </div>
  );
};

export default InputItem;
