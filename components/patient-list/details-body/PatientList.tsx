import PatientCard from "./PatientCard";

const patientList = [
  {
    name: "Jane Cooper",
    email: "test@gmail",
    phoneNumber: "78-919-933",
    city: "Beirut",
    nextAppointment: "Mar 12, 2023",
    lastAppointment: null,
  },
  {
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
      <div className="mx-6 mb-2 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7">
        <p className="col-span-2 mr-2 text-sm text-white">Basic Info</p>

        <p className="mr-2 hidden text-sm text-white lg:block">Phone Number</p>

        <p className="mr-2 hidden text-sm text-white lg:block">City</p>

        <p className="mr-2 hidden text-sm text-white sm:block">
          Next Appointment
        </p>

        <p className="mr-2 hidden text-sm text-white md:block">
          Last Appointment
        </p>

        {/* <p className="mr-2 hidden text-sm text-white md:block">Register Date</p> */}
      </div>

      {patientList.map((e) => {
        return (
          <PatientCard
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
