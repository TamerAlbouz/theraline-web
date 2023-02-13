import { getSession } from "next-auth/react";
import PaymentStatistics from "../../components/payment-info/Statistics";
import TotalPatients from "../../components/payment-info/TotalPatients";
import TotalPayments from "../../components/payment-info/TotalPayments";

function PaymentInfoPage() {
  return (
    <div className="w-full">
      <DataTableResponsiveDemo />
      <div className="flex w-4/12 flex-col gap-5">
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
