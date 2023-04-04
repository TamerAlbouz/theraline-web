import PatientList from "../../components/pages/patient-list/list-body/PatientList";
import PatientListHeader from "../../components/pages/patient-list/header/Header";
import { Fragment } from "react";

function PatientListPage() {
  return (
    <Fragment>
      <PatientListHeader patientName={undefined} />
      <PatientList />
    </Fragment>
  );
}

export default PatientListPage;
