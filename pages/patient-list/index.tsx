import { getSession } from "next-auth/react";
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

export async function getServerSideProps(context: any) {
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
    props: { session },
  };
}

export default PatientListPage;
