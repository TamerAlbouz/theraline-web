import { IconType } from "react-icons";

function HeaderButton(props: {
  label: string | null | undefined;
  Icon: IconType;
  handleClick: () => void;
}) {
  const { Icon, label, handleClick } = props;
  return (
    <button
      type="button"
      className="mr-4 flex cursor-pointer flex-row flex-wrap items-center justify-center rounded-md bg-primary-dark py-2 px-3 shadow-md hover:bg-primary"
      onClick={handleClick}>
      <Icon className="h-4 w-4 text-textColor" />

      {label && (
        <p className="ml-2 text-sm font-semibold text-textColor">{label}</p>
      )}
    </button>
  );
}

export default HeaderButton;
