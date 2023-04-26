import { Chart } from "primereact/chart";
import { useEffect, useState } from "react";
import { useMPSQuery } from "../../../../hooks/queries/payment-info/useMPSQuery";

function PaymentStatistics() {
  const { data } = useMPSQuery();
  const [basicData, setBasicData] = useState({
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

  useEffect(() => {
    setBasicData({
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
          // eslint-disable-next-line no-unneeded-ternary
          data: data ? data : "",
        },
      ],
    });
  }, [data]);

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
        grace: "5%",
        min: 0,
        ticks: {
          stepSize: 1,
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
        <Chart type="bar" data={basicData} options={basicOptions} />
      </div>
    </div>
  );
}

export default PaymentStatistics;
