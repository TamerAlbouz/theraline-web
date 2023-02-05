function StatisticsWrapper(props: any) {
  return (
    <div className="flex w-full flex-col gap-5 rounded-sm bg-primary-dark p-5">
      <h1 className="text-lg font-semibold text-white">{props.title}</h1>
      {props.children}
    </div>
  );
}

export default StatisticsWrapper;
