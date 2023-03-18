import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { MdArrowForwardIos } from "react-icons/md";
import PaymentStatistics from "../../components/payment-info/summary/Statistics";
import PatientsTable from "../../components/payment-info/tables/PatientsTable";
import PaymentsTable from "../../components/payment-info/tables/PaymentsTable";
import TotalPatients from "../../components/payment-info/summary/TotalPatients";
import TotalPayments from "../../components/payment-info/summary/TotalPayments";

function PaymentInfoPage() {
  const router = useRouter();

  const navigateToLink = (link: any) => {
    router.push(link);
  };

  return (
    <div className="flex w-full gap-16 text-textColor">
      <div className="flex w-2/3 flex-col gap-14">
        <div className="flex flex-col gap-7">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Recent Payout</h2>
            <button
              className="flex items-center justify-center gap-3 rounded-md border-2 border-solid border-white bg-primary px-4 py-2"
              onClick={navigateToLink.bind(null, "/payment-info/payouts")}
            >
              View More
              <MdArrowForwardIos />
            </button>
          </div>
          <PaymentsTable />
        </div>
        <div className="flex flex-col gap-7">
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
        </div>
      </div>
      <div className="flex w-1/3 flex-col gap-5">
        <PaymentStatistics />
        <div className="flex gap-5">
          <TotalPayments />
          <TotalPatients />
        </div>
      </div>
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

export default PaymentInfoPage;
