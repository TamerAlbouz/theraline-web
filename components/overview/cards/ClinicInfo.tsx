import CardWrapper from "../card-wrappers/CardWrapper";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiCurrentLocation } from "react-icons/bi";
import { DUMMY_DATA } from "../utils";

function ClinicInfo() {
  const { address, phone } = DUMMY_DATA;

  return (
    <CardWrapper title="CLINIC INFO" link="/">
      <div className="flex flex-col gap-5 font-medium text-white">
        <div className="flex items-center gap-2 ">
          <BiCurrentLocation className="text-2xl" />
          <p>{address}</p>
        </div>
        <div className="flex items-center gap-3">
          <BsFillTelephoneFill className="text-xl " />
          <p>{phone}</p>
        </div>
      </div>
    </CardWrapper>
  );
}

export default ClinicInfo;
