import PatientCount from "./PatientCount";
import PatientName from "./PatientName";

function PatientListHeader(props: { patientName: string | undefined | null }) {
  const { patientName } = props;
  return (
    <div className="my-4 mt-2 flex w-full flex-col flex-wrap items-center justify-between border-b border-solid pb-4 lg:flex-row">
      {!patientName && (
        <div className="ml-6 flex flex-col flex-wrap sm:flex-row">
          <PatientCount count={27} />
        </div>
      )}
      {patientName && (
        <div className="ml-6 flex flex-col flex-wrap sm:flex-row">
          <PatientName patientName={patientName} />
        </div>
      )}
    </div>
  );
}

export default PatientListHeader;
