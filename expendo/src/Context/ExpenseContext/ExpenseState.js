import React, { useReducer } from "react";
import ExpenseContext from "./ExpenseContext";
import ExpenseReducer from "./ExpenseReducer";
import {
  TOGGGLE_EDIT,
  ADD_EXPENSE,
  SET_EDIT,
  REMOVE_EDIT,
  UPDATE,
  DELETE,
} from "../../types";

const ExpenseState = (props) => {
  const initalState = {
    expenses: [
      {
        id: 1,
        name: "salahs",
        amount: "4",
        date: "2021-08-26",
        isEdit: false,
      },
      {
        id: 2,
        name: "mike-sake",
        amount: "5",
        date: "2021-08-27",
        isEdit: false,
      },
      {
        id: 3,
        name: "istanbul's",
        amount: "16",
        date: "2021-08-27",
        isEdit: false,
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
  const setEdit = (id) => {
    dispatch({ type: SET_EDIT, payload: id });
  };
  const removeEdit = (id) => {
    dispatch({ type: REMOVE_EDIT, payload: id });
  };
  const update = (expense, id) => {
    dispatch({ type: UPDATE, payload: { expense, id } });
  };
  const deleteExpense = (id) => {
    dispatch({ type: DELETE, payload: id });
  };
  return (
    <ExpenseContext.Provider
      value={{
        expenses: state.expenses,
        isAdd: state.isAdd,
        deleteExpense,
        addExpense,
        removeEdit,
        setAdd,
        setEdit,
        update,
      }}
    >
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseState;
