import React, { useReducer } from "react";
import ExpenseContext from "./ExpenseContext";
import ExpenseReducer from "./ExpenseReducer";
import { TOGGGLE_EDIT, ADD_EXPENSE } from "../../types";

const ExpenseState = (props) => {
  const initalState = {
    expenses: [
      {
        name: "salahs",
        amount: "4",
        date: "2021-08-26",
      },
      {
        name: "mike-sake",
        amount: "5",
        date: "2021-08-27",
      },
      {
        name: "istanbul's",
        amount: "16",
        date: "2021-08-27",
      },
    ],
    isAdd: false,
  };
  const [state, dispatch] = useReducer(ExpenseReducer, initalState);

  const setAdd = () => {
    dispatch({ type: TOGGGLE_EDIT });
  };

  const addExpense = (expense) => {
    dispatch({ type: ADD_EXPENSE, payload: expense });
  };
  return (
    <ExpenseContext.Provider
      value={{
        expenses: state.expenses,
        isAdd: state.isAdd,
        addExpense,
        setAdd,
      }}
    >
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseState;
