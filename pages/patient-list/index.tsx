import { getSession } from "next-auth/react";
import PatientList from "../../components/patient-list/list-body/PatientList";
import PatientListHeader from "../../components/patient-list/header/Header";

function PatientListPage() {
  return (
    <div className="w-full">
      <PatientListHeader patientName={undefined} />

      <hr className="my-4" />

      <PatientList />
    </div>
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
