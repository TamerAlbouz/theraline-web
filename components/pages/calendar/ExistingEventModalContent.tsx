import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCancelAppointmentMutation } from "../../../hooks/mutations/useCancelAppointmentMutation";
import { useCalendarStore } from "../../../hooks/stores/useCalendarStore";
import { format } from "date-fns";
import { HiCheck, HiChevronUpDown } from "react-icons/hi2";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { useCompleteAppointmentMutation } from "../../../hooks/mutations/useCompleteAppointmentMutation";

const paymentInfoSchema = z.object({
  amount: z.string(),
});

type PaymentInfoValues = z.infer<typeof paymentInfoSchema>;

const paymentOptions = [
  { title: "Credit Card", value: "CREDIT CARD" },
  { title: "Cash", value: "CASH" },
  { title: "Check", value: "CHECK" },
];

const paymentStatus = [
  { title: "Pending", value: "PENDING" },
  { title: "Awaiting", value: "AWAITING" },
  { title: "Paid", value: "PAID" },
];

const getStatusClassName = (status: string) => {
  switch (status) {
    case "CANCELED":
      return "text-red-400";

    case "CONFIRMED":
      return "text-yellow-400";

    case "DONE":
      return "text-green-400";

    default:
      return "text-tertiary";
  }
};

function ExistingEventModalContent(props: { closeModalCallback: Function }) {
  const [selectedOption, setSelectedOption] = useState(paymentOptions[0]);
  const [selectedStatus, setSelectedStatus] = useState(paymentStatus[0]);
  const { selectedEvent } = useCalendarStore();
  const { mutate: cancelAppointment } = useCancelAppointmentMutation();
  const { mutate: completeAppointment } = useCompleteAppointmentMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentInfoValues>({
    resolver: zodResolver(paymentInfoSchema),
  });

  const submitPaymentInfo = (data: PaymentInfoValues) => {
    console.log(data);

    completeAppointment({
      appointmentId: selectedEvent!.id,
      amount: parseInt(data.amount),
      method: selectedOption.title,
    });

    props.closeModalCallback();
  };

  return (
    <div className="relative flex flex-col">
      <div className="mt-4 items-start">
        {selectedEvent?.start && (
          <div className="flex flex-row">
            <span className="mr-8">Start:</span>

            {format(new Date(selectedEvent!.start.toString()), "PPp")}
          </div>
        )}

        {selectedEvent?.end && (
          <div className="mt-4 flex flex-row">
            <span className="mr-8">End:</span>

            {format(new Date(selectedEvent!.end.toString()), "PPp")}
          </div>
        )}

        {selectedEvent?.status && (
          <div className="mt-4 flex flex-row">
            <span className="mr-8">Status:</span>

            <span
              className={`${getStatusClassName(
                selectedEvent.status,
              )} font-bold`}>
              {selectedEvent.status}
            </span>
          </div>
        )}

        {selectedEvent?.status == "CONFIRMED" && (
          <form onSubmit={handleSubmit(submitPaymentInfo)} className="mt-4">
            <input
              {...register("amount", {
                required: { value: true, message: "This field is required" },
              })}
              id="event-amount"
              type="text"
              placeholder="Amount"
              className="focus:shadow-outline block w-full appearance-none rounded-md border py-2 px-3 leading-tight text-primary-dark shadow focus:outline-none"
            />{" "}
            <span className="text-base text-red-600">
              {errors.amount?.message}
            </span>
            <div className="mt-4 w-72">
              <Listbox value={selectedOption} onChange={setSelectedOption}>
                <div className="relative z-50 mt-1">
                  <Listbox.Button className="relative z-50 w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                    <span className="block truncate">
                      {selectedOption.title}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <HiChevronUpDown
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0">
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {paymentOptions.map((paymentOption, optionIndex) => (
                        <Listbox.Option
                          key={optionIndex}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? "bg-green-100 text-green-900"
                                : "text-gray-900"
                            }`
                          }
                          value={paymentOption}>
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}>
                                {paymentOption.title}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                  <HiCheck
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>{" "}
            <div className="mt-4 w-72">
              <Listbox value={selectedStatus} onChange={setSelectedStatus}>
                <div className="relative mt-1">
                  <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                    <span className="block truncate">
                      {selectedStatus.title}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <HiChevronUpDown
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0">
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {paymentStatus.map((paymentStatus, statusIndex) => (
                        <Listbox.Option
                          key={statusIndex}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? "bg-blue-100 text-blue-900"
                                : "text-gray-900"
                            }`
                          }
                          value={paymentStatus}>
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}>
                                {paymentStatus.title}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                  <HiCheck
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>{" "}
            <input
              type="submit"
              value="Complete Appointment"
              className="focus:shadow-outline mt-4 cursor-pointer rounded-lg bg-primary py-2 px-4 font-bold text-textColor hover:bg-primary-dark focus:outline-none"
            />
          </form>
        )}
      </div>

      <div className="fixed bottom-6 right-6">
        {(selectedEvent?.status == "CREATED" ||
          selectedEvent?.status == "CONFIRMED") && (
          <button
            type="button"
            className="cursor-pointer rounded-md bg-red-500 px-4 py-2 font-semibold text-white shadow-md transition ease-in-out hover:bg-red-700"
            onClick={() => {
              console.log("Cancel");

              cancelAppointment(selectedEvent?.id!);

              props.closeModalCallback();
            }}>
            Cancel
          </button>
        )}
      </div>
    </div>
  );
}

export default ExistingEventModalContent;
