import { useCalendarStore } from "../../../hooks/stores/useCalendarStore";

function CalendarToolbar() {
  const { selectedEvent, setSelectedEvent, showWeekends, setShowWeekends } =
    useCalendarStore();

  return (
    <div className="flex flex-row justify-between">
      <div
        className="cursor-pointer rounded-md bg-primary-dark px-4 py-2 font-semibold text-white shadow-md transition ease-in-out hover:bg-primary"
        onClick={() => {
          setSelectedEvent(undefined);
        }}>
        ADD
      </div>
      <div
        className="cursor-pointer rounded-md bg-primary-dark px-4 py-2 font-semibold text-white shadow-md transition ease-in-out hover:bg-primary"
        onClick={() => {
          setShowWeekends(!showWeekends);
        }}>
        {showWeekends ? "Hide Weekends" : "Show Weekends"}
      </div>
    </div>
  );
}

export default CalendarToolbar;
