import AppCalendar from "../../components/pages/calendar/Calendar";
import CalendarToolbar from "../../components/pages/calendar/Toolbar";
import { useEffect } from "react";

function CalendarPage({ data }: any) {
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="h-full w-full">
      <CalendarToolbar />
      <AppCalendar />
    </div>
  );
}

export default CalendarPage;
