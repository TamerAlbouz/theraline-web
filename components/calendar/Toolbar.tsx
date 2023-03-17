import { useCalendarStore } from "../../hooks/stores/useCalendarStore";

function CalendarToolbar() {
  const { selectedEvent, setSelectedEvent, showWeekends, setShowWeekends } =
    useCalendarStore();

  return (
    <div className="flex flex-row justify-between">
      <div
        onClick={() => {
          setSelectedEvent(undefined);
        }}
      >
        ADD
      </div>

      <div
        onClick={() => {
          setShowWeekends(!showWeekends);
        }}
      >
        {showWeekends ? "Hide Weekends" : "Show Weekends"}
      </div>
    </div>
  );
}

export default CalendarToolbar;
