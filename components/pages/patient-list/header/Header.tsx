import { HiOutlineViewColumns, HiPencil, HiPrinter } from "react-icons/hi2";

import PatientCount from "./PatientCount";
import HeaderButton from "./HeaderButton";
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
      <div className="ml-6 mt-4 flex flex-wrap last:mr-2 lg:mt-0">
        <HeaderButton
          label={null}
          Icon={HiPrinter}
          handleClick={() => {
            console.log("printer");
          }}
        />

        {!patientName && (
          <>
            <HeaderButton
              label="Filter"
              Icon={HiPencil}
              handleClick={() => {
                console.log("filter");
              }}
            />

            <HeaderButton
              label="Edit Columns"
              Icon={HiOutlineViewColumns}
              handleClick={() => {
                console.log("edit");
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default PatientListHeader;
