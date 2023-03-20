import { IconType } from "react-icons";

const HeaderButton = (props: {
  label: string | null | undefined;
  icon: IconType;
  handleClick: () => void;
}) => {
  return (
    <div
      className="mr-4 flex cursor-pointer flex-row flex-wrap items-center justify-center rounded-md bg-primary-dark py-2 px-3 shadow-md hover:bg-primary"
      onClick={props.handleClick}
    >
      <props.icon className="h-4 w-4 text-textColor" />

      {props.label && (
        <p className="ml-2 text-sm font-semibold text-textColor">
          {props.label}
        </p>
      )}
    </div>
  );
};

export default HeaderButton;
