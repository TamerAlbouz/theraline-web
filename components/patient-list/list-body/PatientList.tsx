import PatientCard from "./PatientCard";

const patientList = [
  {
    patientId: "1",
    name: "Jane Cooper",
    email: "test@gmail",
    phoneNumber: "78-919-933",
    city: "Beirut",
    nextAppointment: "Mar 12, 2023",
    lastAppointment: null,
  },
  {
    patientId: "2",
    name: "Hailey Commet",
    email: "test2@gmail",
    phoneNumber: "03-366-547",
    city: "Tripoli",
    nextAppointment: undefined,
    lastAppointment: "May 20, 2023",
  },
];

const PatientList = () => {
  return (
    <div className="flex flex-col">
      <div className="mx-6 mb-2 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 text-white font-bold">
        <p className="col-span-2 mr-2 text-sm">Basic Info</p>

        <p className="mr-2 hidden text-sm lg:block">Phone Number</p>

        <p className="mr-2 hidden text-sm lg:block">City</p>

        <p className="mr-2 hidden text-sm sm:block">
          Next Appointment
        </p>

        <p className="mr-2 hidden text-sm md:block">
          Last Appointment
        </p>

        {/* <p className="mr-2 hidden text-sm text-white md:block">Register Date</p> */}
      </div>

      {patientList.map((e, index) => {
        return (
          <PatientCard
            key={index}
            patientId={e.patientId}
            name={e.name}
            email={e.email}
            phoneNumber={e.phoneNumber}
            city={e.city}
            nextAppointment={e.nextAppointment}
            lastAppointment={e.lastAppointment}
          />
        );
      })}
    </div>
  );
};

export default PatientList;
