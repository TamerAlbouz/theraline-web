import { Chart } from "primereact/chart";
import { useState } from "react";

function PaymentStatistics() {
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
        label: "Payments",
        backgroundColor: "#429cfd",
        data: [38, 48, 40, 19, 12, 27, 22, 40, 19, 46, 27, 18],
      },
    ],
  });

  const basicOptions = {
    maintainAspectRatio: false,
    aspectRatio: 1.25,

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

  return (
    <div className="flex w-full flex-col gap-4 rounded-sm bg-primary-dark p-5">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold text-textColor">Statistics</h1>
      </div>
      <div className="text-textColor">
        {/* eslint-disable-next-line react/self-closing-comp */}
        <Chart type="bar" data={basicData} options={basicOptions}></Chart>
      </div>
    </div>
  );
}

export default PaymentStatistics;
