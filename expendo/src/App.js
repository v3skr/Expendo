import "./App.css";
import { useContext } from "react";
import Navbar from "./Components/utils/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Expenses from "./Components/Expenses/Expenses";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ExpenseContext from "./Context/ExpenseContext/ExpenseContext";
import Overlay from "./Components/utils/Overlay";

function App() {
  const expenseContext = useContext(ExpenseContext);
  const { isAdd } = expenseContext;
  return (
    <div className="App">
      <Router>
        <Navbar />
        {isAdd
          ? (document.body.style.overflow = "hidden")
          : (document.body.style.overflow = "auto")}
        <Overlay />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/expenses" component={Expenses} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
