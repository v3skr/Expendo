import React, { useReducer, useContext } from "react";
import AlertContext from "../AlertContext/AlertContext";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import joi from "@hapi/joi";
import { v4 as uuid } from "uuid";
import {} from "../../types";

const AuthState = (props) => {
  const initalState = {};
  const [state, dsipatch] = useReducer(AuthReducer, initalState);
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const userRegister = (user) => {
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
  };

  const userLogin = (user) => {
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
  };
  return (
    <AuthContext.Provider
      value={{
        userRegister,
        userLogin,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
