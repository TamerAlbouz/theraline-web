import Link from "next/link";
import { HiChevronRight } from "react-icons/hi2";

const PatientName = (props: { patientName: string }) => {
  return (
    <div className="flex flex-row">
      <div className="cursor-pointer text-2xl text-tertiary">
        <Link href="/patient-list">Patient List</Link>
      </div>

      <HiChevronRight className="mx-6 h-10 w-10 text-textColor" />

      <p className="text-2xl text-textColor">{props.patientName}</p>
    </div>
  );
};

export default PatientName;
