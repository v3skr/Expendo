import React from "react";
import "./EditInput.css";

const EditInput = ({ name, onChange, value, type = "text" }) => {
  return (
    <input
      type={type}
      name={name}
      onChange={onChange}
      value={value}
      className="EditInput"
    />
  );
};

export default EditInput;
