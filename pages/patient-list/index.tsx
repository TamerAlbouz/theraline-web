import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import PatientList from "../../components/patient-list/details-body/PatientList";
import PatientListHeader from "../../components/patient-list/header/Header";

function PatientListPage() {
  // const router = useRouter();

  // useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     router.push("/auth/signin");
  //   },
  // });

  return (
    <div className="w-full">
      <PatientListHeader />

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
