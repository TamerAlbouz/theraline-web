import Link from "next/link";
import { HiChevronRight } from "react-icons/hi2";

function PatientName(props: { patientName: string }) {
  const { patientName } = props;
  return (
    <div className="flex flex-row">
      <div className="cursor-pointer text-2xl text-tertiary">
        <Link href="/patient-list">Patient List</Link>
      </div>

      <HiChevronRight className="mx-6 h-10 w-10 text-textColor" />

      <p className="text-2xl text-textColor">{patientName}</p>
    </div>
  );
}

export default PatientName;
