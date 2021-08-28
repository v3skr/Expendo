import React, { useReducer } from "react";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import {} from "../../types";

const AuthState = (props) => {
  const initalState = {
  };
  const [state, dsipatch] = useReducer(AuthReducer, initalState);
  return (
    <AuthContext.Provider value={{}}>{props.children}</AuthContext.Provider>
  );
};

export default AuthState;
