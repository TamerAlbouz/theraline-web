import AppCalendar from "../../components/pages/calendar/Calendar";
import CalendarToolbar from "../../components/pages/calendar/Toolbar";

function CalendarPage() {
  return (
    <div className="h-full w-full">
      <div className="mb-4">
        <CalendarToolbar />
      </div>

      <AppCalendar />
    </div>
  );
}

export default CalendarPage;
