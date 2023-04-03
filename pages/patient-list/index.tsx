import { Fragment } from "react";
import PatientList from "../../components/pages/patient-list/list-body/PatientList";
import PatientListHeader from "../../components/pages/patient-list/header/Header";

function PatientListPage() {
  return (
    <>
      <PatientListHeader patientName={undefined} />
      <PatientList />
    </>
  );
}

export default PatientListPage;
