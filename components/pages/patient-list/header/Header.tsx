import HeaderButton from "./HeaderButton";
import PatientCount from "./PatientCount";
import { HiOutlineViewColumns } from "react-icons/hi2";
import { HiPencil } from "react-icons/hi2";
import { HiPrinter } from "react-icons/hi2";
import PatientName from "./PatientName";

const PatientListHeader = (props: {
  patientName: string | undefined | null;
}) => {
  return (
    <div className="my-4 mt-2 flex w-full flex-col flex-wrap items-center justify-between border-b border-solid pb-4 lg:flex-row">
      {!props.patientName && (
        <div className="ml-6 flex flex-col flex-wrap sm:flex-row">
          <PatientCount count={27} />
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

        {!props.patientName && (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default PatientListHeader;
