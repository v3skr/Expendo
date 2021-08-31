import React, { useContext } from "react";
import ExpenseContext from "../../Context/ExpenseContext/ExpenseContext";
import "./Prompt.css";

const Prompt = () => {
  const expenseContext = useContext(ExpenseContext);
  const { res, type, togglePrompt, setType, prompt, setPayload } =
    expenseContext;
  const onClick = () => {
    togglePrompt(false);
    setPayload({});
    setType(null);
  };
  return (
    <div className="propmt-con">
      <div className="propmt">
        <i className="fas fa-exclamation-circle fa-7x"></i>
        <h1>{prompt}</h1>
        <div className="btn-con">
          <button className="btn" onClick={() => res(type)}>
            yes
          </button>
          <button className="btn" onClick={onClick}>
            no
          </button>
        </div>
      </div>
    </div>
  );
};

export default Prompt;
