import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Combobox, Transition } from "@headlessui/react";
import { HiChevronUpDown } from "react-icons/hi2";
import { Fragment, useEffect, useState } from "react";
import { HiCheck } from "react-icons/hi";
import usePatientsQuery, {
  Patient,
} from "../../../hooks/queries/usePatientsQuery";
import { useCreateAppointmentMutation } from "../../../hooks/mutations/useCreateAppointmentMutation";

const newEventSchema = z.object({
  title: z.string(),
  patient_id: z.string(),
  startDate: z.string(),
  startTime: z.string(),
  endDate: z.string(),
  endTime: z.string(),
});

type NewEventValues = z.infer<typeof newEventSchema>;

function NewEventModalContent(props: { closeModalCallback: Function }) {
  const { data } = usePatientsQuery();
  const { mutate: createAppointment } = useCreateAppointmentMutation();
  const [users, setUsers] = useState<Patient[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<Patient[]>([]);
  const [query, setQuery] = useState("");
  const { closeModalCallback } = props;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<NewEventValues>({
    resolver: zodResolver(newEventSchema),
  });

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data]);

  const submitUserInfo = async (result: NewEventValues) => {
    console.log(result);
    // eslint-disable-next-line prefer-template
    const startDate = new Date(result.startDate + "T" + result.startTime);
    // eslint-disable-next-line prefer-template
    const endDate = new Date(result.endDate + "T" + result.endTime);

    createAppointment({
      title: result.title,
      // eslint-disable-next-line no-underscore-dangle
      patient_id: selectedUsers[0]._id,
      start_date: startDate.toISOString().slice(0, -5),
      end_date: endDate.toISOString().slice(0, -5),
    });

    closeModalCallback();
  };

  const filteredUsers =
    query === ""
      ? users
      : users.filter((user) =>
          `${user.firstName} ${user.lastName}`
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, "")),
        );

  return (
    <form onSubmit={handleSubmit(submitUserInfo)}>
      <div>
        <div className="my-4">
          <input
            {...register("title", {
              required: { value: true, message: "This field is required" },
            })}
            id="event-title"
            type="text"
            placeholder="Title"
            className="focus:shadow-outline block w-full appearance-none rounded-md border py-2 px-3 leading-tight text-primary-dark shadow focus:outline-none"
          />
          <span className="text-xs text-red-500">{errors.title?.message}</span>
        </div>

        <span>Users</span>
        <Combobox
          value={selectedUsers}
          onChange={(change: any) => {
            setSelectedUsers([...change]);
          }}
          multiple
          defaultValue={[]}>
          <div className="relative mt-1 mb-4">
            <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
              <Combobox.Input
                className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                displayValue={(patients: Patient[]) =>
                  patients.map((user) => user.firstName).join(", ")
                }
                onChange={(event) => setQuery(event.target.value)}
              />
              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                <HiChevronUpDown
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Combobox.Button>
            </div>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery("")}>
              <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {filteredUsers.length === 0 && query !== "" ? (
                  <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                    Nothing found.
                  </div>
                ) : (
                  filteredUsers.map((user) => (
                    <Combobox.Option
                      // eslint-disable-next-line no-underscore-dangle
                      key={user._id}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? "bg-secondary text-white" : "text-primary"
                        }`
                      }
                      value={user}>
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}>
                            {`${user.firstName} ${user.lastName}`}
                          </span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? "text-white" : "text-secondary"
                              }`}>
                              <HiCheck className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>

        <div className="mb-4 flex flex-row">
          <div className="mr-4">
            <label
              htmlFor="event-startDate"
              className="text-md mb-2 block font-bold">
              Start Date
              <input
                {...register("startDate", {
                  required: { value: true, message: "This field is required" },
                })}
                id="event-startDate"
                type="date"
                onChange={(e) => {
                  setValue("endDate", e.currentTarget.value);
                }}
                className="focus:shadow-outline block w-full appearance-none rounded-md border py-2 px-3 leading-tight text-primary-dark shadow focus:outline-none"
              />
            </label>
            <span className="text-xs text-red-500">
              {errors.startDate?.message}
            </span>
          </div>

          <div>
            <label
              htmlFor="event-startTime"
              className="text-md mb-2 block font-bold">
              Start Time
              <input
                {...register("startTime", {
                  required: { value: true, message: "This field is required" },
                })}
                id="event-startTime"
                type="time"
                min="00:00"
                max="23:59"
                className="focus:shadow-outline block w-full appearance-none rounded-md border py-2 px-3 leading-tight text-primary-dark shadow focus:outline-none"
              />
            </label>
            <span className="text-xs text-red-500">
              {errors.startTime?.message}
            </span>
          </div>
        </div>

        <div className="mb-4 flex flex-row">
          <div className="mb-4 mr-4">
            <label
              htmlFor="event-endDate"
              className="text-md mb-2 block font-bold">
              End Date
              <input
                {...register("endDate", {
                  required: { value: true, message: "This field is required" },
                })}
                onChange={(e) => {
                  setValue("startDate", e.currentTarget.value);
                }}
                id="event-endDate"
                type="date"
                className="focus:shadow-outline block w-full appearance-none rounded-md border py-2 px-3 leading-tight text-primary-dark shadow focus:outline-none"
              />{" "}
            </label>
            <span className="text-xs text-red-500">
              {errors.endDate?.message}
            </span>
          </div>

          <div>
            <label
              htmlFor="event-endTime"
              className="text-md mb-2 block font-bold">
              End Time
              <input
                {...register("endTime", {
                  required: { value: true, message: "This field is required" },
                })}
                id="event-endTime"
                type="time"
                onChange={(e) => console.log(e)}
                min="00:00"
                max="23:59"
                className="focus:shadow-outline block w-full appearance-none rounded-md border py-2 px-3 leading-tight text-primary-dark shadow focus:outline-none"
              />
            </label>
            <span className="text-xs text-red-500">
              {errors.endTime?.message}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <input
          type="submit"
          value="Save"
          className="focus:shadow-outline cursor-pointer rounded-lg bg-primary py-2 px-4 font-bold text-textColor hover:bg-primary-dark focus:outline-none"
        />
      </div>
    </form>
  );
}

export default NewEventModalContent;
