import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { BiCheck } from "react-icons/bi";
import { HiFilter, HiPrinter } from "react-icons/hi";
import {
  MdArrowBackIos,
  MdArrowForwardIos,
  MdKeyboardArrowDown,
} from "react-icons/md";
import HeaderButton from "./HeaderButton";

const yearlyFilters = [
  { id: 1, name: "Aug 2019" },
  { id: 2, name: "Sep 2019" },
  { id: 3, name: "Oct 2019" },
  { id: 4, name: "Nov 2019" },
  { id: 5, name: "Dec 2019" },
];

function PaymentsListHeader() {
  const [selectedYear, setSelectedYear] = useState(yearlyFilters[0]);

  return (
    <div className="mb-9 flex w-full flex-col flex-wrap items-center justify-between border-b border-solid pb-4 lg:flex-row">
      <div className="flex items-center justify-center gap-1 text-lg font-semibold text-white">
        <button className="h-12 rounded-md border-2 border-solid border-white bg-primary-dark px-3">
          <MdArrowBackIos className="ml-2" />
        </button>
        <div className="flex-none">
          <Listbox value={selectedYear} onChange={setSelectedYear}>
            <Listbox.Button className="relative flex h-12 w-52 items-center justify-center gap-1 rounded-md border-2 border-solid border-white bg-primary-dark text-center">
              {selectedYear.name}
              <MdKeyboardArrowDown className="text-2xl" />
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-52 overflow-auto rounded-md bg-primary py-1 text-center text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {yearlyFilters.map((year) => (
                  <Listbox.Option
                    key={year.id}
                    value={year}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 ${
                        active ? "bg-white text-primary" : "text-white"
                      }`
                    }
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {year.name}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                            <BiCheck className="h-7 w-7" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </Listbox>
        </div>
        <button className="h-12 rounded-md border-2 border-solid border-white bg-primary-dark px-4">
          <MdArrowForwardIos />
        </button>
      </div>
      <div className="flex flex-row">
        <HeaderButton
          label={null}
          icon={HiPrinter}
          handleClick={() => console.log("Print")}
        />
        <HeaderButton
          label="Filter"
          icon={HiFilter}
          handleClick={() => console.log("Filter")}
        />
      </div>
    </div>
  );
}

export default PaymentsListHeader;
