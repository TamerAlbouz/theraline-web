import { useCancelAppointmentMutation } from "../../../hooks/mutations/useCancelAppointmentMutation";
import { useCalendarStore } from "../../../hooks/stores/useCalendarStore";
import { format } from "date-fns";

function ExistingEventModalContent() {
  const { selectedEvent } = useCalendarStore();
  const { mutate: cancelAppointment } = useCancelAppointmentMutation();

  return (
    <div className="mt-4">
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

      <div className="mt-4 flex flex-row">
        <button
          type="button"
          className="mt-4 mr-4 cursor-pointer rounded-md bg-green-500 px-4 py-2 font-semibold text-white shadow-md transition ease-in-out hover:bg-green-700"
          onClick={() => {
            console.log("Confirm");
          }}>
          Confirm
        </button>

        <button
          type="button"
          className="mt-4 cursor-pointer rounded-md bg-red-500 px-4 py-2 font-semibold text-white shadow-md transition ease-in-out hover:bg-red-700"
          onClick={() => {
            console.log("Cancel");

            cancelAppointment(selectedEvent?.id!);
          }}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ExistingEventModalContent;
