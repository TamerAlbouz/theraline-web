import CardWrapper from "../card/CardWrapper";

function TotalPayments() {
  return (
    <CardWrapper title="Total Payments" link="/">
      <div className="flex flex-col gap-2">
        <p className="text-4xl font-semibold text-white">$27,000</p>
        <p className="text-lg font-medium text-white">This Month So Far...</p>
      </div>
    </CardWrapper>
  );
}

export default TotalPayments;
