import React, { useState, useContext, Fragment } from "react";
import "./ExpsenseItem.css";
import EditInput from "../EditInput/EditInput";
import ExpenseContext from "../../Context/ExpenseContext/ExpenseContext";
const ExpsenseItem = ({ expense, id }) => {
  const { name, amount, date, isEdit, _id } = expense;
  const expenseContext = useContext(ExpenseContext);
  const { setEdit, removeEdit, update, deleteExpense } = expenseContext;
  const [state, setState] = useState({
    name,
    amount,
    date,
    isEdit,
    _id,
  });
  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <div className="expsense-item">
      <main>
        <div className="main-info">
          <h1 className="expense-item-name">
            Expense :{" "}
            {isEdit ? (
              <EditInput name="name" value={state.name} onChange={onChange} />
            ) : (
              name
            )}
          </h1>
          <h1 className="expense-item-amount">
            Amount : £{" "}
            {isEdit ? (
              <EditInput
                name="amount"
                value={state.amount}
                onChange={onChange}
              />
            ) : (
              amount
            )}
          </h1>
          <h1 className="expense-item-date">
            Date :{" "}
            {isEdit ? (
              <EditInput
                name="date"
                type="date"
                value={state.date}
                onChange={onChange}
              />
            ) : (
              date
            )}
          </h1>
        </div>
        <div className="btn-con">
          {isEdit ? (
            <Fragment>
              <button
                className="btn update"
                onClick={() => {
                  update(state, id);
                  removeEdit(id);
                }}
              >
                Update
              </button>
              <button
                className="btn cancel"
                onClick={() => {
                  removeEdit(id);
                  setState({ name, date, amount });
                }}
              >
                Cancel
              </button>
            </Fragment>
          ) : (
            <button className="btn edit" onClick={() => setEdit(id)}>
              Edit
            </button>
          )}
          <button className="btn delete" onClick={() => deleteExpense(id, _id)}>
            Delete
          </button>
        </div>
      </main>
    </div>
  );
};

export default ExpsenseItem;
