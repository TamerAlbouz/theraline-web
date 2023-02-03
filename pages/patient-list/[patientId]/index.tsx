import { getSession } from "next-auth/react";
import InfoCard from "../../../components/patient-list/details-body/InfoCard";
import NotesCard from "../../../components/patient-list/details-body/NotesCard";
import ProfileCard from "../../../components/patient-list/details-body/ProfileCard";
import PatientListHeader from "../../../components/patient-list/header/Header";

const PatientDetails = (props: any) => {
  return (
    <div className="h-full w-full">
      <PatientListHeader patientName={props.patientData.patientName} />

      <div className="h-10" />

      <div className="flex flex-col lg:flex-row">
        <ProfileCard
          name={props.patientData.patientName}
          email={props.patientData.email}
          pastAppointments={props.patientData.pastAppointments}
          upcomingAppointments={props.patientData.upcomingAppointments}
        />

        <div className="mt-3 ml-0 lg:mt-0 lg:ml-3">
          <InfoCard
            gender={props.patientData.gender}
            birthday={props.patientData.birthday}
            phoneNumber={props.patientData.phoneNumber}
            street={props.patientData.streetAddress}
            city={props.patientData.city}
            zipCode={props.patientData.zipCode}
            memberStatus={props.patientData.memberStatus}
            registerDate={props.patientData.registeredDate}
          />
        </div>

        <div className="mt-3 ml-0 lg:mt-0 lg:ml-3 lg:w-2/5">
          <NotesCard />
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;

export async function getServerSideProps(context: any) {
  const { patientId } = context.params;
  console.log(patientId);

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
    props: {
      session,
      patientData: {
        patientName: "Clara Snooks",
        email: "snooks@gmail.com",
        pastAppointments: 21,
        upcomingAppointments: 2,
        gender: "Female",
        birthday: "Mar. 21, 2000",
        phoneNumber: "78-996446",
        streetAddress: "Blablabla",
        city: "Toronto",
        zipCode: "122497",
        memberStatus: "Active",
        registeredDate: "Feb 1, 2022",
      },
    },
  };
}
