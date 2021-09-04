import React, { Fragment, useContext, useEffect } from "react";
import "./Expenses.css";
import ExpenseList from "./ExpenseList";
import Footer from "../Footer/Footer";
import Loading from "../utils/Loading";
import ExpenseContext from "../../Context/ExpenseContext/ExpenseContext";

const Expenses = () => {
  const expenseContext = useContext(ExpenseContext);
  const { expenses, loadExpenses, loading } = expenseContext;
  useEffect(() => {
    async function call() {
      await loadExpenses();
    }
    call();
    //eslint-disable-next-line
  }, []);
  return (
    <div className="expenses-con">
      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          <div className="expenses">
            {expenses.length > 0 && (
              <h1 className="main-title">Your Expenses</h1>
            )}
            <ExpenseList style={{ overflow: "hidden" }} />
          </div>
        </Fragment>
      )}
      <Footer />
    </div>
  );
};

export default Expenses;
