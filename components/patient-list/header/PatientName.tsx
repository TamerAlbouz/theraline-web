import Link from "next/link";
import { useRouter } from "next/router";
import { HiChevronRight } from "react-icons/hi2";

const PatientName = (props: { patientName: string }) => {
  const router = useRouter();

  return (
    <div className="flex flex-row">
      <p
        onClick={() => router.back()}
        className="cursor-pointer text-2xl text-tertiary"
      >
        Patient List
      </p>

      <HiChevronRight className="mx-6 h-10 w-10 text-white" />

      <p className="text-2xl text-white">{props.patientName}</p>
    </div>
  );
};

export default PatientName;
