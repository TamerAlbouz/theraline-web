import Link from "next/link";
import { patientDataModel } from "../../../../types/patientData";

function ProfileCard(props: { data: patientDataModel }) {
  return (
    <div className="flex flex-col items-center rounded-lg bg-primary-dark px-6 py-10">
      <img
        className="h-16 w-16 cursor-pointer rounded-full md:h-12 md:w-12"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />

      <p className="my-2 text-xl font-bold text-textColor">{props.data.name}</p>

      <p className="text-md my-2 text-textColor">{props.data.email}</p>

      <div className="flex flex-row">
        <div className="flex flex-col items-center">
          <p className="text-xl font-bold text-textColor">
            {props.data.previousAppointmentsCount}
          </p>

          <p className="text-lg text-textColor">Past</p>
        </div>

        <div className="m-2 mx-10 h-8 border-l-2 border-white" />

        <div className="flex flex-col items-center">
          <p className="text-xl font-bold text-textColor">
            {props.data.nextAppointmentsCount}
          </p>

          <p className="text-lg text-textColor">Upcoming</p>
        </div>
      </div>

      <div className="mt-4 w-full rounded-md border-solid border-white bg-white py-2 text-center text-xl text-primary-dark">
        <Link href="messages">Message</Link>
      </div>
    </div>
  );
}

export default ProfileCard;
