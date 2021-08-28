import React, { useContext } from "react";
import AlertItem from "./AlertItem";
import AlertContext from "../../../Context/AlertContext/AlertContext";
import "./Alerts.css";

const Alerts = () => {
  const alertContext = useContext(AlertContext);
  const { Alerts } = alertContext;
  return (
    <div className="Alerts">
      {Alerts.map((item, id) => (
        <AlertItem item={item} key={id} />
      ))}
    </div>
  );
};

export default Alerts;
