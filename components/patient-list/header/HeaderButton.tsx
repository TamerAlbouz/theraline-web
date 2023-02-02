import { IconType } from "react-icons";

const HeaderButton = (props: {
  label: string;
  icon: IconType | null | undefined;
  handleClick: () => void;
}) => {
  return (
    <div
      className="mr-4 flex cursor-pointer flex-row flex-wrap items-center justify-center rounded-md bg-primary-dark py-2 px-3 shadow-md"
      onClick={props.handleClick}
    >
      {props.icon && <props.icon className="mr-2 h-4 w-4 text-white" />}

      <p className="text-sm font-semibold text-white">{props.label}</p>
    </div>
  );
};

export default HeaderButton;
