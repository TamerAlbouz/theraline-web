import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiChevronDown } from "react-icons/hi";

// sortMethod could be an enum
// body would detect the method, compare, and filter based on it
const sortOptions = [
  { id: 0, label: "Last appointment", sortMethod: "asc-appt" },
  { id: 1, label: "Next Appointement", sortMethod: "dsc-appt" },
  { id: 2, label: "Last Name", sortMethod: "asc-name" },
  { id: 3, label: "First Name", sortMethod: "dsc-name" },
];

const PatientSort = () => {
  const [selectedOption, setSelectedOption] = useState(sortOptions[0]);

  return (
    <div className="flex flex-row items-center">
      <div className="text-sm font-bold text-white">Sort by</div>

      <div className="ml-4 w-48">
        <Listbox value={selectedOption} onChange={setSelectedOption}>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-primary-dark py-2 pl-3 pr-10 text-left text-white shadow-md focus:outline-none focus-visible:border-tertiary focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-tertiary sm:text-sm">
              <span className="block truncate text-sm font-semibold">
                {selectedOption.label}
              </span>{" "}
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <HiChevronDown
                  className="h-5 w-5 text-white"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-primary py-1 text-base shadow-lg ring-1 ring-primary-dark ring-opacity-5 focus:outline-none sm:text-sm">
                {sortOptions.map((option, optionIndex) => (
                  <Listbox.Option
                    key={optionIndex}
                    className={({ active }) =>
                      `relative cursor-pointer select-none py-2 pl-10 pr-4 text-white ${
                        active ? " bg-secondary" : "text-primary-dark"
                      }`
                    }
                    value={option}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected
                              ? "font-medium text-tertiary"
                              : "font-normal"
                          }`}
                        >
                          {option.label}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
      {/* <Listbox value={selectedOption} onChange={setSelectedOption}>
        <Listbox.Button>{selectedOption.label}</Listbox.Button>
        <Listbox.Options>
          {sortOptions.map((sortOption) => (
            <Listbox.Option key={sortOption.id} value={sortOption}>
              {sortOption.label}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox> */}
    </div>
  );
};

export default PatientSort;
