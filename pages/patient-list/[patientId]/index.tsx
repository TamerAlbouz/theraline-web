import { useRouter } from "next/router";
import FilesCard from "../../../components/pages/patient-list/details-body/FilesCard";
import InfoCard from "../../../components/pages/patient-list/details-body/InfoCard";
import NotesCard from "../../../components/pages/patient-list/details-body/NotesCard";
import ProfileCard from "../../../components/pages/patient-list/details-body/ProfileCard";
import PatientListHeader from "../../../components/pages/patient-list/header/Header";
import usePatientDetailsQuery from "../../../hooks/queries/patient-list/usePatientDetailsQuery";
import Loader from "../../../components/misc/Loader";

function PatientDetails() {
  const router = useRouter();
  const { data, isLoading } = usePatientDetailsQuery(
    router.asPath.split("/")[2] ?? "",
  );

  if (isLoading || !data) {
    return <Loader />;
  }

  return (
    <div className="h-full w-full">
      <div className="mb-6 rounded-md border-b-2 border-white bg-primary px-4 pt-2 pb-4">
        <PatientListHeader
          patientName={`${data?.firstName} ${data?.lastName}`}
          count={undefined}
        />
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <ProfileCard data={data} />
        </div>

        <div className="w-full pt-4 pl-0 lg:w-1/2 lg:pl-4 lg:pt-0">
          <InfoCard data={data} />
        </div>
      </div>

      <hr className="my-6 hidden border-t-2 border-white lg:block" />

      <div className="mt-4 flex flex-col justify-between lg:mt-0 lg:flex-row">
        <div className="w-full lg:w-1/2">
          <NotesCard note={data.notes[0]} />
        </div>

        <div className="w-full pt-4 pl-0 lg:w-1/2 lg:pl-4 lg:pt-0">
          <FilesCard />
        </div>
      </div>
    </div>
  );
}

export default PatientDetails;
