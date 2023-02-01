import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function CalendarPage() {
  const router = useRouter();

  useSession({
    required: true,
    onUnauthenticated() {
      router.push("/auth/signin");
    },
  });

  return (
    <div>
      <h1>Calendar</h1>
    </div>
  );
}

export default CalendarPage;
