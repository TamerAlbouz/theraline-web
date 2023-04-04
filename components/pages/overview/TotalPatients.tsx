import CardWrapper from "../../card/CardWrapper";

function TotalPatients() {
  return (
    <CardWrapper title="TOTAL PATIENTS">
      <div className="flex flex-col gap-3 font-medium text-textColor">
        <div>
          <p>This Month</p>
          <p className="text-5xl font-normal">24</p>
        </div>
        <div>
          <p>All Time</p>
          <p className="text-5xl font-normal">177</p>
        </div>
      </div>
    </CardWrapper>
  );
}

export default TotalPatients;
