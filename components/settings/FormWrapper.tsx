import { IconType } from "react-icons";

function FormWrapper(props: {
  icon: IconType;
  title: String;
  description: String;
  child: any;
}) {
  return (
    <div className="w-full rounded-lg bg-primary p-5 text-lg font-medium text-textColor">
      <div className="flex flex-row items-start">
        <props.icon className="mr-4 mt-2 h-8 w-8 text-textColor" />

        <div className="flex flex-col">
          <span className="mt-2 mb-4 text-2xl font-bold">{props.title}</span>

          <span className="text-md mb-6">{props.description}</span>

          <props.child />
        </div>
      </div>
    </div>
  );
}

export default FormWrapper;