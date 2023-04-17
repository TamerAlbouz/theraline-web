import { patientDataModel } from "../../../../types/patientData";

function InfoCard(props: { data: patientDataModel }) {
  const { data } = props;
  const {
    gender,
    birthday,
    phoneNumber,
    street,
    city,
    zipCode,
    memberStatus,
    registerDate,
  } = data;
  const infoItems: Array<{ label: string; value: string }> = [
    { label: "Gender", value: gender },
    { label: "Birthday", value: birthday },
    { label: "Phone Number", value: phoneNumber },
    { label: "Street Address", value: street },
    { label: "City", value: city },
    { label: "Zip Code", value: zipCode },
    { label: "Member Status", value: memberStatus },
    { label: "Registered Date", value: registerDate },
  ];

  return (
    <div className="grid grid-cols-3 rounded-lg bg-primary-dark px-6 py-10">
      {infoItems.map((e) => {
        return (
          <div
            className="flex flex-col items-center border-b border-white p-4 text-center"
            key={e.label}>
            <p className="text-md text-textColor">{e.label}</p>

            <p className="text-lg font-bold text-textColor">{e.value}</p>
          </div>
        );
      })}
    </div>
  );
}

export default InfoCard;
