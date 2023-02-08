import InfoCard from "../../../components/patient-list/details-body/InfoCard";
import NotesCard from "../../../components/patient-list/details-body/NotesCard";
import ProfileCard from "../../../components/patient-list/details-body/ProfileCard";
import PatientListHeader from "../../../components/patient-list/header/Header";
import FilesCard from "../../../components/patient-list/details-body/FilesCard";

const PatientDetails = (props: any) => {
  return (
    <div className="h-full w-full">
      <div className="mb-6 rounded-md border-b-2 border-white bg-primary px-4 pt-2 pb-4">
        <PatientListHeader patientName={props.patientData.patientName} />
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <ProfileCard
            name={props.patientData.patientName}
            email={props.patientData.email}
            pastAppointments={props.patientData.pastAppointments}
            upcomingAppointments={props.patientData.upcomingAppointments}
          />
        </div>

        <div className="w-full pt-4 pl-0 lg:w-1/2 lg:pl-4 lg:pt-0">
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
      </div>

      <hr className="my-6 hidden border-t-2 border-white lg:block" />

      <div className="mt-4 flex flex-col justify-between lg:mt-0 lg:flex-row">
        <div className="w-full lg:w-1/2">
          <NotesCard />
        </div>

        <div className="w-full pt-4 pl-0 lg:w-1/2 lg:pl-4 lg:pt-0">
          <FilesCard />
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;

export async function getServerSideProps(context: any) {
  const { patientId } = context.params;
  console.log(patientId);

  // const session = await getSession();

  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: "/auth/signin",
  //       permenant: false,
  //     },
  //   };
  // }

  return {
    props: {
      // session,
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
