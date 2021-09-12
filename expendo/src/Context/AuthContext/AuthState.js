import React, { useReducer, useContext } from "react";
import AlertContext from "../AlertContext/AlertContext";
import ExpenseContext from "../ExpenseContext/ExpenseContext";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import { useHistory } from "react-router-dom";
import joi from "@hapi/joi";
import { v4 as uuid } from "uuid";
import { SET_TOKEN, SET_USER } from "../../types";
import axios from "axios";

const AuthState = (props) => {
  const history = useHistory();
  const initalState = {
    user: null,
  };
  const [state, dsipatch] = useReducer(AuthReducer, initalState);
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;
  const expenseContext = useContext(ExpenseContext);
  const { setLoading, removeLoading } = expenseContext;

  const getUserInfo = async () => {
    if (!localStorage.token) {
      history.push("/");
      return setAlert({
        message: "Can't Access This Route Without Logging In ",
        type: "war",
        id: uuid(),
      });
    }
    axios.defaults.headers.common["token"] = localStorage.token;
    setLoading();
    const res = await axios.get("/api/user");
    removeLoading();
    if (res.data.msg === "jwt expired") {
      history.push("/");
      localStorage.removeItem("token");
      setAlert({
        message: "Token expired",
        type: "war",
        id: uuid(),
      });
      return;
    }
    dsipatch({ type: SET_USER, payload: res.data.msg });
  };
  const userRegister = async (user) => {
    user.Email = user.Email.toLowerCase().trim();
    const userRegisterSchema = joi.object({
      Email: joi.string().required().email(),
      password: joi.string().required().min(6),
      phone: joi.string().required().min(11).max(11),
    });
    const { error } = userRegisterSchema.validate(user);
    if (error) {
      let message = error.details[0].message.replace(/"/g, "");
      message = message[0] + message.slice(1);
      return setAlert({ type: "err", message: message, id: uuid() });
    }
    setLoading();
    const res = await axios.post("/api/user", user);
    removeLoading();
    setAlert({ type: "war", message: res.data.msg, id: uuid() });
    if (res.data.msg === "user saved") return true;
  };

  const userLogin = async (user) => {
    user.Email = user.Email.toLowerCase().trim();
    const userLoginSchema = joi.object({
      Email: joi.string().email().required(),
      password: joi.string().min(6).required(),
    });
    const { error } = userLoginSchema.validate(user);
    if (error) {
      let message = error.details[0].message.replace(/"/g, "");
      message = message[0] + message.slice(1);
      return setAlert({ type: "err", message: message, id: uuid() });
    }
    setLoading();
    const res = await axios.post("/api/user/login", user);
    removeLoading();
    if (res.data.token) {
      dsipatch({ type: SET_TOKEN, payload: res.data.token });
      history.push("/expenses");
    }
    setAlert({ type: res.data.type, message: res.data.msg, id: uuid() });
  };
  const resetPassword = async (Email) => {
    const emailSchema = joi.object({
      Email: joi.string().required().email(),
    });
    const { error } = emailSchema.validate({ Email });
    if (error) {
      let message = error.details[0].message.replace(/"/g, "");
      message = message[0] + message.slice(1);
      return setAlert({ type: "err", message: message, id: uuid() });
    }
    setLoading();
    Email = Email.toLowerCase();
    const res = await axios.post("/api/user/resetpassword", { Email });
    setAlert({ message: res.data.msg, type: res.data.type, id: uuid() });
    history.push("/");
    removeLoading();
  };
  const validateLink = async (id, token) => {
    setLoading();
    const check = await axios.get(`/api/user/resetpassword/${id}/${token}`);
    removeLoading();
    console.log(check.data);
    if (check.data.msg !== true) {
      setAlert({
        message: check.data.msg,
        type: check.data.type,
        id: uuid(),
      });
      return false;
    }
  };
  const changePass = async (state, id, token) => {
    const { password, password2 } = state;
    if (password !== password2)
      return setAlert({
        message: "Passwords Do Not Match",
        type: "err",
        id: uuid(),
      });
    const passwordSchema = joi.object({
      password: joi.string().min(6).max(255).required(),
      password2: joi.string().min(6).max(255).required(),
    });
    const { error } = passwordSchema.validate(state);
    if (error) {
      let message = error.details[0].message.replace(/"/g, "");
      message = message[0] + message.slice(1);
      return setAlert({
        message,
        type: "err",
        id: uuid(),
      });
    }
    setLoading();
    const res = await axios.post(`/api/user/resetpassword/${id}/${token}`, {
      password,
    });
    removeLoading();
    setAlert({ message: res.data.msg, type: res.data.type, id: uuid() });
    if (res.data.msg === "Password Updated") {
      history.push("/");
    }
  };
  const updateAccount = async (newUser) => {
    newUser.Email = newUser.Email.toLowerCase().trim();
    const userSchema1 = joi.object({
      Email: joi.string().email().required(),
      phone: joi.string().min(11).max(11).required(),
      password: joi.string().allow(""),
      password2: joi.string().allow(""),
      isEdit: joi.boolean(),
      isPasswordChange: joi.boolean(),
    });
    const userSchema2 = joi.object({
      Email: joi.string().email().required(),
      phone: joi.string().min(11).max(11).required(),
      password: joi.string().min(6).max(255).required(),
      password2: joi.string().min(6).max(255).required(),
      isEdit: joi.boolean(),
      isPasswordChange: joi.boolean(),
    });

    const { error } = !newUser.isPasswordChange
      ? userSchema1.validate(newUser)
      : userSchema2.validate(newUser);
    if (error) {
      let message = error.details[0].message.replace(/"/g, "");
      message = message[0] + message.slice(1);
      setAlert({
        message,
        type: "err",
        id: uuid(),
      });
      return false;
    }
    setLoading();
    const user = state.user;
    const res = await axios.put("/api/user", { user, newUser });
    setAlert({ message: res.data.msg, type: res.data.type, id: uuid() });
    removeLoading();
    return true;
  };
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        userRegister,
        userLogin,
        validateLink,
        resetPassword,
        changePass,
        getUserInfo,
        updateAccount,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
