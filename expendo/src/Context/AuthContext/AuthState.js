import React, { useReducer, useContext } from "react";
import AlertContext from "../AlertContext/AlertContext";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import joi from "@hapi/joi";
import { v4 as uuid } from "uuid";
import { SET_TOKEN } from "../../types";
import axios from "axios";

const AuthState = (props) => {
  const initalState = {
    user: null,
  };
  const [state, dsipatch] = useReducer(AuthReducer, initalState);
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const userRegister = async (user) => {
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
    const res = await axios.post("/api/user", { user });
    setAlert({ type: "war", message: res.data.msg, id: uuid() });
    if (res.data.msg === "user saved") return true;
  };

  const userLogin = async (user) => {
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
    const res = await axios.post("/api/user/login", { user });
    setAlert({ type: res.data.type, message: res.data.msg, id: uuid() });
    dsipatch({ type: SET_TOKEN, payload: res.data.token });
  };
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        userRegister,
        userLogin,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
