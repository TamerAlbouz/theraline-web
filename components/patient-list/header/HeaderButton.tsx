import { IconType } from "react-icons";

const HeaderButton = (props: {
  label: string;
  icon: IconType | null | undefined;
  handleClick: () => void;
}) => {
  return (
    <div
      className="mr-4 flex h-8 cursor-pointer flex-row flex-wrap items-center rounded-md bg-white px-2 shadow-md"
      onClick={props.handleClick}
    >
      {props.icon && <props.icon className="mr-2 h-4 w-4 text-primary-dark" />}

      <p className="font-semibold text-primary text-sm">{props.label}</p>
    </div>
  );
};

export default HeaderButton;
