import { getSession } from "next-auth/react";
import Appointments from "../components/overview/Appointments";
import Meeting from "../components/overview/Meeting";
import Revenue from "../components/overview/Revenue";
import Statistics from "../components/overview/Statistics";
import TotalPatients from "../components/overview/TotalPatients";

function OverviewPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <Statistics />
      <section className="flex w-full flex-wrap items-center justify-center gap-5">
        <Meeting />
        <Appointments />
        <TotalPatients />
        <Revenue />
      </section>
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

export default OverviewPage;
