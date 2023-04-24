import { useEffect, useState } from "react";
import { usePayStatsQuery } from "../../../../hooks/payment-info/usePayStatsQuery";
import CardWrapper from "../../../card/CardWrapper";

function Revenue() {
  const { data } = usePayStatsQuery();
  const [result, setResult] = useState({ month: "", all: "" });

  useEffect(() => {
    setResult({ month: `$${data?.month}`, all: `$${data?.all}` });
  }, [data]);

  return (
    <CardWrapper title="REVENUE">
      <div className="flex flex-col gap-3 font-medium text-textColor">
        <div>
          <p className="text-5xl font-normal">{result.month}</p>
          <p>This Month</p>
        </div>
        <hr />
        <div>
          <p className="text-5xl font-normal">{result.all}</p>
          <p>All Time</p>
        </div>
      </div>
    </CardWrapper>
  );
}

export default Revenue;
