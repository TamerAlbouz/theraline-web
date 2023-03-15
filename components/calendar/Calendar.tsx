import React, { Fragment, useRef, useState } from "react";
import { EventClickArg } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { addHours, endOfHour } from "date-fns";
import { EventDropArg } from "fullcalendar";
import { Dialog, Transition } from "@headlessui/react";
import NewEventModalContent from "./NewEventModalContent";
import { calendarEvent } from "../../types/calendarEvent";
import ExistingEventModalContent from "./ExistingEventModalContent";

function AppCalendar() {
  const calendarRef = useRef<FullCalendar>(null);

  let [isOpen, setIsOpen] = useState(false);
  let [selectedEvent, setSelectedEvent] = useState<calendarEvent | undefined>(
    undefined
  );

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        onClick={() => {
          setSelectedEvent(undefined);
          openModal();
          //   calendarRef.current!.getApi().addEvent({
          //     title: "asasas",
          //     start: addHours(endOfHour(new Date()), 2),
          //     end: addHours(endOfHour(new Date()), 4),
          //   });
        }}
      >
        ADD
      </div>
      <FullCalendar
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
        eventDrop={(data: EventDropArg) => {
          //  update time happends here
          console.log("Event Drop Here");
        }}
        eventClick={(data: EventClickArg) => {
          setSelectedEvent({
            title: data.event.title,
            start: data.event.start!,
            end: data.event.end!,
          });
          openModal();
        }}
        initialView="dayGridMonth"
        nowIndicator={true}
        editable={true}
        selectable={true}
        initialEvents={[
          {
            title: "nice event",
            start: new Date(),
            end: addHours(endOfHour(new Date()), 2),
          },
        ]}
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
            leaveTo="opacity-0"
          >
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
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="h-[26rem] w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-bold leading-6 text-black"
                  >
                    {selectedEvent != undefined
                      ? selectedEvent!.title
                      : "New Event"}
                  </Dialog.Title>

                  {selectedEvent ? (
                    <ExistingEventModalContent
                      data={selectedEvent}
                      deleteEventCallback={() => {
                        console.log(`DELETING ${selectedEvent?.title}`);

                        calendarRef.current!.getApi().refetchEvents();
                      }}
                    />
                  ) : (
                    <NewEventModalContent
                      addEventCallback={(data: calendarEvent) => {
                        console.log(data);
                        calendarRef.current!.getApi().addEvent({
                          title: data.title,
                          start: data.start,
                          end: data.end,
                        });
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
