import { useEffect, useState } from "react";
import { usePayStatsQuery } from "../../../../hooks/payment-info/usePayStatsQuery";

function TotalPayments() {
  const { data } = usePayStatsQuery();
  const [result, setResult] = useState([{ amount: "", text: "" }]);

  useEffect(() => {
    setResult([
      { amount: `$${data?.week}`, text: "This Week So Far..." },
      { amount: `$${data?.month}`, text: "This Month So Far..." },
      { amount: `$${data?.all}`, text: "All Time..." },
    ]);
  }, [data]);

  return (
    <div
      className="flex h-full w-full flex-grow flex-col justify-start gap-8 rounded-md bg-primary p-5 md:w-1/3 xl:w-1/5
        ">
      <h1 className="mb-3 text-2xl font-bold text-textColor">TOTAL PAYMENTS</h1>
      {result.map((item) => (
        <div className="flex flex-col gap-2" key={item.amount}>
          <p className="text-5xl font-normal text-textColor">{item.amount}</p>
          <p className="text-xl font-medium text-textColor">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default TotalPayments;
