function PatientCount(props: { count: number }) {
  const { count } = props;
  return (
    <div className="flex flex-row items-end">
      <div className="text-5xl font-bold text-textColor">{count}</div>

      <div className="text-sm font-bold text-textColor">patients</div>
    </div>
  );
}

export default PatientCount;
