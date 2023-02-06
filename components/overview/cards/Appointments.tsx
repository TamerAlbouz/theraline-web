import { useRouter } from "next/router";
import CardWrapper from "../card-wrappers/CardWrapper";

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
      date: "2021-10-10",
    },
    {
      id: 2,
      title: "Group Therapy",
      time: "11:00 AM",
      date: "2021-10-10",
    },
    {
      id: 3,
      title: "Activities",
      time: "12:00 PM",
      date: "2021-10-10",
    },
  ];

  return (
    <CardWrapper title="APPOINTMENTS" link="/overview/appointments">
      <div className="flex flex-col gap-3 overflow-scroll">
        {DUMMY_APPOINTMENTS.map((appointment) => (
          <div
            onClick={navigateToLink.bind(null, appointment.id)}
            key={appointment.id}
            className="flex cursor-pointer items-center justify-between rounded-md bg-primary-dark p-3 text-sm text-white hover:bg-secondary"
          >
            <div>
              <p>{appointment.date}</p>
              <h6 className="font-semibold">{appointment.title}</h6>
            </div>
            <p className="text-sm">{appointment.time}</p>
          </div>
        ))}
      </div>
    </CardWrapper>
  );
}

export default Appointments;
