import PatientList from "../../components/pages/patient-list/list-body/PatientList";
import PatientListHeader from "../../components/pages/patient-list/header/Header";
import usePatientListQuery from "../../hooks/queries/patient-list/usePatientListQuery";
import Loader from "../../components/misc/Loader";

function PatientListPage() {
  const { data, isLoading } = usePatientListQuery();

  if (isLoading || !data) {
    return <Loader />;
  }

  return (
    <>
      <PatientListHeader patientName={undefined} count={data.length} />
      <PatientList data={data} />
    </>
  );
}

export default PatientListPage;
