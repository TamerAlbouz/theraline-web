import { useEffect, useState } from "react";
import { usePayStatsQuery } from "../../../../hooks/payment-info/usePayStatsQuery";

function TotalPayments() {
  const { data } = usePayStatsQuery();
  const [result, setResult] = useState({ week: "", month: "", all: "" });

  useEffect(() => {
    setResult({
      week: `$${data ? data.week : ""}`,
      month: `$${data ? data.month : ""}`,
      all: `$${data ? data.all : ""}`,
    });
  }, [data]);

  return (
    <div
      className="flex h-full w-full flex-grow flex-col justify-start gap-8 rounded-md bg-primary p-5 md:w-1/3 xl:w-1/5
        ">
      <h1 className="mb-3 text-2xl font-bold text-textColor">TOTAL PAYMENTS</h1>
      <ul className="flex flex-col gap-10">
        <li className="flex flex-col gap-2">
          <p className="text-5xl font-light text-textColor">{result.week}</p>
          <p className="text-xl font-medium text-textColor">This Week...</p>
        </li>
        <li className="flex flex-col gap-2">
          <p className="text-5xl font-light text-textColor">{result.all}</p>
          <p className="text-xl font-medium text-textColor">This Month...</p>
        </li>
        <li className="flex flex-col gap-2">
          <p className="text-5xl font-light text-textColor">{result.all}</p>
          <p className="text-xl font-medium text-textColor">All Time...</p>
        </li>
      </ul>
    </div>
  );
}

export default TotalPayments;
