import "./App.css";
import React, { Fragment, useContext } from "react";
import Navbar from "./Components/utils/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Expenses from "./Components/Expenses/Expenses";
import { Switch, Route } from "react-router-dom";
import ExpenseContext from "./Context/ExpenseContext/ExpenseContext";
import AlertContext from "./Context/AlertContext/AlertContext";
import Overlay from "./Components/utils/Overlay";
import Alert from "./Components/utils/Alerts/Alerts";
import AuthState from "./Context/AuthContext/AuthState";
import AddExpense from "./Components/Expenses/AddExpense";
import Prompt from "./Components/Prompt/Prompt";
import PasswordReset from "./Components/PasswordReset/PasswordReset";
import NewPassword from "./Components/NewPassword/NewPassword";
import UserAccount from "./Components/UserAccount/UserAccount";

function App() {
  const expenseContext = useContext(ExpenseContext);
  const { isShown, isPropmt } = expenseContext;
  const alertContext = useContext(AlertContext);
  const { Alerts } = alertContext;
  return (
    <div className="App">
      <Navbar />
      {isShown
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "auto")}
      <Fragment>
        <Overlay />
        <div>
          {isPropmt && <Prompt />}
          <AddExpense />
        </div>
      </Fragment>
      {Alerts.length > 0 && <Alert />}
      <Switch>
        <AuthState>
          <Route exact path="/" component={Home} />
          <Route exact path="/expenses" component={Expenses} />
          <Route exact path="/user/passwordreset" component={PasswordReset} />
          <Route
            exact
            path="/api/user/resetpassword/:id/:token"
            component={NewPassword}
          />
          <Route exact path="/user/account" component={UserAccount} />
        </AuthState>
      </Switch>
    </div>
  );
}

export default App;
