import HeaderButton from "./HeaderButton";
import PatientCount from "./PatientCount";
import PatientSort from "./PatientSort";
import { HiOutlineViewColumns } from "react-icons/hi2";
import { HiPencil } from "react-icons/hi2";
import { HiPrinter } from "react-icons/hi2";
import PatientName from "./PatientName";

const PatientListHeader = (props: {
  patientName: string | undefined | null;
}) => {
  return (
    <div className="mt-2 flex w-full flex-col flex-wrap items-center justify-between lg:flex-row">
      {!props.patientName && (
        <div className="ml-6 flex flex-col flex-wrap sm:flex-row">
          <PatientCount count={27} />

          <div className="m-2 mx-6 hidden h-8 border-l-2 border-white sm:block" />

          <PatientSort />
        </div>
      )}

      {props.patientName && (
        <div className="ml-6 flex flex-col flex-wrap sm:flex-row">
          <PatientName patientName={props.patientName} />
        </div>
      )}

      <div className="ml-6 mt-4 flex flex-wrap last:mr-2 lg:mt-0">
        <HeaderButton
          label={null}
          icon={HiPrinter}
          handleClick={() => {
            console.log("printer");
          }}
        />

        <HeaderButton
          label="Filter"
          icon={HiPencil}
          handleClick={() => {
            console.log("filter");
          }}
        />

        <HeaderButton
          label="Edit Columns"
          icon={HiOutlineViewColumns}
          handleClick={() => {
            console.log("edit");
          }}
        />
      </div>
    </div>
  );
};

export default PatientListHeader;
