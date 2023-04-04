import { Tab } from "@headlessui/react";
import { useState } from "react";
import MonthlyStatistics from "../statistics/MonthlyStatistics";
import WeeklyStatistics from "../statistics/WeeklyStatistics";
import YearlyStatistics from "../statistics/YearlyStatistics";

function TabStatistics() {
  const lastName = "Doe";

  const dynamicTabs = ["Weekly", "Monthly", "Yearly"].map((tab, i) => {
    return (
      <Tab key={i} className="focus:outline-none">
        {({ selected }) => (
          <div
            className={`${
              selected
                ? "bg-white text-primary-dark focus:outline-none"
                : "transition ease-in-out hover:bg-secondary"
            } rounded-md px-3 py-1 text-lg`}>
            {tab}
          </div>
        )}
      </Tab>
    );
  });

  return (
    <Tab.Group
      as="div"
      defaultIndex={0}
      className="flex h-118.75 w-full flex-col gap-2 rounded-md bg-primary-dark p-5">
      <div className="flex items-center justify-between text-textColor">
        <h1 className="text-2xl font-semibold ">
          Good Morning, Dr. {lastName}
        </h1>
        <Tab.List className="flex gap-3 rounded-md bg-primary p-2 font-semibold">
          {dynamicTabs}
        </Tab.List>
      </div>
      <Tab.Panels>
        <Tab.Panel unmount={false}>
          <WeeklyStatistics />
        </Tab.Panel>
        <Tab.Panel>
          <MonthlyStatistics />
        </Tab.Panel>
        <Tab.Panel>
          <YearlyStatistics />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}

export default TabStatistics;
