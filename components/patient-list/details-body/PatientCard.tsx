import CardOptionsButton from "./CardOptionsButton";

const PatientCard = (props: {
  name: string;
  email: string;
  phoneNumber: string;
  city: string;
  nextAppointment: string | null | undefined;
  lastAppointment: string | null | undefined;
}) => {
  return (
    <div className="mx-6 my-2 grid grid-cols-3 items-center rounded-lg bg-primary-dark bg-opacity-95 py-3 px-4 text-white shadow sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7">
      <div className="col-span-2 flex flex-row">
        <img
          className="h-10 w-10 rounded-full md:h-12 md:w-12"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <div className="ml-4 flex flex-col">
          <p className="text-md font-bold ">{props.name}</p>
          <p className="text-sm">{props.email}</p>
        </div>
      </div>

      <p className="text-md hidden lg:block">{props.phoneNumber}</p>
      <p className="text-md hidden lg:block">{props.city}</p>
      <p className="text-md hidden sm:block">
        {props.nextAppointment ? props.nextAppointment : "-"}
      </p>
      <p className="text-md hidden md:block">
        {props.lastAppointment ? props.lastAppointment : "-"}
      </p>
      <p className="text-md">
        <CardOptionsButton />
      </p>
    </div>
  );
};

export default PatientCard;
