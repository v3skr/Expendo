import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <h1>EXPENDO</h1>
      <div className="links-con">
        <i className="fas fa-plus" style={{ zoom: 2 }}></i>
      </div>
    </div>
  );
};

export default Navbar;
