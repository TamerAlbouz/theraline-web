import { useForm } from "react-hook-form";
import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { format } from "date-fns";
import { HiCheck, HiChevronUpDown } from "react-icons/hi2";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCancelAppointmentMutation } from "../../../hooks/mutations/appointments/useCancelAppointmentMutation";
import { useCalendarStore } from "../../../hooks/stores/useCalendarStore";
import { useCompleteAppointmentMutation } from "../../../hooks/mutations/appointments/useCompleteAppointmentMutation";
import { useUpdateAppointmentMutation } from "../../../hooks/mutations/appointments/useUpdateAppointmentMutation";
import { useEmailAppointmentMutation } from "../../../hooks/mutations/appointments/useEmailAppointment";

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
    case "CANCELLED":
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
  const { mutate: updateAppointment } = useUpdateAppointmentMutation();
  const { mutate: emailAppointment } = useEmailAppointmentMutation();

  const { closeModalCallback } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentInfoValues>({
    resolver: zodResolver(paymentInfoSchema),
  });

  useEffect(() => {
    if (selectedEvent?.paymentInfo) {
      if (selectedEvent.paymentInfo.method === "CREDIT CARD") {
        setSelectedOption(paymentOptions[0]);
      } else if (selectedEvent.paymentInfo.method === "CASH") {
        setSelectedOption(paymentOptions[1]);
      } else {
        setSelectedOption(paymentOptions[2]);
      }

      if (selectedEvent.paymentInfo.status === "AWAITING") {
        setSelectedStatus(paymentStatus[1]);
      } else if (selectedEvent.paymentInfo.status === "PAID") {
        setSelectedStatus(paymentStatus[2]);
      } else {
        setSelectedStatus(paymentStatus[0]);
      }
    }
  }, [selectedEvent?.paymentInfo]);

  const submitPaymentInfo = (data: PaymentInfoValues) => {
    console.log(data);

    if (
      selectedEvent?.status === "DONE" &&
      selectedEvent.status.toString() !== selectedStatus.value.toString()
    ) {
      console.log("UPDATE HERE");
      updateAppointment({
        appointmentId: selectedEvent!.id,
        // eslint-disable-next-line radix
        amount: parseInt(data.amount),
        status: selectedStatus.value,
      });
    } else {
      completeAppointment({
        appointmentId: selectedEvent!.id,
        // eslint-disable-next-line radix
        amount: parseInt(data.amount),
        method: selectedOption.value,
        status: selectedStatus.value,
      });

      closeModalCallback();
    }
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

        <div className="mt-4 flex flex-row">
          <span className="mr-8">Patient:</span>

          <span className="font-bold">{selectedEvent?.patient.fullName}</span>
          <span>{`, ${selectedEvent?.patient.email}`}</span>
        </div>

        {(selectedEvent?.status === "CONFIRMED" ||
          selectedEvent?.status === "DONE") && (
          <form onSubmit={handleSubmit(submitPaymentInfo)} className="mt-4">
            <input
              {...register("amount", {
                required: { value: true, message: "This field is required" },
              })}
              id="event-amount"
              type="text"
              readOnly={selectedEvent?.status === "DONE"}
              placeholder="Amount"
              value={
                selectedEvent.paymentInfo
                  ? selectedEvent.paymentInfo.amount
                  : undefined
              }
              className="focus:shadow-outline block w-full appearance-none rounded-md border py-2 px-3 leading-tight text-primary-dark shadow focus:outline-none"
            />{" "}
            <span className="text-base text-red-600">
              {errors.amount?.message}
            </span>
            <div className="mt-4 w-72">
              <Listbox
                value={selectedOption}
                onChange={setSelectedOption}
                disabled={selectedEvent?.status === "DONE"}>
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
                      {paymentOptions.map((paymentOption) => (
                        <Listbox.Option
                          key={paymentOption.value}
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
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600">
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
            </div>
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
                      {paymentStatus.map((status) => (
                        <Listbox.Option
                          key={status.title}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? "bg-blue-100 text-blue-900"
                                : "text-gray-900"
                            }`
                          }
                          value={status}>
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}>
                                {status.title}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
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
            </div>
            <input
              type="submit"
              value={
                selectedEvent?.status === "DONE"
                  ? "Update"
                  : "Complete Appointment"
              }
              className="focus:shadow-outline mt-4 cursor-pointer rounded-lg bg-primary py-2 px-4 font-bold text-textColor hover:bg-primary-dark focus:outline-none"
            />
          </form>
        )}
      </div>

      <div className="fixed bottom-6 right-6 flex gap-5">
        <button
          type="button"
          className="focus:shadow-outline mt-4 cursor-pointer rounded-lg bg-primary py-2 px-4 font-bold text-textColor hover:bg-primary-dark focus:outline-none"
          onClick={() => {
            console.log("Email");
            emailAppointment({ appointmentId: selectedEvent?.id! });
          }}>
          Export
        </button>
        {(selectedEvent?.status === "CREATED" ||
          selectedEvent?.status === "CONFIRMED") && (
          <button
            type="button"
            className="mt-4 cursor-pointer rounded-md bg-red-500 px-4 py-2 font-semibold text-white shadow-md transition ease-in-out hover:bg-red-700"
            onClick={() => {
              console.log("Cancel");

              cancelAppointment(selectedEvent?.id!);

              closeModalCallback();
            }}>
            Cancel
          </button>
        )}
      </div>
    </div>
  );
}

export default ExistingEventModalContent;
