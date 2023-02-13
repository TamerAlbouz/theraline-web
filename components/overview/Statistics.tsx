import { Chart } from "primereact/chart";
import { useState } from "react";

function Statistics() {
  const lastName = "Doe";

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

  const sortBy = [
    { id: 1, name: "Yearly" },
    { id: 2, name: "Monthly" },
    { id: 3, name: "Weekly" },
  ];

  return (
    <div className="flex w-full flex-col gap-4 rounded-sm bg-primary-dark p-5">
      {/* <Tab.Group>
        <Tab.List>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </Tab.List>
        {
          <Tab.Panels>
            <Tab.Panel>content 1</Tab.Panel>
            <Tab.Panel>content 2</Tab.Panel>
            <Tab.Panel>content 3</Tab.Panel>
          </Tab.Panels>
        }
      </Tab.Group> */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-white">
          Good Morning, Dr. {lastName}
        </h1>
        <div className="flex flex-row gap-2 rounded-md bg-primary px-1 py-1 text-lg font-semibold text-primary-dark">
          {sortBy.map((item) => (
            <div
              key={item.id}
              className="cursor-pointer rounded-md bg-white px-3 py-1 hover:bg-primary-dark hover:text-white"
            >
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="text-white">
        <Chart type="bar" data={basicData} options={basicOptions} />
      </div>
    </div>
  );
}

export default Statistics;
