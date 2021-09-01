import React, { useContext, useEffect } from "react";
import "./Home.css";
import Loading from "../utils/Loading";
import ExpenseContext from "../../Context/ExpenseContext/ExpenseContext";
import LoginCard from "../Logincard/LoginCard";
import SignUpCard from "../SignUpCard/SignUpCard";
import Footer from "../Footer/Footer";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  useEffect(() => {
    if (localStorage.token) history.push("/expenses");
  });
  const expenseContext = useContext(ExpenseContext);
  const { loading } = expenseContext;
  return loading ? (
    <Loading />
  ) : (
    <div className="home">
      <header className="header">
        <h1>Track All Your Expenses In a Few Clickes</h1>
      </header>
      <div className="card-con">
        <LoginCard />
        <SignUpCard />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
