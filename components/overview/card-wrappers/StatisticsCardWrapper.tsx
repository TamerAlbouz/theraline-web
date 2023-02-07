function StatisticsWrapper(props: any) {
  return (
    <div className="flex w-full flex-col gap-5 rounded-sm bg-primary-dark p-5">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-white">{props.title}</h1>
        <div className="rounded-md bg-white px-3 py-1 text-lg font-semibold text-primary-dark">
          <p>This Year</p>
          <p>This Month</p>
          <p>This Week</p>
        </div>
      </div>
      {props.children}
    </div>
  );
}

export default StatisticsWrapper;
