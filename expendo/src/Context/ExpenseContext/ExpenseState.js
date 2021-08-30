import React, { useReducer, useContext } from "react";
import ExpenseContext from "./ExpenseContext";
import ExpenseReducer from "./ExpenseReducer";
import AlertContext from "../AlertContext/AlertContext";
import { useHistory } from "react-router-dom";

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
  REMOVE_TOKEN,
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
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const history = useHistory();
  //ADD EXPENSE
  const addExpense = async (expense) => {
    if (!localStorage.token) {
      history.push("/");
      setAlert({
        message: "Can't Access This Route Without Logging In ",
        type: "war",
      });
      return;
    }
    if (!localStorage.token) return;
    setLoading();
    const res = await axios.post("/api/user/expenses", expense);
    removeLoading();
    if (res.data.msg === "jwt expired") {
      dispatch({ type: REMOVE_TOKEN, payload: res.data });
      setAlert({ message: "Token expired", type: res.data.type });
      history.push("/");
      return;
    }
    expense._id = res.data._id;
    setAlert({ message: res.data.msg, type: "info" });
    dispatch({ type: ADD_EXPENSE, payload: expense });
  };

  const setEdit = (id) => {
    dispatch({ type: SET_EDIT, payload: id });
  };
  const removeEdit = (id) => {
    dispatch({ type: REMOVE_EDIT, payload: id });
  };
  const update = async (expense, id) => {
    if (!localStorage.token) {
      history.push("/");
      setAlert({
        message: "Can't Access This Route Without Logging In ",
        type: "war",
      });
      return;
    }
    setLoading();
    const res = await axios.put("/api/user/expenses", {
      expense,
      id: expense._id,
    });
    if (res.data.msg === "jwt expired") {
      history.push("/");
      dispatch({ type: REMOVE_TOKEN, payload: res.data });
      return setAlert({ message: "Token expired", type: res.data.type });
    }
    removeLoading();
    dispatch({ type: UPDATE, payload: { expense, id } });
    setAlert({ message: res.data.msg, type: res.data.type });
  };

  //DELETE EXPENSE
  const deleteExpense = async (id, _id) => {
    if (!localStorage.token) {
      history.push("/");
      setAlert({
        message: "Can't Access This Route Without Logging In ",
        type: "war",
      });
      return;
    }

    axios.defaults.headers.common["_id"] = _id;
    setLoading();
    const res = await axios.delete("/api/user/expenses");
    removeLoading();
    if (res.data.msg === "jwt expired") {
      history.push("/");
      dispatch({ type: REMOVE_TOKEN, payload: res.data });
      return setAlert({ message: "Token expired", type: res.data.type });
    }
    dispatch({ type: DELETE, payload: id });
    setAlert({ message: res.data.msg, type: res.data.type });
  };

  const loadExpenses = async () => {
    if (!localStorage.token) {
      history.push("/");
      setAlert({
        message: "Can't Access This Route Without Logging In ",
        type: "war",
      });
      return;
    }
    axios.defaults.headers.common["token"] = localStorage.token;
    setLoading();
    const res = await axios.get("/api/user/expenses");
    removeLoading();
    if (res.data.msg === "jwt expired") {
      history.push("/");
      dispatch({ type: REMOVE_TOKEN, payload: res.data });
      return setAlert({ message: "Token expired", type: res.data.type });
    }
    dispatch({ type: SET_EXPENSES, payload: res.data });
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
