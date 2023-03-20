import { getSession } from "next-auth/react";
import Appointments from "../components/pages/overview/Appointments";
import ClinicInfo from "../components/pages/overview/ClinicInfo";
import Revenue from "../components/pages/overview/Revenue";
import TabStatistics from "../components/pages/overview/TabStatistics";
import TotalPatients from "../components/pages/overview/TotalPatients";

function OverviewPage() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-5">
      <TabStatistics />
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
