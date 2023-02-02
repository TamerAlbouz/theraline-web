import StatisticsWrapper from "./card/StatisticsCardWrapper";

function Statistics() {
  const lastName = "Doe";

  return (
    <StatisticsWrapper
      title={`Good Morning, Dr. ${lastName}`}
    ></StatisticsWrapper>
  );
}

export default Statistics;
