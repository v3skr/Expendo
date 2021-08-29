import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ExpenseState from "./Context/ExpenseContext/ExpenseState";
import AlertState from "./Context/AlertContext/AlertState";

ReactDOM.render(
  <React.StrictMode>
    <AlertState>
        <ExpenseState>
          <App />
        </ExpenseState>
    </AlertState>
  </React.StrictMode>,
  document.getElementById("root")
);
