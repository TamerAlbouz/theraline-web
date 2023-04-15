import { Chart } from "primereact/chart";
import { useState } from "react";
import { basicOptions } from "./ChartOptions";

function YearlyStatistics() {
  const [basicData] = useState({
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Appointments",
        backgroundColor: "#429cfd",
        data: [68, 48, 40, 19, 86, 27, 81, 40, 19, 86, 27, 81],
      },
      {
        label: "Cancelled",
        backgroundColor: "#f66d83",
        data: [20, 16, 36, 24, 40, 10, 15, 36, 24, 40, 10, 15],
      },
    ],
  });

  return <Chart type="bar" data={basicData} options={basicOptions} />;
}

export default YearlyStatistics;
