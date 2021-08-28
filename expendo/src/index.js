import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ExpenseState from "./Context/ExpenseContext/ExpenseState";
import AuthState from "./Context/AuthContext/AuthState";
import AlertState from "./Context/AlertContext/AlertState";

ReactDOM.render(
  <React.StrictMode>
    <AlertState>
      <AuthState>
        <ExpenseState>
          <App />
        </ExpenseState>
      </AuthState>
    </AlertState>
  </React.StrictMode>,
  document.getElementById("root")
);
