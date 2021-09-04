import React, { useEffect } from "react";
import "./SummeryCard.css";
const SummeryCard = () => {
  useEffect(() => {
    const date1 = new Date("2021-09-02");
    const date2 = new Date("2021-08-02");
    const range = date1.getTime() - date2.getTime();
    console.log(range / (1000 * 3600 * 24));
  }, []);
  return (
    <div className="summery-card-con">
      <div className="summery-card">
        <h2 className="title">Your Summery</h2>
        <div className="summery-info">
          <h3>Total Spent Last Mounth:</h3>
          <h3>
            Amount : <span style={{ color: "springgreen" }}>£200</span>{" "}
          </h3>
        </div>
        <div className="summery-info">
          <h3>Total Spent Since: 1st september</h3>
          <h3>
            Amount : <span style={{ color: "springgreen" }}>£57</span>{" "}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SummeryCard;
