import React from "react";
import "./Home.css";
import LoginCard from "../Logincard/LoginCard";
import SignUpCard from "../SignUpCard/SignUpCard";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
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
