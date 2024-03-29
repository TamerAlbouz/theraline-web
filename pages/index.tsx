import Appointments from "../components/pages/overview/cards/Appointments";
import ClinicInfo from "../components/pages/overview/cards/ClinicInfo";
import Revenue from "../components/pages/overview/cards/Revenue";
import TabStatistics from "../components/pages/overview/cards/TabStatistics";

function OverviewPage() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-5">
      <TabStatistics />
      <section className="flex w-full flex-wrap items-center justify-center gap-5">
        <ClinicInfo />
        <Appointments />

        <Revenue />
      </section>
    </div>
  );
}

export default OverviewPage;
