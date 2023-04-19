import PaymentStatistics from "../../components/pages/payment-info/summary/Statistics";
import TotalPayments from "../../components/pages/payment-info/summary/TotalPayments";
import PayoutTable from "../../components/pages/payment-info/tables/PayoutTable";

function PaymentInfoPage() {
  return (
    <div className="flex w-full gap-5 text-textColor">
      <div className="flex w-2/3 flex-col gap-14">
        <PayoutTable />
      </div>
      <div className="flex w-1/3 flex-col gap-5">
        <PaymentStatistics />
        <div className="flex h-full gap-5">
          <TotalPayments />
        </div>
      </div>
    </div>
  );
}

export default PaymentInfoPage;
