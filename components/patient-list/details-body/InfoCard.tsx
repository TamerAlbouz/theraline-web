import { patientDataModel } from "../../../types/patientData";

const InfoCard = (props: { data: patientDataModel }) => {
  const infoItems: Array<{ label: string; value: string }> = [
    { label: "Gender", value: props.data.gender },
    { label: "Birthday", value: props.data.birthday },
    { label: "Phone Number", value: props.data.phoneNumber },
    { label: "Street Address", value: props.data.street },
    { label: "City", value: props.data.city },
    { label: "Zip Code", value: props.data.zipCode },
    { label: "Member Status", value: props.data.memberStatus },
    { label: "Registered Date", value: props.data.registerDate },
  ];

  return (
    <div className="grid grid-cols-3 rounded-lg bg-primary-dark px-6 py-10">
      {infoItems.map((e, index) => {
        return (
          <div
            className="flex flex-col items-center border-b border-white p-4 text-center"
            key={index}
          >
            <p className="text-md text-textColor">{e.label}</p>

            <p className="text-lg font-bold text-textColor">{e.value}</p>
          </div>
        );
      })}
    </div>
  );
};

export default InfoCard;
