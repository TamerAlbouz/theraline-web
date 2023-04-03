import { useRouter } from "next/router";
import { MdArrowForwardIos } from "react-icons/md";
import TotalPatients from "../../components/pages/payment-info/summary/TotalPatients";
import PaymentStatistics from "../../components/pages/payment-info/summary/Statistics";
import TotalPayments from "../../components/pages/payment-info/summary/TotalPayments";
import PatientsTable from "../../components/pages/payment-info/tables/PatientsTable";
import PaymentsTable from "../../components/pages/payment-info/tables/PaymentsTable";
import PayoutTable from "../../components/pages/payment-info/tables/PayoutTable";

function PaymentInfoPage() {
  const router = useRouter();

  return (
    <div className="flex w-full gap-5 text-textColor">
      <div className="flex w-2/3 flex-col gap-14">
        <PayoutTable />

        {/* <div className="flex flex-col gap-7">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Recent Treatments</h2>

            <button
              className="flex items-center justify-center gap-3 rounded-md border-2 border-solid border-white bg-primary px-4 py-2"
              onClick={navigateToLink.bind(null, "/patient-list")}
            >
              View More
              <MdArrowForwardIos />
            </button>
          </div>
          <PatientsTable />
        </div> */}
      </div>
      <div className="flex w-1/3 flex-col gap-5">
        <PaymentStatistics />
        <div className="flex gap-5">
          <TotalPayments />
        </div>
      </div>
    </div>
  );
}

export default PaymentInfoPage;
