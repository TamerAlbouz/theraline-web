import { getSession } from "next-auth/react";
import Appointments from "../components/overview/Appointments";
import ClinicInfo from "../components/overview/ClinicInfo";
import Revenue from "../components/overview/Revenue";
import Tabs from "../components/overview/Tab";
import TotalPatients from "../components/overview/TotalPatients";

function OverviewPage() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-5">
      <Tabs />
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
