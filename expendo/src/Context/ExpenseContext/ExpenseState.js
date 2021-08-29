import React, { useReducer, useContext } from "react";
import ExpenseContext from "./ExpenseContext";
import ExpenseReducer from "./ExpenseReducer";
import axios from "axios";
import {
  TOGGGLE_EDIT,
  ADD_EXPENSE,
  SET_EDIT,
  REMOVE_EDIT,
  UPDATE,
  DELETE,
  SET_EXPENSES,
  SET_LOADING,
  REMOVE_LOADING,
} from "../../types";

const ExpenseState = (props) => {
  const initalState = {
    expenses: [],
    isAdd: false,
    loading: null,
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
  const loadExpenses = async () => {
    if (!localStorage.token) return;
    axios.defaults.headers.common["token"] = localStorage.token;
    setLoading();
    const res = await axios.get("/api/user/expenses");
    dispatch({ type: SET_EXPENSES, payload: res.data });
    removeLoading();
  };
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };
  const removeLoading = () => {
    dispatch({ type: REMOVE_LOADING });
  };
  return (
    <ExpenseContext.Provider
      value={{
        expenses: state.expenses,
        isAdd: state.isAdd,
        loading: state.loading,
        deleteExpense,
        addExpense,
        removeEdit,
        setAdd,
        setEdit,
        update,
        loadExpenses,
      }}
    >
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseState;
