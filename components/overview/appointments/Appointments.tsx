import { useRouter } from "next/router";
import CardWrapper from "../CardWrapper";

function Appointments() {
  const router = useRouter();

  const navigateToLink = (id: any) => {
    router.push("/overview/appointments/" + id);
  };

  const DUMMY_APPOINTMENTS = [
    {
      id: 1,
      title: "Consultation",
      time: "10:00 AM",
      length: "30 minutes",
    },
    {
      id: 2,
      title: "Group Therapy",
      time: "11:00 AM",
      length: "1 hour",
    },
    {
      id: 3,
      title: "Activities",
      time: "12:00 PM",
      length: "1 hour",
    },
  ];

  return (
    <CardWrapper title="APPOINTMENTS TODAY" link="/overview/appointments">
      <div className="flex flex-row justify-between gap-5 overflow-hidden">
        <p className="text-7xl text-white">{DUMMY_APPOINTMENTS.length}</p>
        <div className="flex w-full flex-col gap-3 overflow-scroll">
          {DUMMY_APPOINTMENTS.slice(0, 2).map((appointment) => (
            <div
              onClick={navigateToLink.bind(null, appointment.id)}
              key={appointment.id}
              className="flex cursor-pointer items-center justify-between rounded-md bg-primary-dark p-3 text-sm text-white hover:bg-secondary"
            >
              <div>
                <p>{appointment.length}</p>
                <h6 className="font-semibold">{appointment.title}</h6>
              </div>
              <p className="text-sm">{appointment.time}</p>
            </div>
          ))}
        </div>
      </div>
    </CardWrapper>
  );
}

export default Appointments;
