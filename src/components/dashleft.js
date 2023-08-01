import React from "react";
import data from "./constants/data";
import colors from "./constants/colors";
import "./dashleft.css";
// import BoxContainer from "./boxContainer";
import Summaryskill, { SummaryBoxSkill } from "./summaryskill";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashleft = () => {
  return (
    <div className="dash-left">
      <div className="firstDiv-dashleft">
        <div className="summary-div">
          {data.summary.map((item, index) => (
            <div key={`summary-${index}`} className="summary-cont">
              <Summaryskill item={item} />
            </div>
          ))}
        </div>
        <div className="perform-div">
          <SummaryBoxSkill item={data.revenueSummary} />
        </div>
      </div>

      <div className="secondDiv-dashleft">
        <div className="secondSubDiv">
          <Review />{" "}
        </div>
      </div>
    </div>
  );
};

export default Dashleft;

const Review = () => {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      yAxes: {
        ticks: {
          min: 0,
          max: 5,
          stepSize: 0.5,
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    elements: {
      bar: {
        backgroundColor: colors.orange,
        borderRadius: 20,
        borderSkipped: "bottom",
      },
    },
  };

  const chartData = {
    labels: data.reviewByMonths.labels,
    datasets: [
      {
        label: "Revenue",
        data: data.reviewByMonths.data,
      },
    ],
  };
  return (
    <>
      <div className="title-review">Review by months</div>
      <div>
        <Bar options={chartOptions} data={chartData} height={`300px`} />
      </div>
    </>
  );
};
