import React, { useReducer } from "react";
import AlertContext from "./AlertContext";
import AlertReducer from "./AlertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../../types";

const AlertState = (props) => {
  const initalState = {
    Alerts: [],
  };
  const [state, dispatch] = useReducer(AlertReducer, initalState);

  const setAlert = (alert) => {
    dispatch({ type: SET_ALERT, payload: alert });
    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: alert.id }), 2500);
  };
  return (
    <AlertContext.Provider
      value={{
        Alerts: state.Alerts,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
