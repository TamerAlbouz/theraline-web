import CardWrapper from "../../../card/CardWrapper";

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

function Appointments() {
  return (
    <CardWrapper title="APPOINTMENTS TODAY">
      <div className="flex flex-row justify-between gap-5 overflow-hidden">
        <div className="flex w-full flex-col gap-3">
          {DUMMY_APPOINTMENTS.slice(0, 2).map((appointment) => (
            <div
              key={appointment.id}
              className="flex items-center justify-between rounded-md bg-primary-dark p-3 text-sm text-textColor ">
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
