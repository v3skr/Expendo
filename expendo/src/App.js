import "./App.css";
import Navbar from "./Components/utils/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Expenses from "./Components/Expenses/Expenses";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {false ? (document.body.style.overflow = "hidden") : ""}
        {/* <div className="overlay"></div> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/expenses" component={Expenses} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
