import { useRouter } from "next/router";
import { HiArrowCircleRight } from "react-icons/hi";
import CardWrapper from "../../../card/CardWrapper";

function TotalPayments() {
  const router = useRouter();

  return (
    <div
      className={`flex h-full w-full flex-grow flex-col justify-between rounded-md bg-primary p-5 md:w-1/3 xl:w-1/5
        `}>
      <h1 className="mb-3 text-lg font-bold text-textColor">TOTAL PAYMENTS</h1>
      <div className="flex flex-col gap-2">
        <p className="text-4xl font-normal text-textColor">$27,000</p>
        <p className="text-base font-medium text-textColor">
          This Month So Far...
        </p>
      </div>
    </div>
  );
}

export default TotalPayments;
