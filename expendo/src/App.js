import "./App.css";
import { Fragment, useContext } from "react";
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

function App() {
  const expenseContext = useContext(ExpenseContext);
  const { isAdd } = expenseContext;
  const alertContext = useContext(AlertContext);
  const { Alerts } = alertContext;
  return (
      <div className="App">
        <Navbar />
        {isAdd
          ? (document.body.style.overflow = "hidden")
          : (document.body.style.overflow = "auto")}
        <Fragment>
          <Overlay />
          <div>
            <AddExpense />
          </div>
        </Fragment>
        {Alerts.length > 0 && <Alert />}
        <Switch>
          <AuthState>
            <Route exact path="/" component={Home} />
            <Route exact path="/expenses" component={Expenses} />
          </AuthState>
        </Switch>
      </div>
  );
}

export default App;
