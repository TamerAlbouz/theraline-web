import { Chart } from "primereact/chart";
import { useEffect, useState } from "react";
import { basicOptions } from "./ChartOptions";
import { useAppStatsQuery } from "../../../../hooks/queries/overview/useAppStatsQuery";

function YearlyStatistics() {
  const { data } = useAppStatsQuery();
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
        label: "Appointments",
        backgroundColor: "#429cfd",
        data: {},
      },
      {
        label: "Cancelled",
        backgroundColor: "#f66d83",
        data: {},
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
          label: "Appointments",
          backgroundColor: "#429cfd",
          data: data?.year.done,
        },
        {
          label: "Cancelled",
          backgroundColor: "#f66d83",
          data: data?.year.canceled,
        },
      ],
    });
  }, [data]);

  return <Chart type="bar" data={basicData} options={basicOptions} />;
}

export default YearlyStatistics;
