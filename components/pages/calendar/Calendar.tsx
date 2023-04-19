import React, { Fragment, useEffect, useRef, useState } from "react";
import { EventClickArg } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Dialog, Transition } from "@headlessui/react";
import NewEventModalContent from "./NewEventModalContent";
import ExistingEventModalContent from "./ExistingEventModalContent";
import { useCalendarStore } from "../../../hooks/stores/useCalendarStore";
import useAppointmentsQuery, {
  Appointment,
} from "../../../hooks/queries/appointments/useAppointmentsQuery";

function AppCalendar() {
  const calendarRef = useRef<FullCalendar>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const { selectedEvent, setSelectedEvent, showWeekends } = useCalendarStore();
  const { data } = useAppointmentsQuery();
  useEffect(() => {
    useCalendarStore.subscribe((state, prevState) => {
      // opens the modal only when an event is triggered that isn't a show weekend change
      if (state.showWeekends === prevState.showWeekends) {
        openModal();
      }
    });
  }, []);

  useEffect(() => {
    if (data) {
      setAppointments(data);
    }
  }, [data]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <FullCalendar
        aspectRatio={2}
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        headerToolbar={{
          left: "prev,next",
          center: "title",
          right: "dayGridMonth,timeGridWeek",
        }}
        businessHours={{
          daysOfWeek: [1, 2, 3, 4, 5],
          startTime: "8:00",
          endTime: "18:00",
        }}
        weekends={showWeekends}
        eventTextColor="black"
        viewClassNames="bg-primary-dark p-4 rounded-lg border-none"
        eventClassNames="text-black cursor-pointer"
        dayCellClassNames="bg-primary"
        dayHeaderClassNames="bg-primary-dark py-4"
        slotLabelClassNames="px-4"
        eventClick={(data: EventClickArg) => {
          console.log(data);
          setSelectedEvent({
            id: data.event.id,
            title: data.event.title,
            start: data.event.start!,
            end: data.event.end!,
            status: data.event.extendedProps.status,
            paymentInfo: data.event.extendedProps.paymentInfo,
          });

          openModal();
        }}
        select={() => {
          setSelectedEvent(undefined);

          openModal();
        }}
        initialView="dayGridMonth"
        nowIndicator
        selectable
        events={appointments.map((element) => {
          let appointmentClass;

          switch (element.status.toString()) {
            case "CANCELED":
              appointmentClass = "bg-red-400";
              break;
            case "CONFIRMED":
              appointmentClass = "bg-yellow-400";
              break;
            case "DONE":
              appointmentClass = "bg-green-400";
              break;
            default:
              appointmentClass = "bg-tertiary";
              break;
          }

          return {
            id: element._id,
            title: element.title,
            start: new Date(element.start_date),
            end: new Date(element.end_date),
            extendedProps: {
              status: element.status,
              paymentInfo: element.paymentInfo,
            },
            className: appointmentClass,
          };
        })}
      />

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="h-[30rem] w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-bold leading-6 text-black">
                    {selectedEvent !== undefined
                      ? selectedEvent!.title
                      : "New Event"}
                  </Dialog.Title>

                  {selectedEvent ? (
                    <ExistingEventModalContent
                      closeModalCallback={() => {
                        closeModal();
                      }}
                    />
                  ) : (
                    <NewEventModalContent
                      closeModalCallback={() => {
                        closeModal();
                      }}
                    />
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default AppCalendar;
