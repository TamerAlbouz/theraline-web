import { getSession } from "next-auth/react";
import AppCalendar from "../../components/pages/calendar/Calendar";
import CalendarToolbar from "../../components/pages/calendar/Toolbar";

function CalendarPage() {
  return (
    <div className="h-full w-full">
      <CalendarToolbar />
      <AppCalendar />
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permenant: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default CalendarPage;
