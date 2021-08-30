import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ExpenseState from "./Context/ExpenseContext/ExpenseState";
import AlertState from "./Context/AlertContext/AlertState";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AlertState>
        <ExpenseState>
          <App />
        </ExpenseState>
      </AlertState>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
