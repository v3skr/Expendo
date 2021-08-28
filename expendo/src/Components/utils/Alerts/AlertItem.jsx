import React from "react";
import "../Alerts/Alerts.css";

const AlertItem = ({ item: { type, message } }) => {
  let style = {};
  if (type === "err") style = { color: "white", background: "red" };
  else if (type === "info")
    style = { color: "#fff", background: "springgreen" };
  else if (type === "war") style = { color: "#000", background: "yellow" };
  return (
    <div style={style} className="alert-item">
      <h1>{message}</h1>
    </div>
  );
};

export default AlertItem;
