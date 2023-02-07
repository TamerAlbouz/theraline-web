import CardWrapper from "../CardWrapper";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiCurrentLocation } from "react-icons/bi";

function ClinicInfo() {
  const address = "1234 Main Street, New York, NY 10001";
  const phone = "(123) 456-7890";

  return (
    <CardWrapper title="CLINIC INFO" link="/overview/clinic">
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
