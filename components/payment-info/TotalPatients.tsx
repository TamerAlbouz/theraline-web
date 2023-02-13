import CardWrapper from "../card/CardWrapper";

function TotalPatients() {
  return (
    <CardWrapper title="Total Patients" link="/">
      <div className="flex flex-col gap-2">
        <p className="text-4xl font-semibold text-white">103</p>
        <p className="text-lg font-medium text-white">This Month So Far...</p>
      </div>
    </CardWrapper>
  );
}

export default TotalPatients;
