import { format } from "date-fns";
import { PatientDetails } from "../../../../hooks/queries/patient-list/usePatientDetailsQuery";

function InfoCard(props: { data: PatientDetails }) {
  const { data } = props;
  const { gender, birthday } = data;

  const infoItems: Array<{ label: string; value: string }> = [
    { label: "Gender", value: gender },
    { label: "Birthday", value: format(new Date(birthday), "PPP") },
  ];

  return (
    <div className="grid grid-cols-2 rounded-lg bg-primary-dark px-6 py-10">
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
