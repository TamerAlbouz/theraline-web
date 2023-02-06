import { getSession } from "next-auth/react";
import Appointments from "../components/overview/cards/Appointments";
import ClinicInfo from "../components/overview/cards/ClinicInfo";
import Revenue from "../components/overview/cards/Revenue";
import Statistics from "../components/overview/cards/Statistics";
import TotalPatients from "../components/overview/cards/TotalPatients";

function OverviewPage() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-5">
      <Statistics />
      <section className="flex w-full flex-wrap items-center justify-center gap-5">
        <ClinicInfo />
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
