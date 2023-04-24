import { BsFillTelephoneFill, BsPaperclip } from "react-icons/bs";
import { BiCurrentLocation } from "react-icons/bi";
import CardWrapper from "../../../card/CardWrapper";
import { useClinicQuery } from "../../../../hooks/queries/overview/useClinicQuery";

function ClinicInfo() {
  const { data } = useClinicQuery();

  const arr = [
    { title: data?.name, icon: BsPaperclip },
    { title: data?.location, icon: BiCurrentLocation },
    { title: data?.phone, icon: BsFillTelephoneFill },
  ];

  return (
    <CardWrapper title="CLINIC INFO">
      <div className="flex flex-col gap-5 font-medium text-textColor">
        {arr.map((item) => (
          <div className="flex items-center gap-3" key={item.title}>
            <item.icon className="text-xl" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </CardWrapper>
  );
}

export default ClinicInfo;
