import FilesCard from "../../../components/pages/patient-list/details-body/FilesCard";
import InfoCard from "../../../components/pages/patient-list/details-body/InfoCard";
import NotesCard from "../../../components/pages/patient-list/details-body/NotesCard";
import ProfileCard from "../../../components/pages/patient-list/details-body/ProfileCard";
import PatientListHeader from "../../../components/pages/patient-list/header/Header";
import { patientDataModel } from "../../../types/patientData";

const PatientDetails = (props: { patientData: patientDataModel }) => {
  return (
    <div className="h-full">
      <div className="mb-6 rounded-md border-b-2 border-white bg-primary px-4 pt-2 pb-4">
        <PatientListHeader patientName={props.patientData.name} />
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <ProfileCard data={props.patientData} />
        </div>

        <div className="w-full pt-4 pl-0 lg:w-1/2 lg:pl-4 lg:pt-0">
          <InfoCard data={props.patientData} />
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
        patientId: "1",
        name: "Clara Snooks",
        imageUrl:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        email: "snooks@gmail.com",
        phoneNumber: "78-996446",
        city: "Toronto",
        street: "Blablabla",
        gender: "Female",
        birthday: "Mar. 21, 2000",
        zipCode: "122497",
        memberStatus: "Active",
        registerDate: "Feb 1, 2022",
        nextAppointment: "22 Mar 2023",
        lastAppointment: "17 Apr 2021",
        nextAppointmentsCount: 2,
        previousAppointmentsCount: 3,
      },
    },
  };
}
