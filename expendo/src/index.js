import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ExpenseState from "./Context/ExpenseContext/ExpenseState";

ReactDOM.render(
  <React.StrictMode>
    <ExpenseState>
      <App />
    </ExpenseState>
  </React.StrictMode>,
  document.getElementById("root")
);
