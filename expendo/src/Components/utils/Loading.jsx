import React from "react";
import loading from "./logo.gif";
import "../../App.css";

const Loading = () => {
  return (
    <div className="loading">
      <img src={loading} alt="Loading..." />
    </div>
  );
};

export default Loading;
