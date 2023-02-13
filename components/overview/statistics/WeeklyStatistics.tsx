import { Chart } from "primereact/chart";
import { useState } from "react";
import Tabs from "../Tab";

function WeeklyStatistics() {
  const [basicData] = useState({
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
    datasets: [
      {
        label: "Appointments",
        backgroundColor: "#429cfd",
        data: [68, 48, 40, 19, 86, 27, 81],
      },
      {
        label: "Cancelled",
        backgroundColor: "#f66d83",
        data: [20, 16, 36, 24, 40, 10, 15],
      },
    ],
  });

  let basicOptions = {
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
      legend: {
        labels: {
          color: "#fff",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#fff",
        },
        grid: {
          color: "#303030",
        },
      },
      y: {
        ticks: {
          color: "#fff",
        },
        grid: {
          color: "#303030",
        },
      },
    },
  };

  return <Chart type="bar" data={basicData} options={basicOptions} />;
}

export default WeeklyStatistics;
