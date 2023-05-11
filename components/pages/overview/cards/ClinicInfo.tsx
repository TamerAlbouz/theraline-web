import { BsFillTelephoneFill, BsPaperclip } from "react-icons/bs";
import { BiCurrentLocation } from "react-icons/bi";
import CardWrapper from "../../../card/CardWrapper";
import { useClinicQuery } from "../../../../hooks/queries/overview/useClinicQuery";

function ClinicInfo() {
  const { data } = useClinicQuery();

  return (
    <CardWrapper title="CLINIC INFO">
      <div className="flex flex-col gap-5 font-medium text-textColor">
        <div className="flex items-center gap-3">
          <BsPaperclip className="text-xl" />
          <p>
            <a
              target="_blank"
              href={`${data?.name}`}
              rel="noreferrer"
              className="hover:text-tertiary">
              {data?.name.replace("https://" || "http://", "")}
            </a>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <BiCurrentLocation className="text-xl" />
          <p>{data?.location}</p>
        </div>
        <div className="flex items-center gap-3">
          <BsFillTelephoneFill className="text-xl" />
          <p>{data?.phone}</p>
        </div>
      </div>
    </CardWrapper>
  );
}

export default ClinicInfo;
