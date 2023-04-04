import { useQuery } from "@tanstack/react-query";
import Appointments from "../components/pages/overview/Appointments";
import ClinicInfo from "../components/pages/overview/ClinicInfo";
import Revenue from "../components/pages/overview/Revenue";
import TabStatistics from "../components/pages/overview/TabStatistics";
import TotalPatients from "../components/pages/overview/TotalPatients";
import useAuthStore from "../hooks/stores/useAuthStore";

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

export default OverviewPage;
