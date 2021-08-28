import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ExpenseState from "./Context/ExpenseContext/ExpenseState";
import AuthState from "./Context/AuthContext/AuthState";

ReactDOM.render(
  <React.StrictMode>
    <AuthState>
      <ExpenseState>
        <App />
      </ExpenseState>
    </AuthState>
  </React.StrictMode>,
  document.getElementById("root")
);
