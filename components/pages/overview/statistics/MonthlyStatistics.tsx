import { Chart } from "primereact/chart";
import { useState } from "react";
import { basicOptions } from "./ChartOptions";

function MonthlyStatistics() {
  const [basicData] = useState({
    labels: [
      "Day 1",
      "Day 2",
      "Day 3",
      "Day 4",
      "Day 5",
      "Day 6",
      "Day 7",
      "Day 8",
      "Day 9",
      "Day 10",
      "Day 11",
      "Day 12",
      "Day 13",
      "Day 14",
      "Day 15",
      "Day 16",
      "Day 17",
      "Day 18",
      "Day 19",
      "Day 20",
      "Day 21",
      "Day 22",
      "Day 23",
      "Day 24",
      "Day 25",
      "Day 26",
      "Day 27",
      "Day 28",
      "Day 29",
      "Day 30",
      "Day 31",
    ],
    datasets: [
      {
        label: "Appointments",
        backgroundColor: "#429cfd",
        data: [
          68, 48, 40, 19, 86, 27, 81, 40, 19, 86, 27, 81, 68, 48, 40, 19, 86,
          27, 81, 40, 19, 86, 27, 81, 68, 48, 40, 19, 86, 27, 81,
        ],
      },
      {
        label: "Cancelled",
        backgroundColor: "#f66d83",
        data: [
          20, 16, 36, 24, 40, 10, 15, 36, 24, 40, 10, 15, 20, 16, 36, 24, 40,
          10, 15, 36, 24, 40, 10, 15, 20, 16, 36, 24, 40, 10, 15,
        ],
      },
    ],
  });

  return <Chart type="bar" data={basicData} options={basicOptions} />;
}

export default MonthlyStatistics;
