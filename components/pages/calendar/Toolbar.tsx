import { useCalendarStore } from "../../../hooks/stores/useCalendarStore";

function CalendarToolbar() {
  const { setSelectedEvent, showWeekends, setShowWeekends } =
    useCalendarStore();

  return (
    <div className="flex flex-row justify-between">
      <button
        type="button"
        className="cursor-pointer rounded-md bg-primary-dark px-4 py-2 font-semibold text-white shadow-md transition ease-in-out hover:bg-primary"
        onClick={() => {
          setSelectedEvent(undefined);
        }}>
        ADD
      </button>
      <button
        type="button"
        className="cursor-pointer rounded-md bg-primary-dark px-4 py-2 font-semibold text-white shadow-md transition ease-in-out hover:bg-primary"
        onClick={() => {
          setShowWeekends(!showWeekends);
        }}>
        {showWeekends ? "Hide Weekends" : "Show Weekends"}
      </button>
    </div>
  );
}

export default CalendarToolbar;
