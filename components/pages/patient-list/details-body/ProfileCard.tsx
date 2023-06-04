import Link from "next/link";
import Image from "next/image";
import { PatientDetails } from "../../../../hooks/queries/patient-list/usePatientDetailsQuery";

function ProfileCard({ data }: { data: PatientDetails }) {
  const { firstName, lastName, username, email, image } = data;

  return (
    <div className="flex flex-col items-center rounded-lg bg-primary-dark px-6 py-10">
      {image && (
        <Image
          width={64}
          height={64}
          className="h-16 w-16 cursor-pointer rounded-full md:h-12 md:w-12"
          src={image}
          alt=""
        />
      )}

      <p className="my-2 text-xl font-bold text-textColor">{`${firstName} ${lastName}`}</p>
      <p className="text-l my-2 font-bold text-textColor">{`${username}`}</p>

      <p className="text-md my-2 text-textColor">{email}</p>

      <div className="flex flex-row">
        <div className="flex flex-col items-center">
          <p className="text-xl font-bold text-textColor">{data.previous}</p>

          <p className="text-lg text-textColor">Past</p>
        </div>

        <div className="m-2 mx-10 h-8 border-l-2 border-white" />

        <div className="flex flex-col items-center">
          <p className="text-xl font-bold text-textColor">{data.next}</p>

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
