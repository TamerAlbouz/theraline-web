import CardWrapper from "../card-wrappers/CardWrapper";

function Revenue() {
  return (
    <CardWrapper title="REVENUE" link="/">
      <div className="flex flex-col gap-3 font-medium text-white">
        <div>
          <p className="text-5xl font-normal">$2,400</p>
          <p>This Month</p>
        </div>
        <hr />
        <div>
          <p className="text-5xl font-normal">$177,000</p>
          <p>All Time</p>
        </div>
      </div>
    </CardWrapper>
  );
}

export default Revenue;
