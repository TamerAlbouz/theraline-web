import { Chart } from "primereact/chart";
import { useEffect, useState } from "react";
import { basicOptions } from "./ChartOptions";
import { useAppStatsQuery } from "../../../../hooks/queries/overview/useAppStatsQuery";

function WeeklyStatistics() {
  const { data } = useAppStatsQuery();
  const [basicData, setBasicData] = useState({
    labels: [
      "Saturday",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thurday",
      "Friday",
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
      labels: data?.week.label,
      datasets: [
        {
          label: "Appointments",
          backgroundColor: "#429cfd",
          data: data?.week.done,
        },
        {
          label: "Cancelled",
          backgroundColor: "#f66d83",
          data: data?.week.cancelled,
        },
      ],
    });
  }, [data]);

  return <Chart type="bar" data={basicData} options={basicOptions} />;
}

export default WeeklyStatistics;
