import { BsFillTelephoneFill, BsPaperclip } from "react-icons/bs";
import { BiCurrentLocation } from "react-icons/bi";
import CardWrapper from "../../card/CardWrapper";

const arr = [
  { title: "Horizon Therapy Center", icon: BsPaperclip },
  { title: "1234 Main Street, New York, NY 10001", icon: BiCurrentLocation },
  { title: "212-555-5555", icon: BsFillTelephoneFill },
];

function ClinicInfo() {
  return (
    <CardWrapper title="CLINIC INFO">
      <div className="flex flex-col gap-5 font-medium text-textColor">
        {arr.map((item) => (
          <div className="flex items-center gap-3" key={item.title}>
            <item.icon className="text-xl " />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </CardWrapper>
  );
}

export default ClinicInfo;
