const InfoCard = (props: {
  gender: string;
  birthday: string;
  phoneNumber: string;
  street: string;
  city: string;
  zipCode: string;
  memberStatus: string;
  registerDate: string;
}) => {
  const infoItems: Array<{ label: string; value: string }> = [
    { label: "Gender", value: props.gender },
    { label: "Birthday", value: props.birthday },
    { label: "Phone Number", value: props.phoneNumber },
    { label: "Street Address", value: props.street },
    { label: "City", value: props.city },
    { label: "Zip Code", value: props.zipCode },
    { label: "Member Status", value: props.memberStatus },
    { label: "Registered Date", value: props.registerDate },
  ];

  return (
    <div className="grid grid-cols-3 rounded-lg bg-primary-dark px-6 py-10">
      {infoItems.map((e, index) => {
        return (
          <div
            className="flex flex-col items-center border-b border-white p-4 text-center"
            key={index}
          >
            <p className="text-md text-white">{e.label}</p>

            <p className="text-lg font-bold text-white">{e.value}</p>
          </div>
        );
      })}
    </div>
  );
};

export default InfoCard;
