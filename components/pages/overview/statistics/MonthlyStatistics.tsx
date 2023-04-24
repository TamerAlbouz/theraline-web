import { Chart } from "primereact/chart";
import { useEffect, useState } from "react";
import { basicOptions } from "./ChartOptions";
import { useAppStatsQuery } from "../../../../hooks/queries/overview/useAppStatsQuery";

function MonthlyStatistics() {
  const { data } = useAppStatsQuery();
  const [basicData, setBasicData] = useState({
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
          data: data?.month.done,
        },
        {
          label: "Cancelled",
          backgroundColor: "#f66d83",
          data: data?.month.canceled,
        },
      ],
    });
  }, [data]);

  return <Chart type="bar" data={basicData} options={basicOptions} />;
}

export default MonthlyStatistics;
