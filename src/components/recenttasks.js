import React from "react";
import data from "./constants/data";
import "./recenttasks.css";
import Progressbar from "./progressbar";
// import ProgressBar from "../progressbar/ProgressBar";

const Recenttasks = () => {
  return (
    <ul className="recent-div">
      <div>Recent Tasks</div>
      {data.revenueByChannel.map((item, index) => (
        <li key={`revenue-${index}`} className="skill-list">
          <div className="skill-name">
            {item.title}
            <span
              className={`${item.value} < 50 ? "txt-success" : "txt-danger"}`}
            >
              {item.value}%
            </span>
          </div>
          <Progressbar value={item.value} />
        </li>
      ))}
    </ul>
  );
};

export default Recenttasks;
