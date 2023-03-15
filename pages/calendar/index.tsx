import { getSession } from "next-auth/react";
import AppCalendar from "../../components/calendar/Calendar";

function CalendarPage() {
  return (
    <div className="h-full w-full">
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
