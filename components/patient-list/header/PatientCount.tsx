const PatientCount = (props: { count: number }) => {
  return (
    <div className="flex flex-row items-end">
      <div className="text-5xl font-bold text-white">{props.count}</div>

      <div className="text-sm font-bold text-white">patients</div>
    </div>
  );
};

export default PatientCount;
