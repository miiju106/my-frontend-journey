import React from "react";
import "./summaryskill.css";
import colors from "./constants/colors";
import BoxContainer from "./boxContainer";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Summaryskill = ({ item }) => {
  // console.log(item.title)
  // console.log(item.value)
  return (
    <BoxContainer>
      <div className="main-subBox">
        <div className="subBox-title">
          <div className="stack">{item.title}</div>
          <div className="stack-name">{item.value}</div>
        </div>
        <div className="summary-box__chart">
          <CircularProgressbarWithChildren
            value={item.percent}
            strokeWidth={10}
            styles={buildStyles({
              pathColor: item.percent < 50 ? colors.red : colors.purple,
              trailColor: "transparent",
              strokeLinecap: "round",
            })}
          >
            <div className="summary-box__chart__value">{item.percent}%</div>
          </CircularProgressbarWithChildren>
        </div>
      </div>
    </BoxContainer>
  );
};

export default Summaryskill;

export const SummaryBoxSkill = ({ item }) => {
  const chartOptions = {
    responsive: true,
    scales: {
      xAxis: {
        display: false,
      },
      yAxis: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  const chartData = {
    labels: item.chartData.labels,
    datasets: [
      {
        label: "Revenue",
        data: item.chartData.data,
        borderColor: "#fff",
        tension: 0.5,
      },
    ],
  };
  return (
    <div className="fullheight">
      <div className="summary-box-special">
        <div className="summary-box-special__title">{item.title}</div>
        <div className="summary-box-special__value">{item.value}</div>
        <div className="summary-box-special__chart">
          <Line options={chartOptions} data={chartData} width={`250px`} />
        </div>
      </div>
    </div>
  );
};
